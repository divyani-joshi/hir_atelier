import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import api from '../../../user/src/utility/AxiosConfig';

function Booking() {
  return (
    <div>
      <BookingContent/>
    </div>
  )
}

function BookingContent (){
   let [bookings, setBookings] = useState([]);
  let [loading, setLoading] = useState(false);
  let [error, setError] = useState("");

  async function FetchBooking() {
    try{
      setLoading(true);
     const response = await api.get("/admin/getbooking", {
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});
      console.log("success",response);
      setBookings(response.data.booking || []); 
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
    FetchBooking();
  },[])

    return(
        <>
            <div className='bg-background text-on-surface font-body-md min-h-screen'>
  <main className="lg:ml-[280px] min-h-screen flex flex-col relative">
   
    {/* Page Content */}
    <div className="p-gutter max-w-container-max mx-auto w-full flex-1">
      {/* Header Section */}
     {/* PAGE HEADER & BREADCRUMBS */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-md">
        <div>
          <nav className="flex items-center gap-2 mb-2 text-on-surface-variant">
            <a className="font-label-md hover:text-primary" href="#">Dashboard</a>
            <span className="material-symbols-outlined text-[14px]" data-icon="chevron_right">chevron_right</span>
            <span className="font-label-md text-primary font-bold">Bookings</span>
          </nav>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">Booking Catalog</h2>
          <p className="font-body-md text-on-surface-variant">Manage your luxury inventory, pricing, and stock levels.</p>
        </div>
      
      </div>
      {/* FILTERS & SEARCH MOBILE */}
     
      {/* Booking Table */}
      <div className="glass-card rounded-2xl overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container/30 border-b border-outline-variant/20">
                <th className="px-lg py-md text-label-md text-on-surface-variant font-semibold">Customer</th>
                <th className="px-lg py-md text-label-md text-on-surface-variant font-semibold">Service</th>
                <th className="px-lg py-md text-label-md text-on-surface-variant font-semibold">Date &amp; Time</th>
                <th className="px-lg py-md text-label-md text-on-surface-variant font-semibold">No. of people</th>
                <th className="px-lg py-md text-label-md text-on-surface-variant font-semibold">Inspiration Image</th>
                <th className="px-lg py-md text-label-md text-on-surface-variant font-semibold">Status</th>
                <th className="px-lg py-md text-label-md text-on-surface-variant font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/10">
              {/* Row 1 */}
              {loading? (
                <>

                </>
              ):(
                <>
                {bookings?.map ((value) => (
                    <>
                         <tr className="hover:bg-primary-fixed-dim/5 transition-colors cursor-pointer" onclick="toggleDetails('details-1')">
                <td className="px-lg py-md">
                  <div className="flex items-center gap-sm">
                   
                    <div>
                      <p className="font-semibold text-on-surface">{value.name}</p>
                      <p className="text-[12px] text-on-surface-variant">{value.enmail}</p>
                    </div>
                  </div>
                </td>
                <td className="px-lg py-md">
                  <span className="px-3 py-1 bg-primary-container/20 text-primary rounded-full text-label-md">{value.service_title}</span>
                </td>
                <td className="px-lg py-md">
                  <p className="text-on-surface">{value.booking_date}</p>
                  <p className="text-[12px] text-on-surface-variant">{value.booking_time}</p>
                </td>
                <td className="px-lg py-md">
                  <span className="text-on-surface-variant">{value.number_of_people}</span>
                </td>
                 <td className="px-lg py-md">
                 <div className="w-20 h-20 rounded-lg bg-surface-container overflow-hidden border border-outline-variant/20">
                      <img className="w-full h-full object-cover" data-alt="Close-up of a premium designer leather armchair in a cognac brown shade, resting in a bright studio environment with soft shadows. The lighting is diffused and professional, showcasing the rich texture of the grain. Minimalist, modern aesthetic with a focus on artisanal craftsmanship and high-end materials." src={`http://localhost:8000/uploads/${value.inspiration_image?.split("\\").pop()}`} />
                    </div>
                </td>
                <td className="px-lg py-md">
                  <span className="flex items-center gap-1.5 text-primary">
                   
                    <span className="text-label-md">{value.booking_status}</span>
                  </span>
                </td>
                <td className="px-lg py-md text-right">
                  <button className="p-2 hover:bg-surface-container rounded-full transition-colors text-on-surface-variant">
                    <span className="material-symbols-outlined">more_vert</span>
                  </button>
                </td>
              </tr>
              <tr className="row-details-enter" id="details-1">
                <td className="bg-surface-container/20" colSpan={6}>
                  <div className="p-lg grid grid-cols-3 gap-xl">
                    <div>
                      <p className="text-label-md text-on-surface-variant mb-2">Special Notes</p>
                      <p className="text-body-md text-on-surface leading-relaxed">"{value.note}</p>
                    </div>
                   
                  </div>
                </td>
              </tr>
                    </>
                  )
                )}
               
                </>
              )}
              
           
            </tbody>
          </table>
        </div>
       
      </div>
    </div>
    {/* Footer spacing for mobile */}
    <div className="h-20 lg:hidden" />
  </main>
  {/* Mobile Navigation (Bottom Bar) */}
  <nav className="fixed bottom-0 left-0 right-0 h-16 bg-surface/80 backdrop-blur-xl border-t border-outline-variant/30 flex lg:hidden items-center justify-around z-50">
    <button className="flex flex-col items-center gap-1 text-on-surface-variant">
      <span className="material-symbols-outlined">home</span>
      <span className="text-[10px]">Home</span>
    </button>
    <button className="flex flex-col items-center gap-1 text-primary">
      <span className="material-symbols-outlined" style={{fontVariationSettings: '"FILL" 1'}}>event_available</span>
      <span className="text-[10px] font-bold">Bookings</span>
    </button>
    <button className="flex flex-col items-center gap-1 text-on-surface-variant">
      <span className="material-symbols-outlined">inventory_2</span>
      <span className="text-[10px]">Products</span>
    </button>
    <button className="flex flex-col items-center gap-1 text-on-surface-variant">
      <span className="material-symbols-outlined">group</span>
      <span className="text-[10px]">Clients</span>
    </button>
  </nav>
</div>

        </>
    )
}
export default Booking
