import React from 'react'
import { Link } from 'react-router-dom'
const token = localStorage.getItem("token");

console.log("HEADER TOKEN:", token);

function Hedaer() {
  return (
    <div>
      <HedaerContent/>
    </div>
  )
}

function HedaerContent (){
  const token = localStorage.getItem("token");
    return(
        <>
            <header className="bg-white/40 dark:bg-black/40 backdrop-blur-[20px] docked full-width top-0 sticky z-50 border-b-[0.5pt] border-white/20 shadow-[0_10px_30px_0_rgba(43,43,43,0.05)]">
  <nav className="flex justify-between items-center w-full px-4 md:px-margin-desktop py-4 max-w-container-max mx-auto">

  {/* Logo */}
  <div className="font-headline-md text-headline-md text-primary dark:text-primary-fixed-dim tracking-tighter">
    HiR Atelier
  </div>

  {/* Center Navigation */}
  <div className="hidden md:flex items-center gap-10 lg:gap-12 mx-auto">

    <Link className="font-label-caps text-label-caps text-on-surface-variant dark:text-on-tertiary-container border-primary dark:border-primary-fixed-dim nav-underline relative" to="/">
      Home
    </Link>

    <Link className="font-label-caps text-label-caps text-on-surface-variant dark:text-on-tertiary-container hover:text-primary transition-colors duration-300 nav-underline relative" to="/service">
      Services
    </Link>

    <Link className="font-label-caps text-label-caps text-on-surface-variant dark:text-on-tertiary-container border-primary dark:border-primary-fixed-dim nav-underline relative" to="/collection">
      Gallery
    </Link>

    <Link className="font-label-caps text-label-caps text-on-surface-variant dark:text-on-tertiary-container hover:text-primary transition-colors duration-300 nav-underline relative" to="/blog">
      Blog
    </Link>

    <Link className="font-label-caps text-label-caps text-on-surface-variant dark:text-on-tertiary-container hover:text-primary transition-colors duration-300 nav-underline relative" to="/contact">
      Contact us
    </Link>

    {token && (
      <Link
        className="font-label-caps text-label-caps text-on-surface-variant dark:text-on-tertiary-container hover:text-primary transition-colors duration-300 nav-underline relative"
        to="/profile"
      >
        Profile
      </Link>
    )}
  </div>

  {/* Right Side */}
  <div>
    {token ? (
      <button
  onClick={()=>{
    localStorage.removeItem("token");
    window.location.href="/login";
  }}
  className="
  bg-primary-container
  text-on-primary-container
  px-6 py-3
  rounded-full
  font-label-caps
  text-label-caps
  hover:scale-[1.02]
  transition-transform
  duration-200
  active:opacity-80
  "
>
  Logout
</button>
    ) : (
      <Link
        className="bg-primary-container text-on-primary-container px-6 py-3 rounded-full font-label-caps text-label-caps hover:scale-[1.02] transition-transform duration-200 active:opacity-80"
        to="/login"
      >
        Sign Up
      </Link>
    )}
  </div>

</nav>
</header>

        </>
    )
}

export default Hedaer
