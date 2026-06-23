import React from 'react'
import Hedaer from '../common/Hedaer'
import Footer from '../common/Footer'
import api from '../utility/AxiosConfig';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";

function Crafts() {
  return (
    <div>
      <Hedaer/>
      <CraftContent/>
      <Footer/>
    </div>
  )
}

function CraftContent (){
    let [services, setservices] = useState([]);
    let [loading , setLoading] = useState(false);
    let [ error, setError] = useState("");
    let [selectedService, setSelectedService] = useState("");
    let { category_id } = useParams();
    let { service_id } = useParams();
    let [galleries, setGalleries] = useState([]);
   
   const FetchGallery = async () => {
  try {
    const slugs = [
      "wedding-rumals",
      "decorative-trays",
      "handmade-jewellery",
      "photo-sketch",
    ];

    const responses = await Promise.all(
      slugs.map((slug) =>
        api.get(`/user/getgallery/${slug}`)
      )
    );

    const galleryData = responses.map((res, index) => ({
      slug: slugs[index],
      images: res.data.data?.images || [],
    }));

    setGalleries(galleryData);

  } catch (err) {
    console.log(err);
  }
};
useEffect(() => {
  FetchGallery();
}, []);
     let [formData, setFormData] = useState({
        name: "",
        email: "",
        mobile_no: "",
        city: "",
        service_title: "",
        service_price:"",
        booking_date: "",
        booking_time: "",
        number_of_people: "",
        notes:"",
     })
     let [image, setImage] = useState(null);
  
     let handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
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
            `Bearer ${localStorage.getItem("token")}`
        }
      }
    );

    alert(response.data.message);

  } catch (err) {

    console.log(err);

    alert("Payment verification failed");

  }
};

const startPayment = async (
  bookingId,
  amount
) => {

  try {

    const orderRes = await api.post(
      "/generate-order",
      {
        booking_id: bookingId,
        amount: Number(amount)
      },
      {
        headers: {
          Authorization:
            `Bearer ${localStorage.getItem("token")}`
        }
      }
    );

    const order = orderRes.data.data;

    const razorpay = new window.Razorpay({

      key: import.meta.env.VITE_RAZORPAY_KEY,

      amount: order.amount,

      currency: order.currency,

      order_id: order.order_id,

      name: "HiR Atelier",

      description: "Craft Booking",

      handler: async (response) => {

        await verifyPayment(
          bookingId,
          response
        );

      },

      prefill: {
        name: formData.name,
        email: formData.email,
        contact: formData.mobile_no
      },

      theme: {
        color: "#7B5D43"
      }

    });

    razorpay.open();

  } catch (err) {

    console.log(err);

    alert("Payment initialization failed");

  }
};
  
  let handleBooking = async (e) => {

  e.preventDefault();

  try {

    const data = new FormData();

    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("mobile_no", formData.mobile_no);
    data.append("city", formData.city);
    data.append("service_title", formData.service_title);
    data.append("service_price", formData.service_price);
    data.append("booking_date", formData.booking_date);
    data.append("notes",formData.notes);

    if (image) {
      data.append("inspiration_image", image);
    }

    const bookingRes = await api.post(
      "/user/booking",
      data,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "multipart/form-data",
        },
      }
    );

    const bookingId =
      bookingRes.data.booking_id ||
      bookingRes.data.data?._id;

    await startPayment(
      bookingId,
      formData.service_price
    );

  } catch (err) {

    console.log(err);

    alert(
      err.response?.data?.message ||
      "Booking Failed"
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
       <div>
  <section className="py-stack-xl bg-surface">
    <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
      <div className="mb-16">
        <h2 className="font-headline-xl text-headline-xl text-primary mb-4">Our Bespoke Services</h2>
        <div className="w-24 h-1 bg-primary-fixed-dim" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-gutter">
        {loading? (
          <>
            <h3>Loading...</h3>
          </>
        ):(
          <>
            {services?.map ((value => (
              <>
                 <div key={value._id} className="group relative aspect-[3/4] overflow-hidden rounded-xl cursor-pointer">
                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="Close up of a luxury embroidered roomal with gold threads and intricate traditional patterns on ivory silk fabric. The lighting is soft and warm, emphasizing the texture of the hand-stitching." src={`https://hir-atelier.onrender.com/uploads/${value.image.split("\\").pop()}`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
                  <h3 className="font-headline-md text-headline-md text-white mb-2">{value.title}</h3>
                  <p className="text-white/80 font-body-md text-sm">{value.description}</p>
                </div>
              </div>
              </>
            )))}
          </>
        )}
        {/* Card 1 */}
       
      
      </div>
    </div>
  </section>
  {/* Why Choose Us */}
  <section className="py-stack-xl bg-surface-container-low">
    <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center">
      <h2 className="font-headline-xl text-headline-xl text-primary mb-16">The Atelier Difference</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* Feature 1 */}
        <div className="flex flex-col items-center p-8 bg-white rounded-2xl shadow-sm border border-outline-variant/30 hover:-translate-y-2 transition-all duration-300">
          <span className="material-symbols-outlined text-4xl text-primary mb-6">precision_manufacturing</span>
          <h4 className="font-headline-md text-xl mb-4">Handmade Precision</h4>
          <p className="text-on-surface-variant font-body-md">Every stitch and bead is placed with meticulous care by our expert artisans.</p>
        </div>
        {/* Feature 2 */}
        <div className="flex flex-col items-center p-8 bg-white rounded-2xl shadow-sm border border-outline-variant/30 hover:-translate-y-2 transition-all duration-300">
          <span className="material-symbols-outlined text-4xl text-primary mb-6">edit_note</span>
          <h4 className="font-headline-md text-xl mb-4">Customization</h4>
          <p className="text-on-surface-variant font-body-md">We tailor every design to reflect your unique personal story and aesthetic.</p>
        </div>
        {/* Feature 3 */}
        <div className="flex flex-col items-center p-8 bg-white rounded-2xl shadow-sm border border-outline-variant/30 hover:-translate-y-2 transition-all duration-300">
          <span className="material-symbols-outlined text-4xl text-primary mb-6">diamond</span>
          <h4 className="font-headline-md text-xl mb-4">Premium Materials</h4>
          <p className="text-on-surface-variant font-body-md">Only the finest silks, gold threads, and semi-precious stones enter our studio.</p>
        </div>
        {/* Feature 4 */}
        <div className="flex flex-col items-center p-8 bg-white rounded-2xl shadow-sm border border-outline-variant/30 hover:-translate-y-2 transition-all duration-300">
          <span className="material-symbols-outlined text-4xl text-primary mb-6">history_edu</span>
          <h4 className="font-headline-md text-xl mb-4">Traditional Craftsmanship</h4>
          <p className="text-on-surface-variant font-body-md">Preserving ancient techniques while infusing them with contemporary luxury.</p>
        </div>
        {/* Feature 5 */}
        <div className="flex flex-col items-center p-8 bg-white rounded-2xl shadow-sm border border-outline-variant/30 hover:-translate-y-2 transition-all duration-300">
          <span className="material-symbols-outlined text-4xl text-primary mb-6">palette</span>
          <h4 className="font-headline-md text-xl mb-4">Unique Designs</h4>
          <p className="text-on-surface-variant font-body-md">Original patterns that you won't find anywhere else in the world.</p>
        </div>
        {/* Feature 6 */}
        <div className="flex flex-col items-center p-8 bg-white rounded-2xl shadow-sm border border-outline-variant/30 hover:-translate-y-2 transition-all duration-300">
          <span className="material-symbols-outlined text-4xl text-primary mb-6">featured_seasonal_and_gifts</span>
          <h4 className="font-headline-md text-xl mb-4">Perfect for Gifting</h4>
          <p className="text-on-surface-variant font-body-md">Exquisite packaging and timeless appeal make every piece a gift to cherish.</p>
        </div>
      </div>
    </div>
  </section>
  {/* Process */}
  <section className="py-stack-xl bg-surface overflow-hidden">
    <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
      <h2 className="font-headline-xl text-headline-xl text-primary mb-20 text-center">Our Creative Journey</h2>
      <div className="relative flex flex-col md:flex-row justify-between items-start md:items-center gap-12 md:gap-0">
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-primary-fixed-dim/30 hidden md:block" />
        <div className="relative z-10 flex flex-col items-center text-center max-w-[200px]">
          <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center mb-6 shadow-lg">1</div>
          <h5 className="font-headline-md text-lg mb-2">Concept</h5>
          <p className="text-sm text-on-surface-variant">Initial consultation and mood boarding.</p>
        </div>
        <div className="relative z-10 flex flex-col items-center text-center max-w-[200px]">
          <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center mb-6 shadow-lg">2</div>
          <h5 className="font-headline-md text-lg mb-2">Design</h5>
          <p className="text-sm text-on-surface-variant">Detailed sketching and digital mockups.</p>
        </div>
        <div className="relative z-10 flex flex-col items-center text-center max-w-[200px]">
          <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center mb-6 shadow-lg">3</div>
          <h5 className="font-headline-md text-lg mb-2">Selection</h5>
          <p className="text-sm text-on-surface-variant">Sourcing premium fabrics and embellishments.</p>
        </div>
        <div className="relative z-10 flex flex-col items-center text-center max-w-[200px]">
          <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center mb-6 shadow-lg">4</div>
          <h5 className="font-headline-md text-lg mb-2">Handcrafting</h5>
          <p className="text-sm text-on-surface-variant">The patient work of art by skilled hands.</p>
        </div>
        <div className="relative z-10 flex flex-col items-center text-center max-w-[200px]">
          <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center mb-6 shadow-lg">5</div>
          <h5 className="font-headline-md text-lg mb-2">Finishing</h5>
          <p className="text-sm text-on-surface-variant">Quality control and luxury packaging.</p>
        </div>
      </div>
    </div>
  </section>
   {/* Portfolio Gallery */}
 <section className="py-20 bg-[#faf7f2]">

<div className="max-w-7xl mx-auto px-6">

<h2 className="text-center text-5xl font-serif text-[#7B5D43] mb-16">
Our Portfolio
</h2>

{galleries.map((gallery,index)=>(

<div key={index} className="mb-24">

<h3 className="text-3xl font-semibold text-center text-[#7B5D43] capitalize mb-10">
{gallery.slug.replaceAll("-"," ")}
</h3>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

{gallery.images.slice(0,6).map((img,i)=>(

<div
key={i}
className="rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl duration-500 group"
>

<img
src={`https://hir-atelier.onrender.com/${img.replace(/\\/g,"/")}`}
alt=""
className="w-full h-80 object-cover group-hover:scale-110 duration-500"
/>

</div>

))}

</div>

<div className="flex justify-center mt-10">

<Link
to={`/collection#${gallery.slug}`}
className="bg-[#7B5D43] text-white px-8 py-3 rounded-full hover:bg-[#5d4330] transition"
>

View Full Gallery →

</Link>

</div>

</div>

))}

</div>

</section>
  {/* Testimonials */}
  <section className="py-stack-xl bg-surface-container-low overflow-hidden">
    <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
      <div className="text-center mb-20 reveal">
        <span className="font-label-caps text-label-caps text-primary tracking-[0.3em] uppercase block mb-4">Client Echoes</span>
        <h2 className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl text-primary">Words from the Visionaries We Serve</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Testimonial 1 */}
        <div className="bg-white p-12 relative reveal">
          <span className="material-symbols-outlined text-primary-container opacity-20 text-6xl absolute top-8 right-8" data-icon="format_quote">format_quote</span>
          <div className="flex gap-1 mb-6">
            <span className="material-symbols-outlined text-primary-container text-sm" data-icon="star" data-weight="fill">star</span>
            <span className="material-symbols-outlined text-primary-container text-sm" data-icon="star" data-weight="fill">star</span>
            <span className="material-symbols-outlined text-primary-container text-sm" data-icon="star" data-weight="fill">star</span>
            <span className="material-symbols-outlined text-primary-container text-sm" data-icon="star" data-weight="fill">star</span>
            <span className="material-symbols-outlined text-primary-container text-sm" data-icon="star" data-weight="fill">star</span>
          </div>
          <p className="font-body-lg italic text-on-surface mb-8">"HiR Atelier transformed my vague wedding dreams into a breathtaking reality. The bridal couture concept was beyond anything I could have imagined."</p>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-secondary-container" />
            <div>
              <h5 className="font-bold text-primary">Alexandra Vance</h5>
              <p className="text-sm opacity-60">Bridal Client</p>
            </div>
          </div>
        </div>
        {/* Testimonial 2 */}
        <div className="bg-white p-12 relative reveal" style={{transitionDelay: '100ms'}}>
          <span className="material-symbols-outlined text-primary-container opacity-20 text-6xl absolute top-8 right-8" data-icon="format_quote">format_quote</span>
          <div className="flex gap-1 mb-6">
            <span className="material-symbols-outlined text-primary-container text-sm" data-icon="star" data-weight="fill">star</span>
            <span className="material-symbols-outlined text-primary-container text-sm" data-icon="star" data-weight="fill">star</span>
            <span className="material-symbols-outlined text-primary-container text-sm" data-icon="star" data-weight="fill">star</span>
            <span className="material-symbols-outlined text-primary-container text-sm" data-icon="star" data-weight="fill">star</span>
            <span className="material-symbols-outlined text-primary-container text-sm" data-icon="star" data-weight="fill">star</span>
          </div>
          <p className="font-body-lg italic text-on-surface mb-8">"The attention to detail in their fashion sketches is professional-grade. It made communicating my collection vision to manufacturers seamless."</p>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-secondary-container" />
            <div>
              <h5 className="font-bold text-primary">Julian Thorne</h5>
              <p className="text-sm opacity-60">Creative Director</p>
            </div>
          </div>
        </div>
        {/* Testimonial 3 */}
        <div className="bg-white p-12 relative reveal" style={{transitionDelay: '200ms'}}>
          <span className="material-symbols-outlined text-primary-container opacity-20 text-6xl absolute top-8 right-8" data-icon="format_quote">format_quote</span>
          <div className="flex gap-1 mb-6">
            <span className="material-symbols-outlined text-primary-container text-sm" data-icon="star" data-weight="fill">star</span>
            <span className="material-symbols-outlined text-primary-container text-sm" data-icon="star" data-weight="fill">star</span>
            <span className="material-symbols-outlined text-primary-container text-sm" data-icon="star" data-weight="fill">star</span>
            <span className="material-symbols-outlined text-primary-container text-sm" data-icon="star" data-weight="fill">star</span>
            <span className="material-symbols-outlined text-primary-container text-sm" data-icon="star" data-weight="fill">star</span>
          </div>
          <p className="font-body-lg italic text-on-surface mb-8">"Hands down the best bespoke service. They understood my style instantly and delivered a series of t-shirt designs that are true works of art."</p>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-secondary-container" />
            <div>
              <h5 className="font-bold text-primary">Elena Rossi</h5>
              <p className="text-sm opacity-60">Fashion Boutique Owner</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
 
  {/* Booking Form */}
 <section className="py-stack-xl bg-surface-container-highest" id="booking">
  <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">

    {/* Heading */}
    <div className="text-center max-w-3xl mx-auto mb-14">
      <span className="font-label-caps text-label-caps text-primary tracking-[0.3em] uppercase block mb-4">
        Secure Your Session
      </span>

      <h2 className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl text-primary mb-6">
        Begin Your Bespoke Journey
      </h2>

      <p className="font-body-lg text-on-surface-variant">
       Every masterpiece begins with a vision.
Share your ideas with us and let our designers craft a personalized experience tailored to your style, occasion, and dreams.
      </p>
    </div>

    {/* Booking Form */}
    <div className="bg-white max-w-5xl mx-auto p-10 md:p-16 rounded-2xl shadow-2xl">

      <form className="space-y-8" onSubmit={handleBooking}>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          <div>
            <label className="font-label-caps uppercase tracking-widest text-[10px] text-on-surface-variant mb-2 block">
              Full Name
            </label>

            <input
              className="w-full bg-surface-container-low border-none rounded-lg focus:ring-1 focus:ring-primary py-4 px-6 font-body-md"
              placeholder="Your Name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="font-label-caps uppercase tracking-widest text-[10px] text-on-surface-variant mb-2 block">
              Phone Number
            </label>

            <input
              className="w-full bg-surface-container-low border-none rounded-lg focus:ring-1 focus:ring-primary py-4 px-6 font-body-md"
              placeholder="+91 XXXXX XXXXX"
              type="tel"
              name="mobile_no"
              value={formData.mobile_no}
              onChange={handleChange}
            />
          </div>

        </div>

        <div>
          <label className="font-label-caps uppercase tracking-widest text-[10px] text-on-surface-variant mb-2 block">
            Email Address
          </label>

          <input
            className="w-full bg-surface-container-low border-none rounded-lg focus:ring-1 focus:ring-primary py-4 px-6 font-body-md"
            placeholder="email@example.com"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          <div>
            <label className="font-label-caps uppercase tracking-widest text-[10px] text-on-surface-variant mb-2 block">
              Select Service
            </label>

           <select
  name="service_title"
  value={formData.service_title}
  onChange={(e) => {

    const selectedService = services.find(
      (service) => service.title === e.target.value
    );

    setFormData({
      ...formData,
      service_title: e.target.value,
      service_price: selectedService?.price || "",
    });

  }}
  className="w-full bg-surface-container-low rounded-lg p-4 border-none focus:ring-1 focus:ring-primary"
>
              <option value="">Select Service</option>

              {services?.map((service) => (
                <option
                  key={service._id}
                  value={service.title}
                >
                  {service.title}
                </option>
              ))}
            </select>
          </div>
<div>
  <label className="font-label-caps uppercase tracking-widest text-[10px] text-on-surface-variant mb-2 block">
    Service Price
  </label>

  <input
    type="text"
    value={
      formData.service_price
        ? `₹${formData.service_price}`
        : ""
    }
    readOnly
    placeholder="Select a service first"
    className="w-full bg-surface-container-low rounded-lg p-4 border-none"
  />
</div>
          <div>
            <label className="font-label-caps uppercase tracking-widest text-[10px] text-on-surface-variant mb-2 block">
              Preferred Date
            </label>

            <input
              className="w-full bg-surface-container-low border-none rounded-lg focus:ring-1 focus:ring-primary py-4 px-6 font-body-md"
              type="date"
              name="booking_date"
              value={formData.booking_date}
              onChange={handleChange}
            />
          </div>

        </div>

        <div>
          <label className="font-label-caps uppercase tracking-widest text-[10px] text-on-surface-variant mb-2 block">
            Inspiration Image
          </label>

          <input
            type="file"
            name="inspiration_image"
            onChange={handleFileChange}
            className="w-full bg-surface-container-low rounded-lg p-4"
          />
        </div>

        <div>
          <label className="font-label-caps uppercase tracking-widest text-[10px] text-on-surface-variant mb-2 block">
            Additional Notes
          </label>

          <textarea
          type="text"
          name='notes'
          value={formData.notes}
          onChange={handleChange}
            className="w-full bg-surface-container-low border-none rounded-lg focus:ring-1 focus:ring-primary py-4 px-6 font-body-md"
            rows={4}
            placeholder="Tell us more about your vision..."
          ></textarea>
        </div>

        <button
          className="w-full bg-primary text-on-primary py-5 rounded-full font-label-caps uppercase tracking-widest text-sm hover:bg-primary-container transition-all duration-300 active:scale-95"
          type="submit"
        >
          Request Consultation
        </button>

      </form>

    </div>

  </div>
</section>
</div>

    )
}

export default Crafts
