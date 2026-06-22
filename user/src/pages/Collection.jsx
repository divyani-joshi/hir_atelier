import React, { useState } from "react";
import Hedaer from "../common/Hedaer";
import Footer from "../common/Footer";
import api from "../utility/AxiosConfig";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";



function Collection(){
  return(
    <>
      <Hedaer/>
<CollectionContent/>
<Footer/>
    </>
  )
}

function CollectionContent(){

let [services, setServices] = useState([]);
  let [loading, setLoading] = useState(false);
  let [error, setError] = useState("");
  const [expandedServices, setExpandedServices] = useState({});
  const toggleViewMore = (id) => {
  setExpandedServices((prev) => ({
    ...prev,
    [id]: !prev[id],
  }));
};
  


  const serviceNames = [
    "mehendi",
    "custom-dress-designing",
    "t-shirt-sketch",
    "handmade-crochet-gifts-accessories",
    "wedding-rumals",
    "decorative-trays",
    "handmade-jewellery",
    "photo-sketch"
  ];


 async function FetchServices() {
  try {
    setLoading(true);

    const responses = await Promise.allSettled(
      serviceNames.map((service) =>
        api.get(`/user/getgallery/${service}`)
      )
    );

    const data = responses
      .filter(
        (res) =>
          res.status === "fulfilled" &&
          res.value.data.success
      )
      .map((res) => res.value.data.data);

    setServices(data);

  } catch (e) {
    setError(e.message);
  } finally {
    setLoading(false);
  }
}


  useEffect(()=>{
    FetchServices();
  },[]);
  const location = useLocation();

useEffect(() => {

    if (location.hash) {

        const id = location.hash.replace("#","");

        setTimeout(() => {

            const element = document.getElementById(id);

            if (element) {

                element.scrollIntoView({
                    behavior:"smooth",
                    block:"start"
                });

            }

        },300);

    }

},[services,location]);
  return(
<div className="bg-background text-on-background font-body-md overflow-x-hidden">
  <main>
    {/* Hero */}
    <section className="mb-20 mt-20 px-margin-mobile md:px-margin-desktop text-center">
      <span className="font-label-caps text-label-caps text-primary mb-4 block">
        Our Gallery
      </span>
      <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg mb-6 max-w-4xl mx-auto">
        Handmade Stories &amp; Creations
      </h1>
      <p className="font-body-lg text-body-lg text-secondary max-w-2xl mx-auto mb-12">
        Explore our handcrafted services designed with creativity, passion and elegance.
      </p>
      <div className="h-[1px] w-24 bg-primary-container mx-auto" />
    </section>
    {/* Filters */}
   <section className="px-margin-mobile md:px-margin-desktop mb-20">
  <div className="max-w-container-max mx-auto grid grid-cols-2 md:grid-cols-4 gap-gutter">

    {serviceNames.map((item) => (
      <button
        key={item}
        onClick={() => {
          document.getElementById(item)?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }}
        className="border border-primary/20 rounded-full py-4 text-center font-label-caps text-label-caps text-primary hover:bg-primary hover:text-white transition"
      >
        {item
          .replaceAll("-", " ")
          .replace(/\b\w/g, (char) => char.toUpperCase())}
      </button>
    ))}

  </div>
</section>
    {/* SERVICE 1 */}
  {loading ? (
  <h2 className="text-center text-xl py-20">Loading...</h2>
) : (
  services.map((service) => {
    const showAll = expandedServices[service._id];

    return (
      <section
      id={service.service}
      key={service._id}
        className="px-margin-mobile md:px-margin-desktop mb-24"
      >
        <div className="max-w-container-max mx-auto">

          <div className="flex justify-between items-end mb-10">
            <div>
              <span className="font-label-caps text-primary tracking-[0.3em]">
                {service.subtitle}
              </span>

              <h2 className="font-headline-xl mt-4">
                {service.title}
              </h2>
            </div>

            <button
              onClick={() => toggleViewMore(service._id)}
              className="font-label-caps text-primary border-b border-primary"
            >
              {showAll ? "VIEW LESS" : "VIEW MORE"}
            </button>
          </div>

          {/* Show message if no images */}
          {service.images.length === 0 ? (
            <div className="text-center py-10 text-gray-400">
              No Images Available
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

              {(showAll
                ? service.images
                : service.images.slice(0, 4)
              ).map((img, index) => (
                <div
                  key={index}
                  className="group relative aspect-[3/4] overflow-hidden rounded-xl"
                >
                  <img
                    src={`http://localhost:8000/${img.replace(
                      /\\/g,
                      "/"
                    )}`}
                    alt=""
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                    <h3 className="text-white text-xl">
                      {service.title}
                    </h3>
                  </div>
                </div>
              ))}

            </div>
          )}
        </div>
      </section>
    );
  })
)}
    {/* COPY THIS BLOCK FOR OTHER SERVICES */}
 
    {/* CTA */}
  <section className="mt-stack-xl bg-[#A38F7A] text-white py-24 px-margin-mobile reveal">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl mb-8">Let's Create Something <span className="signature-text italic">Beautiful Together</span></h2>
      <p className="font-body-lg text-body-lg mb-12 opacity-90 max-w-2xl mx-auto">Available for worldwide consultations and bespoke orders. Let us bring your creative dreams to life with artisanal precision.</p>
      <div className="flex flex-col sm:flex-row justify-center gap-6">
        <button className="bg-white text-[#A38F7A] px-12 py-5 rounded-full font-label-caps tracking-widest uppercase hover:scale-105 transition-transform duration-300 btn-shimmer">
          Book Now
        </button>
        <button className="border border-white/40 px-12 py-5 rounded-full font-label-caps tracking-widest uppercase hover:bg-white/10 transition-all duration-300">
          Request Custom Design
        </button>
      </div>
    </div>
  </section>
  </main>
</div>


)
}

export default Collection;