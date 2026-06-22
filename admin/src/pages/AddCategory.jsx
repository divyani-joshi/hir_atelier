import React from 'react'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../../user/src/utility/AxiosConfig";

function AddCategory() {
  return (
    <div>
      <AddCategoryContent/>
    </div>
  )
}

function AddCategoryContent(){
  const navigate = useNavigate();

const [name, setName] = useState("");
const [slug, setSlug] = useState("");
const [image, setImage] = useState(null);
const [loading, setLoading] = useState(false);
const [preview, setPreview] = useState("");
const handleImageChange = (e) => {
  const file = e.target.files[0];

  if (file) {
    setImage(file);
    setPreview(URL.createObjectURL(file));
  }
};
const handleNameChange = (e) => {
  const value = e.target.value;
  setName(value);

  setSlug(
    value
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
  );
};
const handleSubmit = async () => {
  try {
    setLoading(true);

    const formData = new FormData();

    formData.append("name", name);
    formData.append("slug", slug);
    formData.append("image", image);

   const response = await api.post(
  "/admin/addcategory",
  formData,
  {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "multipart/form-data",
    },
  }
);

    alert(response.data.message);

    navigate("/category");
  } catch (err) {
    alert(err.response?.data?.message || "Something went wrong");
  } finally {
    setLoading(false);
  }
};
    return(
        <div className='bg-background text-on-surface'>
          <main className="lg:ml-[280px] min-h-screen p-gutter pb-2xl">
  {/* Header Section */}
  <header className="mb-xl flex flex-col md:flex-row md:items-center justify-between gap-md">
    <div>
      <nav className="mb-sm">
        <a className="flex items-center text-primary font-label-md text-label-md gap-xs hover:opacity-80 transition-opacity" href="#">
          <span className="material-symbols-outlined text-sm" style={{fontSize: 16}}>arrow_back</span>
          Back to Categories
        </a>
      </nav>
      <h2 className="font-headline-lg text-headline-lg text-on-surface">Add New Category</h2>
    </div>
    <div className="flex items-center gap-md">
      <button className="px-lg py-sm rounded-lg border border-outline-variant text-on-surface-variant font-label-md text-label-md hover:bg-surface-container-low transition-colors">
        Discard
      </button>
     <button
  onClick={handleSubmit}
  disabled={loading}
  className="px-lg py-sm rounded-lg bg-primary-container text-on-primary-container font-label-md text-label-md hover:brightness-95 transition-all active:scale-[0.98] shadow-sm"
>
  {loading ? "Saving..." : "Save Category"}
</button>
    </div>
  </header>
  {/* Bento Layout Grid */}
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
    {/* Category Details Column (Left/Center) */}
    <div className="lg:col-span-7 space-y-gutter">
      {/* Category Details Card */}
      <section className="glass-panel p-xl rounded-xl border border-outline-variant/30 shadow-sm">
        <div className="flex items-center gap-sm mb-lg">
          <span className="material-symbols-outlined text-primary">info</span>
          <h3 className="font-headline-md text-headline-md text-on-surface">Category Details</h3>
        </div>
        <div className="space-y-lg">
          <div className="flex flex-col gap-xs">
            <label className="font-label-md text-label-md text-on-surface-variant" htmlFor="cat-name">Category Name</label>
           <input
  id="cat-name"
  type="text"
  value={name}
  onChange={handleNameChange}
  className="w-full px-md py-sm bg-surface-container-lowest border border-outline-variant rounded-lg focus:ring-1 focus:ring-primary focus:border-primary outline-none"
  placeholder="Category Name"
/>
          </div>
          <div className="flex flex-col gap-xs">
            <label className="font-label-md text-label-md text-on-surface-variant" htmlFor="cat-slug">Category Slug</label>
            <div className="relative">
             <input
  id="cat-slug"
  value={slug}
  readOnly
  className="w-full px-md py-sm bg-surface-container-low/50 border border-outline-variant rounded-lg"
/>
              <span className="absolute right-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-outline/50 text-md">link</span>
            </div>
            <p className="text-[10px] text-outline mt-1 px-1">Auto-generated for SEO optimization.</p>
          </div>
          <div className="flex flex-col gap-xs">
            <label className="font-label-md text-label-md text-on-surface-variant" htmlFor="cat-desc">Category Description</label>
            <textarea className="w-full px-md py-sm bg-surface-container-lowest border border-outline-variant rounded-lg focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-outline/50 font-body-md text-body-md resize-none" id="cat-desc" placeholder="Describe the luxury line and artisanal heritage of this category..." rows={5} defaultValue={""} />
          </div>
        </div>
      </section>
      {/* Operational Settings Card */}
      <section className="glass-panel p-xl rounded-xl border border-outline-variant/30 shadow-sm">
        <div className="flex items-center gap-sm mb-lg">
          <span className="material-symbols-outlined text-primary">settings_applications</span>
          <h3 className="font-headline-md text-headline-md text-on-surface">Operational Settings</h3>
        </div>
        <div className="flex items-center justify-between p-md bg-surface-container-low/30 rounded-lg">
          <div>
            <p className="font-body-lg text-body-lg text-on-surface font-semibold">Active Status</p>
            <p className="font-body-md text-body-md text-on-surface-variant">Set whether this category is visible to customers.</p>
          </div>
          {/* Premium Toggle */}
          <label className="relative inline-flex items-center cursor-pointer">
            <input defaultChecked className="sr-only peer" type="checkbox" defaultValue />
            <div className="w-11 h-6 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary" />
          </label>
        </div>
        <div className="mt-lg grid grid-cols-1 md:grid-cols-2 gap-md">
          <div className="p-md border border-primary/20 rounded-lg bg-primary/5 cursor-pointer flex items-center gap-md">
            <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center">
              <span className="material-symbols-outlined text-on-primary-container" style={{fontVariationSettings: '"FILL" 1'}}>check_circle</span>
            </div>
            <div>
              <p className="font-label-md text-label-md text-primary">ACTIVE</p>
              <p className="text-[10px] text-on-surface-variant">Live on Storefront</p>
            </div>
          </div>
          <div className="p-md border border-outline-variant rounded-lg opacity-50 cursor-pointer flex items-center gap-md hover:bg-surface-container-low transition-colors">
            <div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center">
              <span className="material-symbols-outlined text-on-surface-variant">pause_circle</span>
            </div>
            <div>
              <p className="font-label-md text-label-md text-on-surface-variant">INACTIVE</p>
              <p className="text-[10px] text-on-surface-variant">Hidden / Draft</p>
            </div>
          </div>
        </div>
      </section>
    </div>
    {/* Visual Identity Column (Right) */}
    <div className="lg:col-span-5">
      <section className="glass-panel p-xl rounded-xl border border-outline-variant/30 shadow-sm sticky top-gutter">
        <div className="flex items-center gap-sm mb-lg">
          <span className="material-symbols-outlined text-primary">image</span>
          <h3 className="font-headline-md text-headline-md text-on-surface">Visual Identity</h3>
        </div>
        <div className="mb-lg">
         <div className="aspect-[4/3] w-full bg-surface-container-low rounded-xl border-2 border-dashed border-outline-variant/50 overflow-hidden relative">

  <input
    type="file"
    id="categoryImage"
    accept="image/*"
    hidden
    onChange={handleImageChange}
  />

  <label
    htmlFor="categoryImage"
    className="w-full h-full cursor-pointer flex items-center justify-center"
  >
    {preview ? (
      <img
        src={preview}
        alt="Preview"
        className="w-full h-full object-cover"
      />
    ) : (
      <div className="flex flex-col items-center justify-center text-center">
        <span className="material-symbols-outlined text-5xl text-primary">
          cloud_upload
        </span>

        <p className="mt-3 font-semibold">
          Upload Category Image
        </p>

        <p className="text-sm text-gray-500">
          Click to select an image
        </p>
      </div>
    )}
  </label>

</div>
        </div>
        <div className="space-y-md">
          <h4 className="font-label-md text-label-md text-on-surface-variant uppercase">Style Guidelines</h4>
         
        </div>
        <div className="mt-2xl flex flex-col gap-sm">
          <button className="w-full py-sm bg-surface-container-high rounded-lg text-on-surface font-label-md text-label-md flex items-center justify-center gap-sm hover:bg-surface-container-highest transition-colors">
            <span className="material-symbols-outlined text-sm">edit</span>
            Change Image
          </button>
          <button className="w-full py-sm text-error font-label-md text-label-md hover:bg-error/5 rounded-lg transition-colors">
            Remove Identity Image
          </button>
        </div>
      </section>
    </div>
  </div>
  {/* Mobile Bottom Action Bar (Visible only on small screens) */}
  <div className="fixed bottom-0 left-0 right-0 p-md bg-white border-t border-outline-variant md:hidden flex gap-md">
    <button className="flex-1 py-md rounded-lg border border-outline-variant text-on-surface-variant font-label-md text-label-md">Discard</button>
  <button
  onClick={handleSubmit}
  disabled={loading}
  className="px-lg py-sm rounded-lg bg-primary-container text-on-primary-container font-label-md text-label-md hover:brightness-95 transition-all active:scale-[0.98] shadow-sm"
>
  {loading ? "Saving..." : "Save Category"}
</button>
  </div>
</main>

        </div>
    )
}

export default AddCategory
