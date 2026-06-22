import React, { useEffect, useState } from "react";
import api from "../../../user/src/utility/AxiosConfig";
import { useNavigate } from "react-router-dom";

function AddService() {
  return (
    <div>
      <AddServiceContent/>
    </div>
  )
}

function AddServiceContent (){
  const [title, setTitle] = useState("");
const [slug, setSlug] = useState("");
const [category_id, setCategoryId] = useState("");
const [category_name, setCategoryName] = useState("");
const [description, setDescription] = useState("");
const [price, setPrice] = useState("");
const [image, setImage] = useState(null);

const [categories, setCategories] = useState([]);
const [loading, setLoading] = useState(false);

useEffect(() => {
  fetchCategories();
}, []);

const fetchCategories = async () => {
  try {
    const res = await api.get("/user/getcategories");
    setCategories(res.data.categories || []);
  } catch (err) {
    console.log(err);
  }
};
useEffect(() => {
  setSlug(
    title
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
  );
}, [title]);
 

const handleSubmit = async () => {
 
  if (
    !title ||
    !category_id ||
    !description ||
    
    !image
  ) {
    return alert("Please fill all fields");
  }

  try {

    setLoading(true);

    const formData = new FormData();

    formData.append("title", title);
    formData.append("slug", slug);
    formData.append("category_id", category_id);
    formData.append("category_name", category_name);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("image", image);

    const res = await api.post(
      "/admin/addservice",
      formData,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem(
            "token"
          )}`,
          "Content-Type": "multipart/form-data",
        },
      }
    );

    alert(res.data.message);

  } catch (err) {

    console.log(err.response);

    alert(
      err.response?.data?.message ||
      "Something went wrong"
    );

  } finally {

    setLoading(false);

  }

};
    return(
        <div className='bg-background text-on-surface'>
           <main className="lg:ml-[280px] min-h-screen">
  {/* Top Navbar */}
  <header className="sticky top-0 z-40 w-full bg-surface/80 backdrop-blur-xl border-b border-outline-variant/30">
    <div className="flex justify-between items-center h-20 px-gutter max-w-container-max mx-auto">
      <div className="flex items-center gap-4">
        <button className="lg:hidden p-2 text-on-surface">
          <span className="material-symbols-outlined" data-icon="menu">menu</span>
        </button>
        <h2 className="font-headline-md text-headline-md text-primary">Add New Service</h2>
      </div>
      <div className="flex items-center gap-6">
        <div className="hidden md:flex items-center bg-surface-container-low px-4 py-2 rounded-full border border-outline-variant/20">
          <span className="material-symbols-outlined text-outline" data-icon="search">search</span>
          <input className="bg-transparent border-none focus:ring-0 text-body-md w-48" placeholder="Search resources..." type="text" />
        </div>
        <div className="flex items-center gap-3">
          <button className="p-2 rounded-full hover:bg-surface-container transition-colors">
            <span className="material-symbols-outlined text-on-surface-variant" data-icon="notifications">notifications</span>
          </button>
          <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container font-bold overflow-hidden">
            <img alt="Admin Profile" data-alt="A professional headshot of a creative director in a minimalist studio. He wears a neutral linen shirt and has a sophisticated, focused expression. The lighting is soft and directional, casting gentle shadows that emphasize textures. The aesthetic is clean, high-end, and executive, aligning with a luxury brand's identity." src="https://lh3.googleusercontent.com/aida-public/AB6AXuASx-YoPR4gvTv-74Cq9vPUrhtU-eDMBb2l4LSyEVTGiRCnhEUHd3ghlMEN70gmQVKqHjOyBrqdQZVnMZ_8HtLVvzNWf4Gimbc-2DqkoXYzQTNPi_mVt0rfIytiDzEGdWxjQ6oAJER5WsMzReqO6WUdSp2-delm_aKkiK-8Hh7sxW3Xq81JOe2vii51wXcB5UU8lcYiIDIY2VxSxEAfua2FBypSwT5hrKeT3SY36m_l7mc3bQCYAKFlOncu53a9_No2yzyZOfyBDsg" />
          </div>
        </div>
      </div>
    </div>
  </header>
  {/* Stepper Container */}
  <div className="max-w-4xl mx-auto px-gutter py-xl">
    
    {/* Form Content: Section 1 (Visible) */}
    <div className="space-y-xl">
      {/* Card: Basic Details */}
      <section className="bg-white rounded-xl p-xl shadow-sm border border-outline-variant/20">
        <h3 className="font-headline-md text-headline-md text-on-surface mb-lg">Service Fundamentals</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
          <div className="floating-label-group">
            <input className="w-full h-14 px-4 pt-4 border border-outline-variant rounded-lg focus:ring-1 focus:ring-primary focus:border-primary transition-all outline-none" id="service-name" placeholder=" " type="text" value={title}
onChange={(e)=>setTitle(e.target.value)}/>
            <label className="font-body-md text-body-md" htmlFor="service-name">Service Name (e.g., Bespoke Bridal Gown)</label>
          </div><div className="floating-label-group">
            <input className="w-full h-14 px-4 pt-4 border border-outline-variant rounded-lg focus:ring-1 focus:ring-primary focus:border-primary transition-all outline-none bg-surface-container-low/30" id="service-slug" placeholder=" " type="text" defaultValue="bespoke-bridal-gown" value={slug}
readOnly/>
            <label className="font-body-md text-body-md" htmlFor="service-slug">Service Slug (Auto-generated)</label>
            <span className="material-symbols-outlined absolute right-4 top-4 text-outline text-xs" data-icon="lock">lock</span>
          </div>
          <div className="relative">
            <select className="w-full h-14 px-4 pt-4 border border-outline-variant rounded-lg appearance-none focus:ring-1 focus:ring-primary focus:border-primary transition-all outline-none bg-transparent font-body-md text-body-md" id="category" value={category_id}
onChange={(e)=>{
    setCategoryId(e.target.value);

    const selected =
      categories.find(
        item => item._id === e.target.value
      );

    setCategoryName(selected?.name || "");
}}>
             <option value="">Select Category</option>

{categories.map((item)=>(
    <option
      key={item._id}
      value={item._id}
    >
      {item.name}
    </option>
))}
            </select>
            <span className="material-symbols-outlined absolute right-4 top-4 pointer-events-none text-outline" data-icon="expand_more">expand_more</span>
          </div>
          <div className="md:col-span-2">
            <label className="block font-label-md text-label-md text-outline mb-2" >Detailed Description</label>
            <div className="border border-outline-variant rounded-lg overflow-hidden">
              <div className="bg-surface-container-low px-4 py-2 border-b border-outline-variant flex gap-4">
                <button className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors" data-icon="format_bold">format_bold</button>
                <button className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors" data-icon="format_italic">format_italic</button>
                <button className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors" data-icon="list">list</button>
                <button className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors" data-icon="link">link</button>
              </div>
             <textarea
  className="w-full h-40 px-4 py-4 border-none focus:ring-0 font-body-md text-body-md resize-none"
  placeholder="Describe the luxury experience..."
  value={description}
  onChange={(e) => setDescription(e.target.value)}
/>
            </div>
          </div>
        </div>
      </section>
      {/* Card: Media Assets */}
      <section className="bg-white rounded-xl p-xl shadow-sm border border-outline-variant/20">
        <h3 className="font-headline-md text-headline-md text-on-surface mb-lg">Visual Storytelling</h3>
        <div className="border-2 border-dashed border-outline-variant/50 rounded-xl p-10 text-center hover:bg-surface-container-low/30 transition-all group cursor-pointer">
          <div className="w-16 h-16 bg-primary-container/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
          <input
  type="file"
  accept="image/*"
  onChange={(e)=>{
    setImage(e.target.files[0]);
  }}
/>
            <span className="material-symbols-outlined text-primary text-3xl" data-icon="upload_file">upload_file</span>
          </div>
          <p className="font-headline-md text-headline-md text-on-surface mb-xs">Drag &amp; drop service images</p>
          <p className="font-body-md text-body-md text-outline">Upload high-resolution concept sketches or completed work (JPG, PNG up to 10MB)</p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
           
            <div className="w-24 h-24 rounded-lg border-2 border-primary border-dotted flex items-center justify-center text-primary hover:bg-primary/5 transition-colors">
              <span className="material-symbols-outlined" data-icon="add">add</span>
            </div>
          </div>
        </div>
      </section>
      {/* Card: Logistics */}
      <section className="bg-white rounded-xl p-xl shadow-sm border border-outline-variant/20">
        <h3 className="font-headline-md text-headline-md text-on-surface mb-lg" >Pricing &amp; Availability</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-lg items-end">
          <div className="floating-label-group">
            <span className="absolute left-4 top-4 text-outline font-body-md">$</span>
          <input
  className="w-full h-14 pl-8 pr-4 pt-4 border border-outline-variant rounded-lg focus:ring-1 focus:ring-primary focus:border-primary transition-all outline-none"
  id="price"
  placeholder=" "
  type="number"
  value={price}
  onChange={(e) => setPrice(e.target.value)}
/>
            <label className="font-body-md text-body-md !left-8" htmlFor="price">Base Investment</label>
          </div>
          <div className="relative">
            <select className="w-full h-14 px-4 pt-4 border border-outline-variant rounded-lg appearance-none focus:ring-1 focus:ring-primary focus:border-primary transition-all outline-none bg-transparent font-body-md text-body-md" id="duration">
              <option>45 Minutes</option>
              <option>1 Hour</option>
              <option selected>2 Hours</option>
              <option>Half Day (4h)</option>
              <option>Full Day (8h)</option>
            </select>
            <label className="absolute -top-2.5 left-3 bg-white px-1 font-label-md text-label-md text-primary">Service Duration</label>
            <span className="material-symbols-outlined absolute right-4 top-4 pointer-events-none text-outline" data-icon="schedule">schedule</span>
          </div>
          {/* Toggle */}
          <div className="md:col-span-2 flex items-center justify-between p-4 bg-surface-container-low rounded-lg">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary" data-icon="home_repair_service">home_repair_service</span>
              <div>
                <p className="font-body-lg text-body-lg font-bold text-on-surface">Home Service Available</p>
                <p className="font-label-md text-label-md text-outline">Atelier travel fee applies based on location</p>
              </div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input defaultChecked className="sr-only peer" type="checkbox" defaultValue />
              <div className="w-11 h-6 bg-outline-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary" />
            </label>
          </div>
        </div>
      </section>
      {/* Action Footer */}
      <div className="flex items-center justify-end gap-md pt-lg">
        <button className="px-8 py-3 rounded-lg border border-outline-variant text-on-surface-variant font-body-md hover:bg-surface-container transition-colors">
          Save Draft
        </button>
      <button
  onClick={handleSubmit}
  disabled={loading}
  className="px-10 py-3 rounded-lg bg-primary text-on-primary"
>
  {loading ? "Saving..." : "Save Service"}
</button>
      </div>
    </div>
  </div>
</main>

        </div>
    )
}

export default AddService
