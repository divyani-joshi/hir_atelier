import React from 'react'
import Hedaer from '../common/Hedaer'
import Footer from '../common/Footer'
import { useState } from 'react'
import { useEffect } from 'react'
import api from '../utility/AxiosConfig'
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
        <Hedaer/>
      <HomeContent/>
      <Footer/>
    </div>
  )
}

function HomeContent (){
 
   let [categories, setCategories ] = useState([]);
   let [loading , setLoading] = useState(false);
   let [ error, setError] = useState("");
   
   async function FetchCategories() {
  try {
    setLoading(true);

    const response = await api.get("/user/getcategories");

    console.log("Success:", response);

    setCategories(response.data?.categories || []);

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
    FetchCategories();
   },[])
    const bridal = categories[0];
const fashion = categories[1];
const craft = categories[2];

const serviceLinks = [
  bridal ? `/mehendi/${bridal._id}` : "#",
  fashion ? `/fashion/${fashion._id}` : "#",
  craft ? `/craft/${craft._id}` : "#",
];
 
  

   if (error) return <h2>{error}</h2>

    return (
        <>
       <header className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
  <div className="absolute inset-0 z-0">
    <img alt="HiR Atelier Creative Studio" className="w-full h-[120%] object-cover absolute -top-[10%]" id="hero-parallax" src="/hero2.png" />
    <div className="absolute inset-0 bg-black/20" />
  </div>
  <div className="relative z-10 px-margin-mobile md:px-margin-desktop w-full text-white">
    <div className="max-w-4xl reveal active">
      <h1 className="font-headline-xl-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg mb-6 leading-tight">
        Where Creativity <br /><span className="signature-text italic">Becomes Art</span>
      </h1>
      <p className="font-body-lg text-body-lg mb-10 max-w-2xl opacity-90">
        Fashion Design • Bridal Mehendi • Handmade Creations. <br />Crafting timeless memories through intricate details and bespoke craftsmanship.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link className="bg-primary-container text-on-primary-container px-10 py-4 rounded-full font-label-caps tracking-widest uppercase hover:scale-105 transition-transform duration-300 btn-shimmer" to="/collection">
          Explore Collections
        </Link>
        <Link className="border border-white/50 backdrop-blur-md text-white px-10 py-4 rounded-full font-label-caps tracking-widest uppercase hover:bg-white hover:text-on-surface transition-all duration-300" to="/service">
          Book a Consultation
        </Link>
      </div>
    </div>
  </div>
</header>

<div>
  <section className="py-stack-xl px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto" id="collections">
    <div className="text-center mb-stack-md reveal">
      <span className="font-label-caps text-primary tracking-[0.3em] uppercase block mb-4">The Atelier</span>
      <h2 className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl">Featured Artistry</h2>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter" >

      {loading ? (
  <h3>Loading.....</h3>
) : (
  categories?.map((value) => (
    
    <div
      key={value._id}
      className="group relative overflow-hidden rounded-2xl aspect-[3/4] perspective-card reveal"
    >
      <img
      
        src={`http://localhost:8000/uploads/${value.image.split("\\").pop()}`}
        alt={value.name}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>

      <div className="absolute bottom-0 left-0 p-8 w-full">
        <h3 className="text-white font-headline-md text-headline-md mb-2">
          {value.name}
        </h3>

        <Link className="text-white/80 font-body-md text-body-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" to="/service">
          Click to explore
        </Link>
      </div>
    </div>
  ))
)}
     
    </div>
  </section>
  {/* About Section */}
  <section className="py-stack-xl bg-surface-container-low overflow-hidden">
    <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto flex flex-col md:flex-row items-center gap-20">
      <div className="md:w-1/2 space-y-8 reveal">
        <span className="font-label-caps text-primary tracking-[0.3em] uppercase block">Our Philosophy</span>
        <h2 className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl">The Journey of Handcrafted Excellence</h2>
        <div className="space-y-6 font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
          <p>At HiR Atelier, we believe that true luxury lies in the quiet details. Our journey began with a simple passion for the needle and the thread, evolving into a multidisciplinary sanctuary for artisanal creation.</p>
          <p>Every mehendi pattern is a story drawn by hand, every stitch in our couture is a testament to precision, and every handcrafted jewel is a fragment of a larger dream. We don't just design; we curate emotions.</p>
        </div>
        <div className="pt-4 border-t border-secondary-container/50 inline-block">
          <p className="font-display-lg text-[40px] signature-text italic text-primary">HiR Atelier</p>
        </div>
      </div>
      <div className="md:w-1/2 relative reveal" style={{transitionDelay: '200ms'}}>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <img alt="Artisan Workspace Detail" className="rounded-2xl shadow-lg w-full aspect-square object-cover hover:scale-[1.02] transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuABWlHnxrGjqmT_LEOqgksxD7rE1-hrbkIbK6MRHIGPVHByiz91XsjmcQbQwONPblCqbj9d6OaJlbkkAInQHUSGM1wjR6t6Emlbu1TjHbxPbStOmyvCWuYXzxrJa5ejO-m1h1YSj4a2V95Gff0a8qOlWnqNIpxC80L0OFSfwzm3n6nX6y4viFYN3WmtDwU3nGkV9JgzRg_vYjAZWtmgEpaO2fxwtf8GGQDLbaKAiUXdhePs26SYJFY3Zx5veikDW4tGAKUuEEkNm5k" />
            <img alt="Bridal Fabric Detail" className="rounded-2xl shadow-lg w-full aspect-[4/5] object-cover hover:scale-[1.02] transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkPqn0sMRW7iORnuqu13MvA3n1XjOo6N8sunD76bs__RclK8EMylmrRfzINABAAVnyTgwikFoxrZYxLqrq0UPr8moAypMxaOh5mqEvTUu1WUyZgiL87W4lLhchcCPBkJluznvGFvZHgXsQ3E05xJoZ8GiMf7gWj-msR1sjDvNqehhtz-w-4Tqfnpa6YVrx0CDu1lCOFBJTA5QxIWX-y7dDPt3U0mheGaxUqiZXSUVzXrjYHWMoM3d7SzvF3n0aeG3zQurgL2Y7fe8" />
          </div>
          <div className="pt-12 space-y-4">
            <img alt="Mehendi Detail Close-up" className="rounded-2xl shadow-lg w-full aspect-[4/5] object-cover hover:scale-[1.02] transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuCiG3kfF9rDhcBTCQID1uKqG41LYWYnm1z3zqZrL4aap7PZrWLO4JzmSjuFhf1PUs6QJhZNHNPPdpGAMu0nJutbbzuf-OKOBW4iGNkwup9MwO7xHMWfs3PWpB4TUXcVzYNx--BsF4LNsG7hW_Lrt_OcoUiNVxoyykRD5CkchvLOkwqsp2OU7Dm7pcU8G8woYZFO-w6fWe0h7uS3APmWN9bVNM4c2YGJQLZjDyvZU4FPIlzxugIp8z3ZIMTQ_2QZ8TbS0edYCNSJk" />
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Signature Services */}
 {/* Signature Services */}
{/* Signature Services */}
<section className="py-stack-xl px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto" id="services">
  <div className="text-center mb-stack-md reveal">
    <span className="font-label-caps text-primary tracking-[0.3em] uppercase block mb-4">
      Exquisite Services
    </span>
    <h2 className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl">
      Bespoke Offerings
    </h2>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter">

    {/* Service Card 1 */}
    <div className="p-10 rounded-2xl border border-secondary-container/30 bg-surface hover:shadow-xl transition-all duration-300 group reveal">
      <span
        className="material-symbols-outlined text-4xl text-primary mb-6"
        data-icon="brush"
      >
        brush
      </span>

      <h3 className="font-headline-md text-headline-md mb-4">
        Bridal Mehendi
      </h3>

      <p className="font-body-md text-body-md text-on-surface-variant mb-6">
        Signature intricate henna designs for the modern bride, blending
        heritage with elegance.
      </p>

      <Link
        to={categories[0] ? `/mehendi/${categories[0]._id}` : "#"}
        className="font-label-caps text-primary tracking-widest uppercase flex items-center group-hover:translate-x-2 transition-transform"
      >
        Details
        <span className="material-symbols-outlined ml-2">
          arrow_forward
        </span>
      </Link>
    </div>

    {/* Service Card 2 */}
    <div className="p-10 rounded-2xl border border-secondary-container/30 bg-surface hover:shadow-xl transition-all duration-300 group reveal">
      <span
        className="material-symbols-outlined text-4xl text-primary mb-6"
        data-icon="apparel"
      >
        apparel
      </span>

      <h3 className="font-headline-md text-headline-md mb-4">
        Custom Fashion
      </h3>

      <p className="font-body-md text-body-md text-on-surface-variant mb-6">
        From bridal trousseaus to contemporary couture, each piece is a bespoke masterpiece.
      </p>

      <Link
        to={categories[1] ? `/fashion/${categories[1]._id}` : "#"}
        className="font-label-caps text-primary tracking-widest uppercase flex items-center group-hover:translate-x-2 transition-transform"
      >
        Details
        <span className="material-symbols-outlined ml-2">
          arrow_forward
        </span>
      </Link>
    </div>

    {/* Service Card 3 */}
    <div className="p-10 rounded-2xl border border-secondary-container/30 bg-surface hover:shadow-xl transition-all duration-300 group reveal">
      <span
        className="material-symbols-outlined text-4xl text-primary mb-6"
        data-icon="diamond"
      >
        diamond
      </span>

      <h3 className="font-headline-md text-headline-md mb-4">
        Handmade Crafts
      </h3>

      <p className="font-body-md text-body-md text-on-surface-variant mb-6">
        Artisanal handmade creations crafted with creativity, precision and timeless elegance.
      </p>

      <Link
        to={categories[2] ? `/craft/${categories[2]._id}` : "#"}
        className="font-label-caps text-primary tracking-widest uppercase flex items-center group-hover:translate-x-2 transition-transform"
      >
        Details
        <span className="material-symbols-outlined ml-2">
          arrow_forward
        </span>
      </Link>
    </div>

  </div>
</section>
  {/* Custom Order Experience */}
  <section className="py-stack-xl bg-primary/5 overflow-hidden" id="process">
    <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <div className="flex flex-col md:flex-row gap-16 items-center">
        <div className="md:w-1/2 reveal">
          <span className="font-label-caps text-primary tracking-[0.3em] uppercase block mb-4">The Process</span>
          <h2 className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl mb-12">From Vision to Reality</h2>
          <div className="space-y-12">
            <div className="flex gap-6">
              <span className="font-display-lg text-primary/20 leading-none">01</span>
              <div>
                <h4 className="font-body-lg font-bold mb-2">The Idea</h4>
                <p className="font-body-md text-on-surface-variant">We begin with a personal consultation to understand your style, preferences, and the occasion.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <span className="font-display-lg text-primary/20 leading-none">02</span>
              <div>
                <h4 className="font-body-lg font-bold mb-2">The Design</h4>
                <p className="font-body-md text-on-surface-variant">Sketches and moodboards are created, refining every detail until it resonates perfectly with you.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <span className="font-display-lg text-primary/20 leading-none">03</span>
              <div>
                <h4 className="font-body-lg font-bold mb-2">The Craft</h4>
                <p className="font-body-md text-on-surface-variant">Our artisans meticulously bring the design to life using time-honored handcrafted techniques.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <span className="font-display-lg text-primary/20 leading-none">04</span>
              <div>
                <h4 className="font-body-lg font-bold mb-2">The Delivery</h4>
                <p className="font-body-md text-on-surface-variant">Your custom creation is packaged with love and delivered as a timeless keepsake.</p>
              </div>
            </div>
          </div>
        </div>
       <div className="md:w-1/2 w-full reveal">
  <div className="glass p-12 rounded-3xl shadow-xl text-center">
    <span className="font-label-caps text-primary tracking-[0.3em] uppercase block mb-4">
      Book Your Experience
    </span>

    <h2 className="font-headline-xl text-headline-xl mb-6">
      Ready to Begin Your Journey?
    </h2>

    <p className="font-body-md text-on-surface-variant mb-10 max-w-lg mx-auto">
      Schedule your bridal mehendi, fashion design consultation, or handcrafted
      creation appointment. Our team will guide you through every step of the
      process.
    </p>

    <div className="flex justify-center mb-10">
      <span className="material-symbols-outlined text-primary text-7xl">
        event_available
      </span>
    </div>

    <Link
      to={localStorage.getItem("token") ? "/service" : "/login"}
      className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-white rounded-full font-label-caps tracking-widest uppercase hover:scale-105 transition-transform duration-300" 
    >
      Book Consultation
      <span className="material-symbols-outlined">
        arrow_forward
      </span>
    </Link>

    {!localStorage.getItem("token") && (
      <p className="mt-6 text-sm text-on-surface-variant">
        Please login to continue with your booking.
      </p>
    )}
  </div>
</div>
      </div>
    </div>
  </section>
  {/* Portfolio Gallery (Masonry Style) */}
  <section className="py-stack-xl px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto" id="portfolio">
    <div className="flex justify-between items-end mb-stack-md reveal">
      <div>
       
        <h2 className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl"> Gallery</h2>
      </div>
      <Link className="hidden md:block font-label-caps text-primary tracking-widest uppercase border-b border-primary pb-1" to="/collection">View Full Gallery</Link>
    </div>
    <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
      <div className="break-inside-avoid reveal overflow-hidden rounded-2xl group">
        <img alt="Bridal Mehendi Intricate Hand Design" className="rounded-2xl w-full shadow-md group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuCiG3kfF9rDhcBTCQID1uKqG41LYWYnm1z3zqZrL4aap7PZrWLO4JzmSjuFhf1PUs6QJhZNHNPPdpGAMu0nJutbbzuf-OKOBW4iGNkwup9MwO7xHMWfs3PWpB4TUXcVzYNx--BsF4LNsG7hW_Lrt_OcoUiNVxoyykRD5CkchvLOkwqsp2OU7Dm7pcU8G8woYZFO-w6fWe0h7uS3APmWN9bVNM4c2YGJQLZjDyvZU4FPIlzxugIp8z3ZIMTQ_2QZ8TbS0edYCNSJk" />
      </div>
      <div className="break-inside-avoid reveal overflow-hidden rounded-2xl group">
        <img alt="Artistic Workspace and Sketches" className="rounded-2xl w-full shadow-md group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuABWlHnxrGjqmT_LEOqgksxD7rE1-hrbkIbK6MRHIGPVHByiz91XsjmcQbQwONPblCqbj9d6OaJlbkkAInQHUSGM1wjR6t6Emlbu1TjHbxPbStOmyvCWuYXzxrJa5ejO-m1h1YSj4a2V95Gff0a8qOlWnqNIpxC80L0OFSfwzm3n6nX6y4viFYN3WmtDwU3nGkV9JgzRg_vYjAZWtmgEpaO2fxwtf8GGQDLbaKAiUXdhePs26SYJFY3Zx5veikDW4tGAKUuEEkNm5k" />
      </div>
      <div className="break-inside-avoid reveal overflow-hidden rounded-2xl group">
        <img alt="Bespoke Silk Gown Display" className="rounded-2xl w-full shadow-md group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkPqn0sMRW7iORnuqu13MvA3n1XjOo6N8sunD76bs__RclK8EMylmrRfzINABAAVnyTgwikFoxrZYxLqrq0UPr8moAypMxaOh5mqEvTUu1WUyZgiL87W4lLhchcCPBkJluznvGFvZHgXsQ3E05xJoZ8GiMf7gWj-msR1sjDvNqehhtz-w-4Tqfnpa6YVrx0CDu1lCOFBJTA5QxIWX-y7dDPt3U0mheGaxUqiZXSUVzXrjYHWMoM3d7SzvF3n0aeG3zQurgL2Y7fe8" />
      </div>
      <div className="break-inside-avoid reveal overflow-hidden rounded-2xl group">
        <img alt="Exquisite Jewelry and Embroidery Details" className="rounded-2xl w-full shadow-md group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwgQ9Nkv0N5m7ypjpWBpXT9hb72WE1bkM7qFQgdA6I0Fdu5soABNlir-NEbj-Il99rsd6WTJQcKbYndgDKMkbhn_Topu-jH3haGf7ulQG8loHLqZFnk7S08_Mah_ha0lKLOH__eq0IfuBt3osrDGiBmPKS9iAvFeC1H4LN7xgBjcKmt8aks1MZQ7tm9OTsc2P3MOWrwX96I3VCjsya4eLPmkODRlQcloKh1gp0_Afp2UAZjwbCTbx56iitTg8viMp86Htz8qN4-C8" />
      </div>
      <div className="break-inside-avoid relative group overflow-hidden rounded-2xl reveal">
        <img alt="Close-up Detail of Mehendi Patterns" className="rounded-2xl w-full shadow-md group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuCiG3kfF9rDhcBTCQID1uKqG41LYWYnm1z3zqZrL4aap7PZrWLO4JzmSjuFhf1PUs6QJhZNHNPPdpGAMu0nJutbbzuf-OKOBW4iGNkwup9MwO7xHMWfs3PWpB4TUXcVzYNx--BsF4LNsG7hW_Lrt_OcoUiNVxoyykRD5CkchvLOkwqsp2OU7Dm7pcU8G8woYZFO-w6fWe0h7uS3APmWN9bVNM4c2YGJQLZjDyvZU4FPIlzxugIp8z3ZIMTQ_2QZ8TbS0edYCNSJk" />
        <div className="absolute inset-0 glass opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300 pointer-events-none">
          <span className="font-label-caps tracking-widest text-on-surface uppercase">Zoom View</span>
        </div>
      </div>
      <div className="break-inside-avoid reveal overflow-hidden rounded-2xl group">
        <img alt="Studio Dress Form Couture" className="rounded-2xl w-full shadow-md group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkPqn0sMRW7iORnuqu13MvA3n1XjOo6N8sunD76bs__RclK8EMylmrRfzINABAAVnyTgwikFoxrZYxLqrq0UPr8moAypMxaOh5mqEvTUu1WUyZgiL87W4lLhchcCPBkJluznvGFvZHgXsQ3E05xJoZ8GiMf7gWj-msR1sjDvNqehhtz-w-4Tqfnpa6YVrx0CDu1lCOFBJTA5QxIWX-y7dDPt3U0mheGaxUqiZXSUVzXrjYHWMoM3d7SzvF3n0aeG3zQurgL2Y7fe8" />
      </div>
    </div>
  </section>
  {/* Testimonials */}
  <section className="py-stack-xl px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto overflow-hidden">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
      <div className="bg-surface-container-low p-10 rounded-2xl reveal">
        <div className="flex text-primary mb-6">
          <span className="material-symbols-outlined" data-icon="star" data-weight="fill">star</span>
          <span className="material-symbols-outlined" data-icon="star" data-weight="fill">star</span>
          <span className="material-symbols-outlined" data-icon="star" data-weight="fill">star</span>
          <span className="material-symbols-outlined" data-icon="star" data-weight="fill">star</span>
          <span className="material-symbols-outlined" data-icon="star" data-weight="fill">star</span>
        </div>
        <p className="font-body-lg italic mb-8">"HiR Atelier transformed my wedding day. The mehendi was so intricate that guests couldn't stop staring. Truly an artist at work."</p>
        <p className="font-label-caps tracking-widest uppercase">Sanya Malhotra</p>
      </div>
      <div className="bg-surface-container-low p-10 rounded-2xl reveal" style={{transitionDelay: '150ms'}}>
        <div className="flex text-primary mb-6">
          <span className="material-symbols-outlined" data-icon="star" data-weight="fill">star</span>
          <span className="material-symbols-outlined" data-icon="star" data-weight="fill">star</span>
          <span className="material-symbols-outlined" data-icon="star" data-weight="fill">star</span>
          <span className="material-symbols-outlined" data-icon="star" data-weight="fill">star</span>
          <span className="material-symbols-outlined" data-icon="star" data-weight="fill">star</span>
        </div>
        <p className="font-body-lg italic mb-8">"I ordered a custom jewelry set and a potli bag. The craftsmanship is world-class. You can feel the soul in every bead."</p>
        <p className="font-label-caps tracking-widest uppercase">Elena Rodriguez</p>
      </div>
      <div className="bg-surface-container-low p-10 rounded-2xl reveal" style={{transitionDelay: '300ms'}}>
        <div className="flex text-primary mb-6">
          <span className="material-symbols-outlined" data-icon="star" data-weight="fill">star</span>
          <span className="material-symbols-outlined" data-icon="star" data-weight="fill">star</span>
          <span className="material-symbols-outlined" data-icon="star" data-weight="fill">star</span>
          <span className="material-symbols-outlined" data-icon="star" data-weight="fill">star</span>
          <span className="material-symbols-outlined" data-icon="star" data-weight="fill">star</span>
        </div>
        <p className="font-body-lg italic mb-8">"Their attention to detail is unmatched. The custom gown fit like a glove and the design process was so professional."</p>
        <p className="font-label-caps tracking-widest uppercase">Priya Sharma</p>
      </div>
    </div>
  </section>
  {/* Final CTA */}
  <section className="mt-stack-xl bg-[#A38F7A] text-white py-24 px-margin-mobile reveal">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl mb-8">Let's Create Something <span className="signature-text italic">Beautiful Together</span></h2>
      <p className="font-body-lg text-body-lg mb-12 opacity-90 max-w-2xl mx-auto">Available for worldwide consultations and bespoke orders. Let us bring your creative dreams to life with artisanal precision.</p>
      <div className="flex flex-col sm:flex-row justify-center gap-6">
        <Link className="bg-white text-[#A38F7A] px-12 py-5 rounded-full font-label-caps tracking-widest uppercase hover:scale-105 transition-transform duration-300 btn-shimmer" to="/service">
          Book Now
        </Link>
        <Link className="border border-white/40 px-12 py-5 rounded-full font-label-caps tracking-widest uppercase hover:bg-white/10 transition-all duration-300" to="/collection">
          Explore Custom Design
        </Link>
      </div>
    </div>
  </section>
</div>

        </>
    )
}
export default Home
