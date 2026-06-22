import React from 'react'
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import api from "../../../user/src/utility/AxiosConfig";

function AddBlog() {
  return (
    <div>
      <AddBlogContent/>
    </div>
  )
}

function AddBlogContent(){

  const [title, setTitle] = useState("");
const [slug, setSlug] = useState("");
const [description, setDescription] = useState("");
const [category, setCategory] = useState("");
const [tags, setTags] = useState("");
const [image, setImage] = useState(null);
const [loading, setLoading] = useState(false);
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
    !description ||
    !category ||
    !tags ||
    !image
  ) {
    return alert("Please fill all fields");
  }

  try {

    setLoading(true);

    const formData = new FormData();

    formData.append("title", title);
    formData.append("slug", slug);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("tags", tags);
    formData.append("image", image);

    const res = await api.post(
      "/admin/addblog",
      formData,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "multipart/form-data",
        },
      }
    );

    alert(res.data.message);

    setTitle("");
    setSlug("");
    setDescription("");
    setCategory("");
    setTags("");
    setImage(null);

  } catch (err) {

    alert(
      err.response?.data?.message ||
      "Something went wrong"
    );

  } finally {

    setLoading(false);

  }

};
    return(
        <div className='bg-background text-on-surface font-body-md overflow-x-hidden'>
           <main className="lg:ml-[280px] min-h-screen p-md lg:p-xl relative">
  {/* Header */}
  <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-lg mb-2xl">
    <div>
      <h2 className="font-headline-lg text-headline-lg text-on-surface">Artisanal Storytelling</h2>
      <p className="text-on-surface-variant">Drafting a new chapter for the HiR Atelier Journal.</p>
    </div>
    <div className="flex items-center gap-md">
      <button className="px-lg py-sm border border-outline-variant text-on-surface hover:bg-surface-container-high transition-all rounded-lg font-medium flex items-center gap-2">
        <span className="material-symbols-outlined text-[20px]">visibility</span>
        Preview
      </button>
   <button
onClick={handleSubmit}
disabled={loading}
className="px-lg py-sm bg-primary text-on-primary hover:opacity-90 transition-all rounded-lg font-bold shadow-md shadow-primary/20 flex items-center gap-2"
>
<span className="material-symbols-outlined">
publish
</span>

{loading ? "Publishing..." : "Publish Post"}

</button>
    </div>
  </header>
  <div className="grid grid-cols-12 gap-gutter">
    {/* Editor Column */}
    <div className="col-span-12 lg:col-span-8 space-y-lg">
      {/* Main Editor Card */}
      <section className="glass-panel rounded-xl p-xl shadow-sm">
        <div className="mb-xl">
         <input
className="w-full bg-transparent border-none p-0 font-display text-4xl lg:text-5xl text-on-surface placeholder:text-outline-variant/60 focus:ring-0"
placeholder="Title of your story..."
type="text"
value={title}
onChange={(e)=>setTitle(e.target.value)}
/>
          <div className="mt-md flex items-center gap-4 text-outline font-label-md uppercase tracking-wider">
            <span>Slug: hir-atelier.com/journal/</span>
           <input
className="bg-surface-container-low px-2 py-0.5 rounded border-none focus:ring-1 focus:ring-primary text-xs w-48"
type="text"
value={slug}
readOnly
/>
          </div>
        </div>
        {/* Editor Toolbar (Mini) */}
        <div className="flex items-center gap-2 mb-lg p-2 bg-surface-container-lowest rounded-lg border border-outline-variant/30">
          <button className="p-2 hover:bg-primary-container/20 rounded transition-colors text-on-surface-variant"><span className="material-symbols-outlined">format_bold</span></button>
          <button className="p-2 hover:bg-primary-container/20 rounded transition-colors text-on-surface-variant"><span className="material-symbols-outlined">format_italic</span></button>
          <button className="p-2 hover:bg-primary-container/20 rounded transition-colors text-on-surface-variant"><span className="material-symbols-outlined">format_quote</span></button>
          <div className="w-px h-6 bg-outline-variant/30 mx-2" />
          <button className="p-2 hover:bg-primary-container/20 rounded transition-colors text-on-surface-variant"><span className="material-symbols-outlined">format_list_bulleted</span></button>
          <button className="p-2 hover:bg-primary-container/20 rounded transition-colors text-on-surface-variant"><span className="material-symbols-outlined">link</span></button>
          <button className="p-2 hover:bg-primary-container/20 rounded transition-colors text-on-surface-variant"><span className="material-symbols-outlined">image</span></button>
        </div>
        <div className="custom-editor min-h-[500px] text-body-lg text-on-surface-variant leading-relaxed focus:outline-none" contentEditable="true">
         <textarea
className="w-full min-h-[500px] p-4 border rounded-lg focus:ring-primary"
placeholder="Write your blog..."
value={description}
onChange={(e)=>setDescription(e.target.value)}
></textarea>
        </div>
      </section>
      {/* Featured Image Upload */}
      <section className="glass-panel rounded-xl p-xl shadow-sm group">
        <input
type="file"
accept="image/*"
onChange={(e)=>{
    setImage(e.target.files[0]);
}}
className="mt-5"
/>
        <h3 className="font-headline-md text-headline-md mb-lg">Visual Anchor</h3>
        <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-surface-container-low border-2 border-dashed border-outline-variant/50 flex flex-col items-center justify-center cursor-pointer hover:border-primary/50 transition-all">
          <div className="absolute inset-0 z-0 opacity-10 bg-center bg-cover scribble-texture" />
          <div className="relative z-10 flex flex-col items-center text-center px-xl">
            <span className="material-symbols-outlined text-5xl text-primary mb-md">add_photo_alternate</span>
            <p className="text-lg font-semibold text-on-surface">Drop the featured image here</p>
            <p className="text-sm text-on-surface-variant mt-sm">Recommended: 2400 x 1350px. JPG or WebP preferred for luxury-grade clarity.</p>
            <button className="mt-lg px-lg py-2 bg-white text-primary border border-primary rounded-full font-bold hover:bg-primary/5 transition-colors">Select from Library</button>
          </div>
        </div>
      </section>
    </div>
    {/* Sidebar Column */}
    <div className="col-span-12 lg:col-span-4 space-y-lg">
      {/* Classification */}
      <section className="glass-panel rounded-xl p-lg shadow-sm">
        <h3 className="font-headline-md text-headline-md mb-lg">Classification</h3>
        <div className="space-y-md">
          <div>
            <label className="block text-label-md text-on-surface-variant mb-sm uppercase">Category</label>
          <select
className="w-full bg-white border-outline-variant rounded-lg p-3"
value={category}
onChange={(e)=>setCategory(e.target.value)}
>
    <option value="">Select Category</option>
    <option>Artistry</option>
    <option>Studio News</option>
    <option>Trends</option>
    <option>Management</option>
</select>
          </div>
          <div>
            <label className="block text-label-md text-on-surface-variant mb-sm uppercase">Tags</label>
            <div className="flex flex-wrap gap-2 p-3 bg-white border border-outline-variant rounded-lg min-h-[80px]">
              <span className="bg-primary-container/20 text-primary px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                Couture <span className="material-symbols-outlined text-[14px] cursor-pointer">close</span>
              </span>
              <span className="bg-primary-container/20 text-primary px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                Craftsmanship <span className="material-symbols-outlined text-[14px] cursor-pointer">close</span>
              </span>
           <input
className="w-full p-3 border rounded-lg"
placeholder="Enter tags separated by comma"
value={tags}
onChange={(e)=>setTags(e.target.value)}
/>
            </div>
          </div>
        </div>
      </section>
    
    </div>
  </div>
</main>

        </div>
    )
}
export default AddBlog
