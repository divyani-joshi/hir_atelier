import React from 'react'
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div>
      <SidebarContent/>
    </div>
  )
}

function SidebarContent (){
    return(
        <div className='bg-background text-on-surface font-body-md antialiased overflow-x-hidden'>
            <aside className="fixed left-0 top-0 h-full w-[280px] bg-surface/80 dark:bg-inverse-surface/80 backdrop-blur-xl border-r border-outline-variant/30 hidden lg:flex flex-col py-lg px-md z-50">
  <div className="flex flex-col gap-sm mb-xl">
    <h1 className="font-display-lg text-display-lg font-bold text-primary">HiR Atelier</h1>
  </div>
  <nav className="flex-1 space-y-1">
    {/* Active State determined by page intent: Dashboard/Overview */}
    <Link className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high/50 transition-colors rounded-lg" to="/">
      <span className="material-symbols-outlined">dashboard</span>
      <span className="font-headline-md text-body-md">Overview</span>
    </Link>
    <Link className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high/50 transition-colors rounded-lg" to="/category">
      <span className="material-symbols-outlined">category</span>
      <span>Categories</span>
    </Link>
   
    <Link className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high/50 transition-colors rounded-lg" to="/service">
      <span className="material-symbols-outlined">design_services</span>
      <span>Services</span>
    </Link>
    <Link className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high/50 transition-colors rounded-lg" to="/blog">
      <span className="material-symbols-outlined">edit_note</span>
      <span>Blogs</span>
    </Link>
    <Link className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high/50 transition-colors rounded-lg" to="/booking">
      <span className="material-symbols-outlined">event_available</span>
      <span>Bookings</span>
    </Link>
   
    <Link className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high/50 transition-colors rounded-lg" to="/user">
      <span className="material-symbols-outlined">group</span>
      <span>Users</span>
    </Link>
  </nav>
  <div className="mt-auto border-t border-outline-variant/30 pt-md space-y-1">
    <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high/50 transition-colors rounded-lg" href="#">
      <span className="material-symbols-outlined">settings</span>
      <span>Settings</span>
    </a>
    <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high/50 transition-colors rounded-lg" href="#">
      <span className="material-symbols-outlined">contact_support</span>
      <span>Support</span>
    </a>
  </div>
</aside>

        </div>
    )
}

export default Sidebar
