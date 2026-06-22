import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import api from '../../../user/src/utility/AxiosConfig';

function Blog() {
  return (
    <div>
      <BlogContent/>
    </div>
  )
}

function BlogContent(){
  let [blogs, setBlogs] = useState([]);
  let [loading, setLoading] = useState(false);
  let [error, setError] = useState("");

  async function FetchBlogs() {
    try{
      setLoading(true);
      const response = await api.get("/user/getblogs");
      console.log("success",response);
      setBlogs(response.data.blogs || []); 
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
    FetchBlogs();
  },[])
    return(
        <>
           <div className='bg-background text-on-background selection:bg-primary-container selection:text-on-primary-container'>
 
  {/* MAIN CONTENT */}
  <main className="lg:pl-[280px] min-h-screen">
    <div className="p-gutter max-w-container-max mx-auto space-y-lg">
      {/* PAGE HEADER & BREADCRUMBS */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-md">
        <div>
          <nav className="flex items-center gap-2 mb-2 text-on-surface-variant">
            <a className="font-label-md hover:text-primary" href="#">Dashboard</a>
            <span className="material-symbols-outlined text-[14px]" data-icon="chevron_right">chevron_right</span>
            <span className="font-label-md text-primary font-bold">Blogs</span>
          </nav>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">Blog Catalog</h2>
          <p className="font-body-md text-on-surface-variant">Manage your luxury inventory, pricing, and stock levels.</p>
        </div>
        <Link className="bg-primary text-on-primary px-lg py-3 rounded-lg flex items-center gap-2 hover:opacity-90 active:scale-[0.98] transition-all font-body-md font-semibold shadow-md" to="/addblog">
          <span className="material-symbols-outlined" data-icon="add">add</span>
          Add Blog
        </Link>
      </div>
      {/* FILTERS & SEARCH MOBILE */}
     
      {/* DATA TABLE */}
      <div className="bg-surface-container-lowest border border-outline-variant/20 rounded-xl overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container-low/50">
               <th className="px-6 py-4 text-left uppercase tracking-wider">
      #
    </th>
                <th className="px-lg py-4 font-label-md text-on-surface-variant border-b border-outline-variant/30 uppercase tracking-wider">Image</th>
                <th className="px-lg py-4 font-label-md text-on-surface-variant border-b border-outline-variant/30 uppercase tracking-wider">Title</th>
                <th className="px-lg py-4 font-label-md text-on-surface-variant border-b border-outline-variant/30 uppercase tracking-wider text-right">Description</th>
                <th className="px-lg py-4 font-label-md text-on-surface-variant border-b border-outline-variant/30 uppercase tracking-wider">Tags</th>
                <th className="px-lg py-4 font-label-md text-on-surface-variant border-b border-outline-variant/30 uppercase tracking-wider">Status</th>
                <th className="px-lg py-4 font-label-md text-on-surface-variant border-b border-outline-variant/30 uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/20">
            {loading? (
             <tr>
      <td colSpan="7" className="text-center py-6">
        Loading...
      </td>
    </tr>
            ):(
              <>
                {blogs?.map((value, index) => (
                  
                    <tr key={value._id} className="hover:bg-surface-container-low/30 transition-colors group">
               <td className="px-lg py-4">
  {index + 1}
</td>
                <td className="px-lg py-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-surface-container overflow-hidden border border-outline-variant/20">
                      <img alt="Leather Armchair" className="w-full h-full object-cover" data-alt="Close-up of a premium designer leather armchair in a cognac brown shade, resting in a bright studio environment with soft shadows. The lighting is diffused and professional, showcasing the rich texture of the grain. Minimalist, modern aesthetic with a focus on artisanal craftsmanship and high-end materials." src={`http://localhost:8000/uploads/${value.image?.split("\\").pop()}`} />
                    </div>
                    <div>
                      
                      <p className="text-[11px] text-outline">{value._id}4</p>
                    </div>
                  </div>
                </td>
                <td className="px-lg py-4 font-body-md text-on-surface-variant">{value.title}</td>
                <td className="px-lg py-4 font-body-md text-on-surface text-right">{value.description}</td>
                <td className="px-lg py-4">
                  <div className="flex items-center gap-2">
                  
                    <span className="text-[12px] font-medium text-on-surface">{value.tags}</span>
                  </div>
                </td>
                <td className="px-lg py-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-secondary-container text-on-secondary-container uppercase">{value.category}</span>
                </td>
                <td className="px-lg py-4 text-right">
                  <button className="p-1 hover:bg-surface-container-high rounded transition-colors text-on-surface-variant">
                    <span className="material-symbols-outlined" data-icon="more_vert">more_vert</span>
                  </button>
                </td>
              </tr>
                  
                ))}
              </>
            )}
            
            </tbody>
          </table>
        </div>
       
      </div>
      {/* SUMMARY STATS (Bento Layout style) */}
     
    </div>
  </main>
</div>

        </>
    )
}

export default Blog
