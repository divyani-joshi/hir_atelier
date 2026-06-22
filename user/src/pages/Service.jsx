import React, { useEffect, useState } from 'react'
import Hedaer from '../common/Hedaer'
import Footer from '../common/Footer'
import { Link } from 'react-router-dom'
import api from '../utility/AxiosConfig'

function Service() {
  return (
    <div>
        <Hedaer/>
      <ServiceContent/>
      <Footer/>
    </div>
  )
}

function ServiceContent (){

  let [categories, setCategories] = useState([]);
  let [loading, setLoading] = useState(false);
  let [error, setError] = useState("");

  async function FetchCategories() {
    try{
      setLoading(true);
      const response = await api.get("/user/getcategories");
      console.log("success",response);
      setCategories(response.data.categories || []); 
    } catch(e){
      console.log("Full Error:", e);
    console.log("Response:", e.response);
    console.log("Data:", e.response?.data);
    console.log("Status:", e.response?.status);

    setError(e.response?.data?.message || e.message);
    }finally{
      setLoading(false);
    }
  }

  useEffect(() =>{
    FetchCategories();
  },[])
  const bridal = categories[0];
  const fashion = categories[1];
  const craft = categories[2];

   if (error) return <h2>{error}</h2>

    return(
        <>
        <div className='bg-background text-on-background font-body-md overflow-x-hidden'>
          <main className="max-w-container-max mx-auto">
  {/* Hero Section */}
  <section className="py-stack-xl px-margin-mobile md:px-margin-desktop text-center">
    <span className="font-label-caps text-label-caps text-primary mb-4 block">Our Services</span>
    <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg mb-6 max-w-4xl mx-auto">Bespoke Artistry for Your Special Moments</h1>
    <p className="font-body-lg text-body-lg text-secondary max-w-2xl mx-auto mb-12">Explore our collection of handcrafted designs created to celebrate life's most meaningful occasions with elegance and grace.</p>
    <div className="h-[1px] w-24 bg-primary-container mx-auto" />
  </section>
  {/* Services Grid */}
  <section className="pb-stack-xl px-margin-mobile md:px-margin-desktop">
    <div className="space-y-stack-xl">
      {/* Service 1: Bridal Mehendi (Asymmetric) */}
      <div className="flex flex-col md:flex-row items-center gap-12 md:gap-gutter">
        {loading?(
          <>
            <h3>Loading...</h3>
          </>
        ):(bridal && (
            <>
                <div className="w-full md:w-1/2 service-card group overflow-hidden rounded-xl bg-surface-container-low">
          <img alt="Bridal Mehendi Artistry" className="w-full h-[600px] object-cover service-card-image" data-alt="Close up of intricate bridal henna patterns on hands, styled in a minimalist and luxury fashion. The lighting is soft and warm, highlighting the champagne gold jewelry and silk fabrics in the background. The mood is serene and exclusive, reflecting a high-couture bridal artistry aesthetic with a soft beige and ivory color palette." src={`https://hir-atelier.onrender.com/uploads/${bridal.image.split("\\").pop()}`} />
        </div>
        <div className="w-full md:w-1/2 md:pl-12">
          <span className="font-label-caps text-label-caps text-primary tracking-widest mb-4 block">ARTISTRY</span>
          <h2 className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl mb-6"> {bridal.name}</h2>
          <p className="font-body-md text-body-md text-on-surface-variant mb-8 leading-relaxed"></p>
          <div className="space-y-4 mb-10">
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-primary-container">auto_awesome</span>
              <span className="font-body-md text-body-md">Custom Narrative Integration</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-primary-container">spa</span>
              <span className="font-body-md text-body-md">Organic Premium Henna Blend</span>
            </div>
          </div>
          <Link className="px-8 py-4 border border-on-surface text-on-surface font-label-caps text-label-caps hover:bg-on-surface hover:text-surface transition-all duration-300" to={`/mehendi/${bridal._id}`}>
             Explore Service
          </Link>
        </div>
            </>
        ))}
      
      </div>
      {/* Service 2: Custom Fashion Design (Reversed) */}
      <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-gutter">
        {loading? (
          <>
            <h3>Loading...</h3>
          </>
        ):(
          fashion && (
            <>
               <div className="w-full md:w-1/2 md:pr-12">
          <span className="font-label-caps text-label-caps text-primary tracking-widest mb-4 block">COUTURE</span>
          <h2 className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl mb-6">{fashion.name}</h2>
          <p className="font-body-md text-body-md text-on-surface-variant mb-8 leading-relaxed"></p>
          <div className="grid grid-cols-2 gap-6 mb-10">
            <div className="p-6 bg-surface-container-low rounded-lg">
              <h4 className="font-label-caps text-label-caps text-primary mb-2">PHASE 01</h4>
              <p className="text-sm">Mood-boarding &amp; Sketching</p>
            </div>
            <div className="p-6 bg-surface-container-low rounded-lg">
              <h4 className="font-label-caps text-label-caps text-primary mb-2">PHASE 02</h4>
              <p className="text-sm">Fabric Sourcing &amp; Toile</p>
            </div>
          </div>
          <Link className="px-8 py-4 bg-primary-container text-on-primary-container font-label-caps text-label-caps hover:scale-[1.02] transition-transform duration-200" to={`/fashion/${fashion._id}`}>
            Explore Service
          </Link>
        </div>
        <div className="w-full md:w-1/2 service-card group overflow-hidden rounded-xl bg-surface-container-low">
          <img alt="Custom Fashion Design" className="w-full h-[600px] object-cover service-card-image" data-alt="A luxury fashion atelier setting with an ivory silk bridal gown draped over a professional mannequin. Soft sunlight filters through tall windows, illuminating rolls of champagne colored fabric and sketches. The aesthetic is clean, sophisticated, and minimalist, emphasizing the high-end craftsmanship of the couture design process." src={`https://hir-atelier.onrender.com/uploads/${fashion.image.split("\\").pop()}`} />
        </div>
            </>
          )
        )}
      </div>

        {/*service 3 : handmade crafts*/}
       <div className="flex flex-col md:flex-row items-center gap-12 md:gap-gutter">
        {loading? (
          <>
            <h3>Loading...</h3>
          </>
        ): (
          craft && (
            <>
                <div className="w-full md:w-1/2 service-card group overflow-hidden rounded-xl bg-surface-container-low">
    <img
      alt="Handmade Products"
      className="w-full h-[600px] object-cover service-card-image"
      src={`https://hir-atelier.onrender.com/uploads/${craft.image.split("\\").pop()}`}
    />
  </div>

  <div className="w-full md:w-1/2 md:pl-12">
    <span className="font-label-caps text-label-caps text-primary tracking-widest mb-4 block">
      HANDCRAFTED
    </span>

    <h2 className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl mb-6">
      {craft.name}
    </h2>

    <p className="font-body-md text-body-md text-on-surface-variant mb-8 leading-relaxed">
     
    </p>

    <div className="space-y-4 mb-10">
      <div className="flex items-center gap-4">
        <span className="material-symbols-outlined text-primary-container">
          favorite
        </span>
        <span className="font-body-md text-body-md">
          Handmade with Premium Materials
        </span>
      </div>

      <div className="flex items-center gap-4">
        <span className="material-symbols-outlined text-primary-container">
          diamond
        </span>
        <span className="font-body-md text-body-md">
          Personalized & Unique Designs
        </span>
      </div>

      <div className="flex items-center gap-4">
        <span className="material-symbols-outlined text-primary-container">
          workspace_premium
        </span>
        <span className="font-body-md text-body-md">
          Crafted for Lasting Memories
        </span>
      </div>
    </div>

    <Link className="px-8 py-4 border border-on-surface text-on-surface font-label-caps text-label-caps hover:bg-on-surface hover:text-surface transition-all duration-300" to={`/craft/${craft._id}`}>
      Explore Products
    </Link>
  </div>
            </>
          )
        )}
</div>
      {/* Service 3 & 4: Roomals & Jewelry (Bento Style) */}
      
    </div>
  </section>
  {/* Process Overview */}
  <section className="py-stack-xl bg-surface-container-low px-margin-mobile md:px-margin-desktop rounded-3xl mx-margin-mobile md:mx-margin-desktop mb-stack-xl">
    <div className="max-w-4xl mx-auto text-center mb-16">
      <h2 className="font-headline-xl text-headline-xl mb-6">The Atelier Journey</h2>
      <p className="font-body-md text-body-md text-secondary">A transparent and collaborative approach to creating your bespoke bridal vision.</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
      <div className="text-center">
        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
          <span className="font-headline-md text-primary">01</span>
        </div>
        <h4 className="font-label-caps text-label-caps mb-4">CONSULTATION</h4>
        <p className="text-sm text-on-surface-variant">An intimate session to discuss your vision, preferences, and timeline.</p>
      </div>
      <div className="text-center">
        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
          <span className="font-headline-md text-primary">02</span>
        </div>
        <h4 className="font-label-caps text-label-caps mb-4">CREATION</h4>
        <p className="text-sm text-on-surface-variant">Our artisans begin the meticulous process of hand-crafting your bespoke piece.</p>
      </div>
      <div className="text-center">
        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
          <span className="font-headline-md text-primary">03</span>
        </div>
        <h4 className="font-label-caps text-label-caps mb-4">DELIVERY</h4>
        <p className="text-sm text-on-surface-variant">The final reveal and fitting, ensuring perfection for your momentous day.</p>
      </div>
    </div>
  </section>
</main>
</div>
        </>
    )
}

export default Service
