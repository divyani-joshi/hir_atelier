import React from 'react'
import Hedaer from '../common/Hedaer'
import Footer from '../common/Footer'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../utility/AxiosConfig";
import CheckToken from "../utility/CheckToken";

function Contact() {
  return (
    <div>
        <Hedaer/>
      <ContactContent/>
      <Footer/>
    </div>
  )
}

function ContactContent (){
  const navigate = useNavigate();

const [loading, setLoading] = useState(false);

const [formData, setFormData] = useState({
  full_name: "",
  email: "",
  mobile_no: "",
  service_name: "",
  subject: "",
  message: ""
});
const handleChange = (e) => {
  
  setFormData({
    ...formData,
    [e.target.name]: e.target.value
  });
};
console.log(document.cookie);
const handleSubmit = async (e) => {
  e.preventDefault();

 const token = localStorage.getItem("token");

console.log("CONTACT TOKEN:", token);

if (!token) {
  alert("Please login first");
  navigate("/login");
  return;
}

  try {

    setLoading(true);

    const response = await api.post(
      "/user/contact",
      formData
    );

    alert(response.data.message);

    setFormData({
      full_name: "",
      email: "",
      mobile_no: "",
      service_name: "",
      subject: "",
      message: ""
    });

  } catch (error) {

    alert(
      error.response?.data?.message ||
      "Something went wrong"
    );

  } finally {

    setLoading(false);

  }
};
    return(
      <div className='bg-background text-on-background font-body-md overflow-x-hidden'>
        <main className="pb-stack-md px-margin-desktop max-w-container-max mx-auto">
  {/* Hero Section */}
 <section className="py-12 md:py-16 px-margin-mobile md:px-margin-desktop text-center">
    <span className="font-label-caps text-label-caps text-primary mb-4 block">Get In Touch</span>
    <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg mb-6 max-w-4xl mx-auto">Begin Your Bespoke Journey</h1>
   <p className="font-body-lg text-body-lg text-secondary max-w-2xl mx-auto mb-6">Every handcrafted creation starts with a conversation.
Share your vision and our atelier will transform it into something extraordinary.</p>
    <div className="h-[1px] w-24 bg-primary-container mx-auto" />
  </section>
  {/* Two-Column Information & Form */}
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
    {/* Left Column: Information */}
    <div className="lg:col-span-5 space-y-5 reveal">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
        {/* Contact Cards */}
       <div className="glass p-6 sm:p-7 rounded-2xl border border-white/60 group hover:border-primary-container/40 transition-all duration-500">
          <div className="w-10 h-10 bg-primary-container/20 rounded-xl flex items-center justify-center text-primary mb-4 group-hover:scale-105 transition-transform">
            <span className="material-symbols-outlined text-[20px]" style={{fontVariationSettings: '"FILL" 1'}}>call</span>
          </div>
          <h3 className="text-lg font-semibold mb-1">Phone</h3>
          <p className="text-on-surface-variant font-body-md">+91 8320332732</p>
          <p className="text-on-surface-variant/50 text-[10px] uppercase tracking-wider mt-1">Mon-Fri, 9am-6pm</p>
        </div>
        <div className="glass p-6 rounded-2xl border border-white/60 group hover:border-primary-container/40 transition-all duration-500">
          <div className="w-10 h-10 bg-primary-container/20 rounded-xl flex items-center justify-center text-primary mb-4 group-hover:scale-105 transition-transform">
            <span className="material-symbols-outlined text-[20px]" style={{fontVariationSettings: '"FILL" 1'}}>mail</span>
          </div>
          <h3 className="text-lg font-semibold mb-1">Email</h3>
          <p className="text-on-surface-variant font-body-md">divyanijoshi23@gmail.com</p>
          <p className="text-on-surface-variant/50 text-[10px] uppercase tracking-wider mt-1">Response within 24 hours</p>
        </div>
        <div className="glass p-6 rounded-2xl border border-white/60 group hover:border-primary-container/40 transition-all duration-500">
          <div className="w-10 h-10 bg-primary-container/20 rounded-xl flex items-center justify-center text-primary mb-4 group-hover:scale-105 transition-transform">
            <span className="material-symbols-outlined text-[20px]" style={{fontVariationSettings: '"FILL" 1'}}>location_on</span>
          </div>
          <h3 className="text-lg font-semibold mb-1">Location</h3>
          <p className="text-on-surface-variant font-body-md">Dev Hometown 4,L501 ,Chandkheda<br />Ahmedabad, Gujarat, India</p>
        </div>
       
      </div>
      {/* Follow Us */}
      <div className="pt-2">
        <h4 className="font-label-md text-[10px] uppercase tracking-[0.2em] text-primary mb-4">Follow Our Journey</h4>
        <div className="flex gap-3">
          <a className="w-8 h-8 border border-outline-variant/40 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-primary hover:text-on-primary hover:border-primary transition-all duration-300" href="#">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
          </a>
          <a className="w-8 h-8 border border-outline-variant/40 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-primary hover:text-on-primary hover:border-primary transition-all duration-300" href="#">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>
          </a>
          <a className="w-8 h-8 border border-outline-variant/40 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-primary hover:text-on-primary hover:border-primary transition-all duration-300" href="#">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.091.379-.293 1.195-.332 1.357-.052.216-.172.262-.397.159-1.482-.689-2.407-2.852-2.407-4.588 0-3.735 2.712-7.165 7.822-7.165 4.107 0 7.299 2.928 7.299 6.839 0 4.081-2.571 7.366-6.139 7.366-1.198 0-2.325-.623-2.711-1.359l-.739 2.81c-.267 1.021-1.002 2.302-1.492 3.097 1.12.347 2.304.535 3.533.535 6.627 0 12-5.373 12-12s-5.373-12-12-12z" /></svg>
          </a>
        </div>
      </div>
    </div>
    {/* Right Column: Form */}
    <div className="lg:col-span-7 reveal" style={{transitionDelay: '150ms'}}>
      <div className="glass p-8 sm:p-10 rounded-2xl border border-white/60">
       <form
  onSubmit={handleSubmit}
  className="space-y-6"
>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-1.5">
              <label className="text-[11px] font-semibold uppercase text-on-surface-variant/70 tracking-wider ml-0.5">Full Name</label>
             <input
  name="full_name"
  value={formData.full_name}
  onChange={handleChange}
  className="w-full bg-white/40 border-outline-variant/40 focus:border-primary focus:ring-0 rounded-lg py-2.5 px-4 text-on-surface text-[14px]"
  placeholder="Johnathan Doe"
  type="text"
/>
            </div>
            <div className="space-y-1.5">
              <label className="text-[11px] font-semibold uppercase text-on-surface-variant/70 tracking-wider ml-0.5">Email Address</label>
             <input
  name="email"
  value={formData.email}
  onChange={handleChange}
  className="w-full bg-white/40 border-outline-variant/40 focus:border-primary focus:ring-0 rounded-lg py-2.5 px-4 text-on-surface text-[14px]"
  placeholder="john@example.com"
  type="email"
/>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-1.5">
              <label className="text-[11px] font-semibold uppercase text-on-surface-variant/70 tracking-wider ml-0.5">Phone Number</label>
             <input
  name="mobile_no"
  value={formData.mobile_no}
  onChange={handleChange}
  className="w-full bg-white/40 border-outline-variant/40 focus:border-primary focus:ring-0 rounded-lg py-2.5 px-4 text-on-surface text-[14px]"
  placeholder="+91 9876543210"
  type="tel"
/>
            </div>
            <div className="space-y-1.5">
              <label className="text-[11px] font-semibold uppercase text-on-surface-variant/70 tracking-wider ml-0.5">Service Interested In</label>
            <select
  name="service_name"
  value={formData.service_name}
  onChange={handleChange}
  className="w-full bg-white/40 border-outline-variant/40 focus:border-primary focus:ring-0 rounded-lg py-2.5 px-4 text-on-surface text-[14px]"
>
  <option value="">Select Service</option>

  <option value="Bridal Mehendi">
    Bridal Mehendi
  </option>

  <option value="Engagement Mehendi">
    Engagement Mehendi
  </option>

  <option value="Festival Mehendi">
    Festival Mehendi
  </option>

  <option value="Custom Dress Designing">
    Custom Dress Designing
  </option>

  <option value="T-Shirt Sketch Designing">
    T-Shirt Sketch Designing
  </option>

  <option value="Handmade Crochet Items">
    Handmade Crochet Items
  </option>

  <option value="Handmade Decorative Trays">
    Handmade Decorative Trays
  </option>

  <option value="Handmade Wedding Rumal">
    Handmade Wedding Rumal
  </option>

  <option value="Handmade Jewellery">
    Handmade Jewellery
  </option>
</select>
            </div>
          </div>
          <div className="space-y-1.5">
            <label className="text-[11px] font-semibold uppercase text-on-surface-variant/70 tracking-wider ml-0.5">Subject</label>
          <input
  name="subject"
  value={formData.subject}
  onChange={handleChange}
  className="w-full bg-white/40 border-outline-variant/40 focus:border-primary focus:ring-0 rounded-lg py-2.5 px-4 text-on-surface text-[14px]"
  placeholder="Inquiry about..."
  type="text"
/>
          </div>
          <div className="space-y-1.5">
            <label className="text-[11px] font-semibold uppercase text-on-surface-variant/70 tracking-wider ml-0.5">Message</label>
          <textarea
  name="message"
  value={formData.message}
  onChange={handleChange}
  className="w-full bg-white/40 border-outline-variant/40 focus:border-primary focus:ring-0 rounded-lg py-2.5 px-4 text-on-surface text-[14px] resize-none"
  placeholder="Share the details of your project..."
  rows={4}
/>
          </div>
        <button
  className="w-full bg-primary text-on-primary py-3.5 rounded-full font-semibold text-[15px] hover:bg-primary/95 transition-all duration-300"
  type="submit"
  disabled={loading}
>
  {loading ? "Sending..." : "Send Message"}
</button>
        </form>
      </div>
    </div>
  </div>
  {/* Map Section */}
  <a
  href="https://www.google.com/maps/place/Dev+Home+Town+4/@23.114652,72.5623938,17z/data=!3m1!4b1!4m6!3m5!1s0x395e83b7d6ea917b:0xde5db3db7414e663!8m2!3d23.114652!4d72.5649687!16s%2Fg%2F11h1fkx8qt?entry=ttu&g_ep=EgoyMDI2MDYxNi4wIKXMDSoASAFQAw%3D%3D"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block bg-primary text-on-primary px-6 py-3 rounded-full mt-4"
>
  Get Directions
</a>
  <section className="mt-stack-md reveal">
    <div className="relative w-full h-[400px] rounded-3xl overflow-hidden border border-white/60">
     <div className="w-full h-full">
  <iframe
  title="Location Map"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3669.5202409273993!2d72.56239377510705!3d23.11465197910931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e83b7d6ea917b%3A0xde5db3db7414e663!2sDev%20Home%20Town%204!5e0!3m2!1sen!2sin!4v1782147775933!5m2!1sen!2sin"
  width="100%"
  height="100%"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>
</div>
    </div>
  </section>
  {/* CTA Bottom */}
  <section className="mt-stack-md text-center py-20 glass rounded-3xl border border-white/60 reveal">
    <h2 className="text-2xl md:text-3xl font-bold text-on-surface mb-5 tracking-tight">Every handmade creation begins with a conversation.</h2>
    <p className="text-on-surface-variant text-[15px] max-w-xl mx-auto mb-8 leading-relaxed">Ready to start your bespoke journey? Schedule a one-on-one consultation with our lead designer today.</p>
    <button className="bg-primary text-on-primary px-10 py-3.5 rounded-full font-semibold text-[15px] hover:bg-primary/95 transition-all duration-300">
      Book Consultation
    </button>
  </section>
</main>

      </div>
        
    )
}


export default Contact
