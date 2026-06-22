import React from 'react'

function Navbar() {
  return (
    <div>
      <NavbarContent/>
    </div>
  )
}

function NavbarContent(){
    return(
        <>
        <div className='bg-background text-on-surface font-body-md antialiased overflow-x-hidden'>
            <div className='lg:ml-[280px] min-h-screen flex flex-col'>

           <header className="sticky top-0 z-40 w-full bg-surface/80 backdrop-blur-xl border-b border-outline-variant/30 h-20 flex items-center px-gutter justify-between">
  <div className="flex items-center gap-lg">
    <span className="font-headline-lg text-headline-lg font-bold text-primary hidden md:block">Dashboard</span>
    <div className="relative w-72">
      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
      <input className="w-full bg-surface-container-low border-none rounded-full pl-10 pr-4 py-2 focus:ring-1 focus:ring-primary text-body-md" placeholder="Search analytics..." type="text" />
    </div>
  </div>
  <div className="flex items-center gap-md">
    <button className="p-2 rounded-full hover:bg-surface-container-high transition-colors">
      <span className="material-symbols-outlined">notifications</span>
    </button>
    <button className="p-2 rounded-full hover:bg-surface-container-high transition-colors">
      <span className="material-symbols-outlined">contrast</span>
    </button>
    <div className="h-8 w-[1px] bg-outline-variant mx-2" />
    <div className="flex items-center gap-3">
      <div className="text-right hidden sm:block">
        <p className="font-headline-md text-body-md text-on-surface leading-none">Admin Profile</p>
        <p className="font-label-md text-label-md text-on-surface-variant">Super Admin</p>
      </div>
      <img alt="Administrator Avatar" className="w-10 h-10 rounded-full object-cover border border-primary-container" data-alt="A professional headshot of a mature executive man in a tailored dark navy suit, set against a clean, softly lit minimalist studio background. The lighting is high-key and flattering, emphasizing a crisp, modern professional aesthetic that aligns with a luxury brand identity. The mood is confident and authoritative yet approachable." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIP1eW1jyVkMQ57qnuNJdbIedeZFxit6uWJ-lSyHZa_bY07j7LiKQPqqxqNBRaEPRtvrxoQCITDHBx49v1yZeQ9jiVxv9yD-bl7GvpZEMEKNKNWTW697PX18xk7MM3y6O8c02v8VxPir7Sik2c_Jos_6P6UE_RcLmkL6MslsM5KvCtUAX0aZa2Z1KjQtJcBaEIPPcCe-bCwK-RS9ZTCXJpmhM0Iv87Gh7BZ6NH4V55GzY8iYE797HJQqHzrJnjT3rEKS-B-2tJBGs" />
    </div>
  </div>
</header>
</div>
</div>
        </>
    )
}

export default Navbar
