import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div>
    <div>
  <footer className="bg-surface-container-low w-full py-stack-md">
    <div className="flex flex-col md:flex-row justify-between items-center px-margin-mobile md:px-margin-desktop w-full max-w-container-max mx-auto gap-gutter">
      <div className="flex flex-col items-center md:items-start gap-2">
        <div className="font-headline-md text-headline-md text-primary">HiR Atelier</div>
        <p className="font-body-md text-body-md text-on-surface-variant">© 2026 HiR Atelier. All rights reserved. Developed by Divyani Joshi </p>
      </div>
      <div className="flex gap-8">
        <a className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors" href="#">Privacy Policy</a>
        <a className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors" href="#">Terms of Service</a>
        <a className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors" href="#">Press</a>
        <a className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors" href="#">Contact</a>
      </div>
      <div className="flex gap-4">
        <button className="w-10 h-10 flex items-center justify-center rounded-full border border-outline-variant hover:bg-primary-container hover:border-primary-container transition-all">
          <span className="material-symbols-outlined text-[18px]">public</span>
        </button>
        <button className="w-10 h-10 flex items-center justify-center rounded-full border border-outline-variant hover:bg-primary-container hover:border-primary-container transition-all">
          <span className="material-symbols-outlined text-[18px]">share</span>
        </button>
      </div>
    </div>
  </footer>
  <nav className="md:hidden fixed bottom-0 left-0 w-full bg-white/80 backdrop-blur-lg border-t border-white/20 z-50 flex justify-around items-center py-4 px-6">
    <Link className="flex flex-col items-center gap-1 text-on-surface-variant" to="/">
      <span className="material-symbols-outlined">home</span>
      <span className="text-[10px] font-label-caps">Home</span>
    </Link>
    <Link className="flex flex-col items-center gap-1 text-on-surface-variant" to="/service">
      <span className="material-symbols-outlined">auto_awesome</span>
      <span className="text-[10px] font-label-caps">Services</span>
    </Link>
    <Link className="flex flex-col items-center gap-1 text-primary" to="/collection">
      <span className="material-symbols-outlined" style={{fontVariationSettings: '"FILL" 1'}}>gallery_thumbnail</span>
      <span className="text-[10px] font-label-caps">Collection</span>
    </Link>
    <Link className="flex flex-col items-center gap-1 text-on-surface-variant" to="/contact">
      <span className="material-symbols-outlined">contact_page</span>
      <span className="text-[10px] font-label-caps">Contact</span>
    </Link>
    <Link to="/blog" className="flex flex-col items-center gap-1 text-on-surface-variant">
  <span className="material-symbols-outlined">article</span>
  <span className="text-[10px]">Blog</span>
</Link>

<Link to="/profile" className="flex flex-col items-center gap-1 text-on-surface-variant">
  <span className="material-symbols-outlined">person</span>
  <span className="text-[10px]">Profile</span>
</Link>
  </nav>
</div>

    </div>
  )
}


export default Footer
