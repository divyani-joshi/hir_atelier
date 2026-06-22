import React from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";
import api from '../../../user/src/utility/AxiosConfig';
import { useEffect } from 'react';

function Categories() {
  return (
    <div>
      <CategoryContent/>
    </div>
  )
}

function CategoryContent(){
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
    return(
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
            <span className="font-label-md text-primary font-bold">Category</span>
          </nav>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">Category Catalog</h2>
          <p className="font-body-md text-on-surface-variant">Manage your luxury inventory, pricing, and stock levels.</p>
        </div>
        <Link className="bg-primary text-on-primary px-lg py-3 rounded-lg flex items-center gap-2 hover:opacity-90 active:scale-[0.98] transition-all font-body-md font-semibold shadow-md" to="/addcategory">
          <span className="material-symbols-outlined" data-icon="add" >add</span>
          Add Product
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
    <th className="px-6 py-4 text-left font-semibold text-on-surface-variant uppercase tracking-wider border-b border-outline-variant/30">
      Image
    </th>

    <th className="px-6 py-4 text-left font-semibold text-on-surface-variant uppercase tracking-wider border-b border-outline-variant/30">
      Category Name
    </th>

    <th className="px-6 py-4 text-left font-semibold text-on-surface-variant uppercase tracking-wider border-b border-outline-variant/30">
      Slug
    </th>

    <th className="px-6 py-4 text-center font-semibold text-on-surface-variant uppercase tracking-wider border-b border-outline-variant/30">
      Status
    </th>

    <th className="px-6 py-4 text-right font-semibold text-on-surface-variant uppercase tracking-wider border-b border-outline-variant/30">
      Actions
    </th>
  </tr>
</thead>
           <tbody className="divide-y divide-outline-variant/20">
  {loading ? (
    <tr>
      <td colSpan={5} className="text-center py-6">
        Loading...
      </td>
    </tr>
  ) : error ? (
    <tr>
      <td colSpan={5} className="text-center py-6 text-red-500">
        {error}
      </td>
    </tr>
  ) : categories.length > 0 ? (
    categories.map((value, index) => (
     <tr key={value._id}>
    <td className="px-6 py-4">
      {index + 1}
    </td>
       

        <td className="px-lg py-4">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 rounded-lg bg-surface-container overflow-hidden border border-outline-variant/20">
              <img
               src={`https://hir-atelier.onrender.com/uploads/${value.image.split("\\").pop()}`}
                alt={value.categoryName}
                className="w-full h-full object-cover"
              />
            </div>

            <div>
             
              <p className="text-[11px] text-outline">
                ID: {value._id}
              </p>
            </div>
          </div>
        </td>

        <td className="px-lg py-4 font-body-md text-on-surface-variant">
          {value.name}
        </td>
 <td className="px-lg py-4 font-body-md text-on-surface-variant">
          {value.slug}
        </td>


        <td className="px-lg py-4">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-secondary-container text-on-secondary-container uppercase">
            Active
          </span>
        </td>

        <td className="px-lg py-4 text-right">
          <button className="p-1 hover:bg-surface-container-high rounded transition-colors text-on-surface-variant">
            <span className="material-symbols-outlined">
              more_vert
            </span>
          </button>
        </td>
      </tr>
    ))
  ) : (
    <tr>
      <td colSpan={5} className="text-center py-6">
        No categories found.
      </td>
    </tr>
  )}
</tbody>
          </table>
        </div>
        
      </div>
      {/* SUMMARY STATS (Bento Layout style) */}
     
    </div>
  </main>
</div>
    )
}
export default Categories
