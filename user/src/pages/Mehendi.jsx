import React, { useEffect, useState } from 'react'
import Hedaer from '../common/Hedaer'
import api from '../utility/AxiosConfig'
import { useParams } from "react-router-dom";
import Footer from '../common/Footer';
import { Link } from "react-router-dom";

function Mehendi() {
  return (
    <div>
      <Hedaer/>
      <MehendiContent/>
      <Footer/>
    </div>
  )
}

function MehendiContent (){
   let [services, setservices] = useState([]);
   let [loading , setLoading] = useState(false);
   let [ error, setError] = useState("");
   let [selectedService, setSelectedService] = useState("");
   let { category_id } = useParams();
   let { service_id } = useParams();
   let [gallery, setGallery] = useState(null);
   async function FetchGallery() {
  try {
    const slug = services?.[0]?.category_slug || "mehendi";

    const response = await api.get(`/user/getgallery/${slug}`);

    if (response.data.success) {
      setGallery(response.data.data);
    }
  } catch (err) {
    console.log(err);
  }
}
useEffect(() => {
  if (services.length > 0) {
    FetchGallery();
  }
}, [services]);
   let [formData, setFormData] = useState({
      name: "",
      email: "",
      mobile_no: "",
      city: "",
      service_title: "",
      price:"",
      booking_date: "",
      booking_time: "",
      number_of_people: "",
      notes:"",
   })
   let [image, setImage] = useState(null);

   const handleChange = (e) => {
  const { name, value } = e.target;

  if (name === "service_title") {
    const selectedService = services.find(
      (service) => service.title === value
    );

    setFormData({
      ...formData,
      service_title: value,
      price: selectedService ? selectedService.price : "",
    });

    return;
  }

  setFormData({
    ...formData,
    [name]: value,
  });
};
const handleFileChange = (e) => {
  setImage(e.target.files[0]);
};
const verifyPayment = async (
  bookingId,
  paymentData
) => {
  try {

    const response = await api.post(
      "/verify-payment",
      {
        booking_id: bookingId,
        razorpay_order_id:
          paymentData.razorpay_order_id,
        razorpay_payment_id:
          paymentData.razorpay_payment_id,
        razorpay_signature:
          paymentData.razorpay_signature,
      },
      {
        headers: {
          Authorization:
            `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    alert(response.data.message);

  } catch (err) {

    console.log(err);

    alert("Payment verification failed");

  }
};

const startPayment = async (bookingId) => {

  try {

    const orderResponse = await api.post(
      "/generate-order",
      {
        booking_id: bookingId,
      },
      {
        headers: {
          Authorization:
            `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    const order = orderResponse.data.data;

    const options = {

      key: import.meta.env.VITE_RAZORPAY_KEY,

      amount: order.total_amount,

      currency: order.currency,

      name: "HiR Atelier",

      description: "Service Booking",

      order_id: order.order_id,

      handler: async function (response) {

        await verifyPayment(
          bookingId,
          response
        );

      },

      prefill: {
        name: formData.name,
        email: formData.email,
        contact: formData.mobile_no,
      },

      theme: {
        color: "#A38F7A",
      },

      modal: {
        ondismiss: function () {
          alert("Payment cancelled");
        },
      },

    };

    const razorpay =
      new window.Razorpay(options);

    razorpay.open();

  } catch (err) {

    console.log(err);

    alert("Payment initialization failed");

  }

};

const handleBooking = async (e) => {

  e.preventDefault();

  try {

    const data = new FormData();

    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("mobile_no", formData.mobile_no);
    data.append("city", formData.city);
    data.append("service_title", formData.service_title);
    data.append("booking_date", formData.booking_date);
    data.append("booking_time", formData.booking_time);
    data.append(
      "number_of_people",
      formData.number_of_people
    );
    data.append("notes", formData.notes);

    if (image) {
      data.append(
        "inspiration_image",
        image
      );
    }

    const response = await api.post(
      "/user/booking",
      data,
      {
        headers: {
          Authorization:
            `Bearer ${localStorage.getItem("token")}`,
          "Content-Type":
            "multipart/form-data",
        },
      }
    );

    const bookingId =
      response.data.booking_id;

    await startPayment(bookingId);

  } catch (err) {

    console.log(err);

    alert(
      err.response?.data?.message ||
      "Booking failed"
    );

  }

};

   async function FetchServices() {
  try {
    setLoading(true);

    const response = await api.get(`/user/getservices/${category_id}`);

    console.log("Success:", response);

    setservices(response.data?.services || []);

  } catch (e) {
    console.log("Full Error:", e);
    console.log("Response:", e.response);
    console.log("Data:", e.response?.data);
    console.log("Status:", e.response?.status);

    setError(e.response?.data?.message || e.message);
  } finally {
    setLoading(false);
  }
}
   useEffect(() =>{
    FetchServices();
   },[category_id])

   if (error) return <h2>{error}</h2>
    return(
        <>
           <div className='bg-background text-on-background font-body-md overflow-x-hidden'>
            <main className="max-w-container-max mx-auto">
  
  <section className="pt-20 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto" id="services">
    <div className="text-center mb-16">
      <p className="font-label-caps text-label-caps text-secondary mb-2">Our Offerings</p>
      <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-primary">Artisanal Services</h2>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
      {/* Bridal */}
      {loading? (
        <>
          <h3>Loading...</h3>
        </>
      ):(
        services?.map((value) => (
          <>
            <div key = {value._id} className="group relative aspect-[3/4] overflow-hidden rounded-xl shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
        <img alt="Bridal Mehendi" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"src={`https://hir-atelier.onrender.com/uploads/${value.image.split("\\").pop()}`} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8">
          <h3 className="font-headline-md text-headline-md text-white mb-2">{value.title}</h3>
          <p className="text-white/70 font-body-md text-body-md">{value.description}</p>
        </div>
      </div>
          </>
        ))
      )}
      
     
    </div>
  </section>
  {/* Why Choose Us */}
  <section className="bg-surface-container-low py-stack-xl">
    <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
        <div className="p-8 bg-surface rounded-xl text-center flex flex-col items-center border border-outline-variant/20 hover:border-primary/30 transition-all">
          <div className="w-16 h-16 rounded-full bg-primary-fixed flex items-center justify-center mb-6 text-primary">
            <span className="material-symbols-outlined text-4xl">eco</span>
          </div>
          <h4 className="font-headline-md text-[24px] text-primary mb-3">100% Natural Henna</h4>
          <p className="text-secondary font-body-md">Organic, chemical-free henna sourced directly for a rich, safe stain.</p>
        </div>
        <div className="p-8 bg-surface rounded-xl text-center flex flex-col items-center border border-outline-variant/20 hover:border-primary/30 transition-all">
          <div className="w-16 h-16 rounded-full bg-primary-fixed flex items-center justify-center mb-6 text-primary">
            <span className="material-symbols-outlined text-4xl">edit_square</span>
          </div>
          <h4 className="font-headline-md text-[24px] text-primary mb-3">Customized Designs</h4>
          <p className="text-secondary font-body-md">Unique patterns tailored to your personal story and style preferences.</p>
        </div>
        <div className="p-8 bg-surface rounded-xl text-center flex flex-col items-center border border-outline-variant/20 hover:border-primary/30 transition-all">
          <div className="w-16 h-16 rounded-full bg-primary-fixed flex items-center justify-center mb-6 text-primary">
            <span className="material-symbols-outlined text-4xl">workspace_premium</span>
          </div>
          <h4 className="font-headline-md text-[24px] text-primary mb-3">Experienced Artist</h4>
          <h4 className="sr-only">Experienced Artist</h4>
          <p className="text-secondary font-body-md">Over a decade of expertise in traditional and contemporary henna arts.</p>
        </div>
        <div className="p-8 bg-surface rounded-xl text-center flex flex-col items-center border border-outline-variant/20 hover:border-primary/30 transition-all">
          <div className="w-16 h-16 rounded-full bg-primary-fixed flex items-center justify-center mb-6 text-primary">
            <span className="material-symbols-outlined text-4xl">house</span>
          </div>
          <h4 className="font-headline-md text-[24px] text-primary mb-3">Home Service</h4>
          <p className="text-secondary font-body-md">Luxury and convenience at your doorstep for a stress-free experience.</p>
        </div>
      </div>
    </div>
  </section>
  {/* Portfolio Gallery */}
 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

  {gallery?.images?.slice(0, 6).map((img, index) => (
    <div
      key={index}
      className="group overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-500"
    >
      <img
        src={`https://hir-atelier.onrender.com/${img.replace(/\\/g, "/")}`}
        alt=""
        className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
      />
    </div>
  ))}

</div>

<div className="flex justify-center mt-12">
  <Link
    to={`/collection#${gallery?.service || "mehendi"}`}
    className="px-8 py-3 border-2 border-[#A38F7A] text-[#A38F7A] rounded-full uppercase tracking-widest text-sm font-semibold hover:bg-[#A38F7A] hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg"
  >
    View Full Gallery →
  </Link>
</div>
  {/* Packages Section */}
  <section className="py-stack-xl bg-surface">
    <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <div className="text-center mb-16">
        <p className="font-label-caps text-label-caps text-secondary mb-2">Our Rates</p>
        <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-primary">Curated Packages</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter items-stretch">
        {/* Classic */}
        <div className="bg-surface-container p-8 rounded-xl flex flex-col border border-outline-variant/10 hover:shadow-md transition-all">
          <h5 className="font-headline-md text-[24px] text-primary mb-2">Bridal Classic</h5>
          <p className="text-secondary font-label-caps text-[10px] tracking-widest mb-6">4 HOURS SESSION</p>
          <div className="text-primary font-display-lg text-[40px] mb-8">$250+</div>
          <ul className="space-y-4 mb-10 flex-grow">
            <li className="flex items-start gap-2 text-on-surface-variant font-body-md"><span className="material-symbols-outlined text-primary text-lg">check_circle</span>Intricate palm to wrist design</li>
            <li className="flex items-start gap-2 text-on-surface-variant font-body-md"><span className="material-symbols-outlined text-primary text-lg">check_circle</span>Standard bridal feet patterns</li>
            <li className="flex items-start gap-2 text-on-surface-variant font-body-md"><span className="material-symbols-outlined text-primary text-lg">check_circle</span>Aftercare kit included</li>
          </ul>
          <a className="w-full py-4 text-center border border-primary text-primary rounded-full font-label-caps text-label-caps hover:bg-primary hover:text-white transition-all" href="#booking">Select Package</a>
        </div>
        {/* Premium */}
        <div className="bg-primary text-on-primary p-8 rounded-xl flex flex-col shadow-xl scale-105 relative z-10">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary-container text-on-primary-container px-4 py-1 rounded-full font-label-caps text-[10px]">MOST POPULAR</div>
          <h5 className="font-headline-md text-[24px] mb-2">Bridal Premium</h5>
          <p className="text-on-primary/60 font-label-caps text-[10px] tracking-widest mb-6">FULL DAY SESSION</p>
          <div className="font-display-lg text-[40px] mb-8">$450+</div>
          <ul className="space-y-4 mb-10 flex-grow">
            <li className="flex items-start gap-2 font-body-md"><span className="material-symbols-outlined text-primary-container text-lg" style={{fontVariationSettings: '"FILL" 1'}}>check_circle</span>Elbow-length detailed stories</li>
            <li className="flex items-start gap-2 font-body-md"><span className="material-symbols-outlined text-primary-container text-lg" style={{fontVariationSettings: '"FILL" 1'}}>check_circle</span>Ornate mid-calf feet design</li>
            <li className="flex items-start gap-2 font-body-md"><span className="material-symbols-outlined text-primary-container text-lg" style={{fontVariationSettings: '"FILL" 1'}}>check_circle</span>Custom motif personalization</li>
            <li className="flex items-start gap-2 font-body-md"><span className="material-symbols-outlined text-primary-container text-lg" style={{fontVariationSettings: '"FILL" 1'}}>check_circle</span>Complimentary trial session</li>
          </ul>
          <a className="w-full py-4 text-center bg-primary-container text-on-primary-container rounded-full font-label-caps text-label-caps shimmer-hover transition-all" href="#booking">Select Package</a>
        </div>
        {/* Engagement */}
        <div className="bg-surface-container p-8 rounded-xl flex flex-col border border-outline-variant/10 hover:shadow-md transition-all">
          <h5 className="font-headline-md text-[24px] text-primary mb-2">Engagement Special</h5>
          <p className="text-secondary font-label-caps text-[10px] tracking-widest mb-6">2 HOURS SESSION</p>
          <div className="text-primary font-display-lg text-[40px] mb-8">$150+</div>
          <ul className="space-y-4 mb-10 flex-grow">
            <li className="flex items-start gap-2 text-on-surface-variant font-body-md"><span className="material-symbols-outlined text-primary text-lg">check_circle</span>Elegant Arabic or Mandalas</li>
            <li className="flex items-start gap-2 text-on-surface-variant font-body-md"><span className="material-symbols-outlined text-primary text-lg">check_circle</span>Single hand back &amp; front</li>
            <li className="flex items-start gap-2 text-on-surface-variant font-body-md"><span className="material-symbols-outlined text-primary text-lg">check_circle</span>Luxury finish spray</li>
          </ul>
          <a className="w-full py-4 text-center border border-primary text-primary rounded-full font-label-caps text-label-caps hover:bg-primary hover:text-white transition-all" href="#booking">Select Package</a>
        </div>
        {/* Festival */}
        <div className="bg-surface-container p-8 rounded-xl flex flex-col border border-outline-variant/10 hover:shadow-md transition-all">
          <h5 className="font-headline-md text-[24px] text-primary mb-2">Festival Package</h5>
          <p className="text-secondary font-label-caps text-[10px] tracking-widest mb-6">PER HAND BASIS</p>
          <div className="text-primary font-display-lg text-[40px] mb-8">$35+</div>
          <ul className="space-y-4 mb-10 flex-grow">
            <li className="flex items-start gap-2 text-on-surface-variant font-body-md"><span className="material-symbols-outlined text-primary text-lg">check_circle</span>Choice of 10+ patterns</li>
            <li className="flex items-start gap-2 text-on-surface-variant font-body-md"><span className="material-symbols-outlined text-primary text-lg">check_circle</span>Fast application service</li>
            <li className="flex items-start gap-2 text-on-surface-variant font-body-md"><span className="material-symbols-outlined text-primary text-lg">check_circle</span>Group booking discounts</li>
          </ul>
          <a className="w-full py-4 text-center border border-primary text-primary rounded-full font-label-caps text-label-caps hover:bg-primary hover:text-white transition-all" href="#booking">Select Package</a>
        </div>
      </div>
    </div>
  </section>
  {/* Testimonials */}
  <section className="py-stack-xl px-margin-mobile md:px-margin-desktop overflow-hidden">
    <div className="max-w-container-max mx-auto">
      <div className="mb-12">
        <p className="font-label-caps text-label-caps text-secondary mb-2">Kind Words</p>
        <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-primary">From Our Clients</h2>
      </div>
      <div className="flex gap-gutter overflow-x-auto pb-8 snap-x no-scrollbar">
        <div className="min-w-[320px] md:min-w-[400px] bg-white p-10 rounded-xl shadow-sm border border-outline-variant/10 snap-center">
          <div className="flex gap-1 text-primary mb-6">
            <span className="material-symbols-outlined" style={{fontVariationSettings: '"FILL" 1'}}>star</span>
            <span className="material-symbols-outlined" style={{fontVariationSettings: '"FILL" 1'}}>star</span>
            <span className="material-symbols-outlined" style={{fontVariationSettings: '"FILL" 1'}}>star</span>
            <span className="material-symbols-outlined" style={{fontVariationSettings: '"FILL" 1'}}>star</span>
            <span className="material-symbols-outlined" style={{fontVariationSettings: '"FILL" 1'}}>star</span>
          </div>
          <p className="font-body-lg text-secondary italic mb-8">"The attention to detail was breathtaking. My bridal mehendi stayed vibrant for weeks, and the artist was so professional and patient throughout the 6-hour session."</p>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <img className="w-full h-full object-cover" data-alt="Portrait of a smiling young woman with elegant makeup, soft indoor lighting, high-end lifestyle photography, cream and gold color palette." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDeCHXWV_G4sqT-1AA2YJpIxnsMqXstV-lEZxGMtfpBKifY0pva1p4SvJmboRKqY079COo4pnC7MZdoEc8b_RTUDb5vOqVcOHbVZwle-oE1qs6FM6Mn9MUa3HlSVvyp_7JdQ9yZrjGDgMO2fyyXR_RRznfulkxItJ_tS8bhTX7gjr7ghkfxnmyuRCYi3V8ohYPIwmzPzKJlLuCirCMToXKIyxOnyx_zdnbR_HT-xPgbzw5PDh4yIRSeuShvs2r6x3zGe_FhI7hWsRo" />
            </div>
            <div>
              <h6 className="font-headline-md text-[18px] text-primary">Ananya Sharma</h6>
              <p className="text-secondary font-label-caps text-[10px]">BRIDAL CLIENT</p>
            </div>
          </div>
        </div>
        <div className="min-w-[320px] md:min-w-[400px] bg-white p-10 rounded-xl shadow-sm border border-outline-variant/10 snap-center">
          <div className="flex gap-1 text-primary mb-6">
            <span className="material-symbols-outlined" style={{fontVariationSettings: '"FILL" 1'}}>star</span>
            <span className="material-symbols-outlined" style={{fontVariationSettings: '"FILL" 1'}}>star</span>
            <span className="material-symbols-outlined" style={{fontVariationSettings: '"FILL" 1'}}>star</span>
            <span className="material-symbols-outlined" style={{fontVariationSettings: '"FILL" 1'}}>star</span>
            <span className="material-symbols-outlined" style={{fontVariationSettings: '"FILL" 1'}}>star</span>
          </div>
          <p className="font-body-lg text-secondary italic mb-8">"Truly handcrafted excellence. We booked HiR Atelier for our Diwali party, and all our guests were amazed by the speed and precision of the designs. Highly recommend!"</p>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <img className="w-full h-full object-cover" data-alt="Portrait of a sophisticated man in business casual attire, warm studio lighting, minimalist background, professional and friendly mood." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgrk3HSOnXku7sUXG_i5o6e4H1b7_jyq1MQnUI2egkLnoCQMxvwg_0VwF0R7lh0dqVIwPB4yyA66qYghHa3SXxRo9dB129LRS7FGR5STCcXmNoXPyKtIpA-ELrPaFQlAz_07spAYW445E0NGLuvWFfw_O1QfweL6DwqmrloQhfGWrOQnZrRJXYWp7w3RiXgKhRx1MpA70MDWOSYRfOpnOZmNtyUNYdiWftEN2a1eEVVn_iSfNk9CAkw9QW4ErrTIeHUpIyzt0vjJE" />
            </div>
            <div>
              <h6 className="font-headline-md text-[18px] text-primary">Vikram Patel</h6>
              <p className="text-secondary font-label-caps text-[10px]">CORPORATE CLIENT</p>
            </div>
          </div>
        </div>
        <div className="min-w-[320px] md:min-w-[400px] bg-white p-10 rounded-xl shadow-sm border border-outline-variant/10 snap-center">
          <div className="flex gap-1 text-primary mb-6">
            <span className="material-symbols-outlined" style={{fontVariationSettings: '"FILL" 1'}}>star</span>
            <span className="material-symbols-outlined" style={{fontVariationSettings: '"FILL" 1'}}>star</span>
            <span className="material-symbols-outlined" style={{fontVariationSettings: '"FILL" 1'}}>star</span>
            <span className="material-symbols-outlined" style={{fontVariationSettings: '"FILL" 1'}}>star</span>
            <span className="material-symbols-outlined" style={{fontVariationSettings: '"FILL" 1'}}>star</span>
          </div>
          <p className="font-body-lg text-secondary italic mb-8">"I wanted something unique for my engagement that wasn't too heavy. They created a custom geometric piece that was exactly what I had in mind. Exquisite work."</p>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <img className="w-full h-full object-cover" data-alt="Portrait of a young woman with natural styling, looking serene, soft window light, clean and minimalist aesthetic, high-end editorial look." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRYk3g41i-hIfN2ZsPewgKrzkvFBDjOgBRSSu_SiO0JuEi7O4cAQkIrO7-h0U4HQZh-x2O5OQpDaRiugatO9H7XQjhpdt79QzYGGMF8PcOfgry85s0cWMIWEtxchKBjf_-wpmgdKiWpbUNM1RygXA45qcDz1kuvPWAVUkOZWuhXj49fqyJquakO4o8cdo-s6cY5fWz1zYNawLP3EyhkI9TI4EgG6v-Cu6SbEoK5AEq8otV_mMcD5AsVV3duxZc9Qd4kuisgfYCHsc" />
            </div>
            <div>
              <h6 className="font-headline-md text-[18px] text-primary">Sarah Jenkins</h6>
              <p className="text-secondary font-label-caps text-[10px]">ENGAGEMENT CLIENT</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Booking Section */}
 <section
  className="py-24 bg-[#faf7f2]"
  id="booking"
>
  <div className="max-w-6xl mx-auto px-6">
    <div className="text-center mb-16">
      <span className="uppercase tracking-[4px] text-primary text-sm">
        Book Appointment
      </span>

      <h2 className="text-5xl font-serif mt-4 mb-6 text-primary">
        Reserve Your Mehendi Session
      </h2>

      <p className="max-w-2xl mx-auto text-gray-600">
        Whether it's your wedding, engagement, festival celebration, or a
        custom mehendi design, we'd love to create something beautiful for
        your special day.
      </p>
    </div>

    <div className="bg-white shadow-xl rounded-3xl p-10 md:p-14">
      <form className="grid md:grid-cols-2 gap-6" onSubmit={handleBooking}>
        <div>
          <label className="block mb-2 text-sm font-medium">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full border rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium">
            Phone Number
          </label>
          <input
             name="mobile_no"
            value={formData.mobile_no}
            onChange={handleChange}
            type="tel"
            placeholder="+91 XXXXX XXXXX"
            className="w-full border rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium">
            Email Address
          </label>
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            placeholder="example@gmail.com"
            className="w-full border rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium">
            Event Type
          </label>
          <select
  name="service_title"
  value={formData.service_title}
  onChange={handleChange}
  className="w-full border rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-primary"
>
  <option value="">Select Service</option>

  {services?.map((service) => (
    <option key={service._id} value={service.title}>
      {service.title}
    </option>
  ))}
</select>
        </div>
<div>
  <label className="block mb-2 text-sm font-medium">
    Service Price
  </label>

  <input
    type="text"
    value={
      formData.price
        ? `₹${formData.price}`
        : ""
    }
    readOnly
    placeholder="Price will appear automatically"
    className="w-full border rounded-xl p-4 bg-gray-100 cursor-not-allowed"
  />
</div>
        <div>
          <label className="block mb-2 text-sm font-medium">
            Event Date
          </label>
          <input
           name="booking_date"
          value={formData.booking_date}
          onChange={handleChange}
            type="date"
            className="w-full border rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium">
            Location
          </label>
          <input
            name="city"
            value={formData.city}
            onChange={handleChange}
            type="text"
            placeholder="City"
            className="w-full border rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
         <div>
          <label className="block mb-2 text-sm font-medium">
            Number of people
          </label>
          <input
            type="number"
            name="number_of_people"
            value={formData.number_of_people}
            onChange={handleChange}
            placeholder="number of people"
            className="w-full border rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
         <div>
          <label className="block mb-2 text-sm font-medium">
            Booking Time
          </label>
          <input
            type="time"
            name="booking_time"
            value={formData.booking_time}
            onChange={handleChange}
            className="w-full border rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium">
            Design Reference (Optional)
          </label>

          <input
            type="file"
            name="inspiration_image"
            onChange={handleFileChange}
            className="w-full border rounded-xl p-4"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block mb-2 text-sm font-medium">
            Additional Notes
          </label>

          <textarea
          type="text"
          name="notes"
          value={formData.notes}
          onChange={handleChange}
            rows="5"
            placeholder="Tell us about your event, design preferences, or any special requests..."
            className="w-full border rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-primary"
          ></textarea>
        </div>

        <div className="md:col-span-2">
          <button
            type="submit"
            className="w-full bg-primary text-white py-5 rounded-xl hover:opacity-90 transition"
          >
            BOOK APPOINTMENT
          </button>
        </div>
      </form>
    </div>
  </div>
</section>
  </main>
</div>

        </>
    )
}
export default Mehendi
