import React from 'react'
import api from '../utility/AxiosConfig';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

function Signup() {
  return (
    <div>
      <SignupContent/>
    </div>
  )
}

function SignupContent (){
  let [user, setUser] = useState({
  name: "",
  email: "",
  password: "",
  mobile_no: "",
  city: ""
});
let navigate = useNavigate();

let handleChange = (e) => {
  setUser({
    ...user,
    [e.target.name]: e.target.value,
  });
};

const handleSignup = async (e) => {
  e.preventDefault();

  try {
    const response = await api.post(
      "/user/signup",
      user
    );

    alert(response.data.message);

    setUser({
      name: "",
      email: "",
      password: "",
      mobile_no: "",
      city: ""
    });
    navigate("/login");

  } catch (err) {
    console.log(err);

    alert(
      err.response?.data?.message ||
      "Signup Failed"
    );
  }
};
    return(
        <>
           {/* Top Navigation (Conditional based on Shell Rule) - Hidden for Transactional Sign-up focus */}
<main className="min-h-screen flex items-center justify-center bg-surface px-4 py-10">
  <div className="w-full max-w-[450px]">

    {/* Brand */}
    <div className="mb-5 flex justify-center">
      <h1 className="text-3xl font-bold text-primary">
        HiR Atelier
      </h1>
    </div>

    {/* Signup Card */}
    <div className="glass-panel border border-outline-variant/30 rounded-xl shadow-lg p-8">

      {/* Header */}
      <header className="text-center mb-8">
        <h2 className="text-2xl font-semibold text-on-surface">
          Create Account
        </h2>

        <div className="flex items-center justify-center gap-2 mt-2 text-on-surface-variant">
          <span className="material-symbols-outlined text-lg">
            person_add
          </span>
          <span className="uppercase tracking-widest text-xs">
            Join HiR Atelier
          </span>
        </div>
      </header>

      <form onSubmit={handleSignup} className="space-y-5">

        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="block mb-2 text-sm text-on-surface-variant uppercase tracking-wider"
          >
            Full Name
          </label>

          <input
            id="name"
            name="name"
            type="text"
            required
            value={user.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            className="w-full px-4 py-3 bg-surface-container-low border border-outline-variant rounded-lg focus:outline-none focus:border-primary"
          />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm text-on-surface-variant uppercase tracking-wider"
          >
            Email Address
          </label>

          <input
            id="email"
            name="email"
            type="email"
            required
            value={user.email}
            onChange={handleChange}
            placeholder="name@example.com"
            className="w-full px-4 py-3 bg-surface-container-low border border-outline-variant rounded-lg focus:outline-none focus:border-primary"
          />
        </div>

        {/* Password */}
        <div>
          <label
            htmlFor="password"
            className="block mb-2 text-sm text-on-surface-variant uppercase tracking-wider"
          >
            Password
          </label>

          <div className="relative">
            <input
              id="password"
              name="password"
              type="password"
              required
              value={user.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full px-4 py-3 bg-surface-container-low border border-outline-variant rounded-lg focus:outline-none focus:border-primary"
            />

            <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant"
            >
              <span className="material-symbols-outlined">
                visibility
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Number */}
        <div>
          <label
            htmlFor="mobile_no"
            className="block mb-2 text-sm text-on-surface-variant uppercase tracking-wider"
          >
            Mobile Number
          </label>

          <input
            id="mobile_no"
            name="mobile_no"
            type="tel"
            required
            value={user.mobile_no}
            onChange={handleChange}
            placeholder="+91 XXXXX XXXXX"
            className="w-full px-4 py-3 bg-surface-container-low border border-outline-variant rounded-lg focus:outline-none focus:border-primary"
          />
        </div>

        {/* City */}
        <div>
          <label
            htmlFor="city"
            className="block mb-2 text-sm text-on-surface-variant uppercase tracking-wider"
          >
            City
          </label>

          <input
            id="city"
            name="city"
            type="text"
            required
            value={user.city}
            onChange={handleChange}
            placeholder="Ahmedabad"
            className="w-full px-4 py-3 bg-surface-container-low border border-outline-variant rounded-lg focus:outline-none focus:border-primary"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-4 bg-primary-container text-on-primary-container rounded-lg uppercase tracking-widest font-semibold transition hover:opacity-90"
        >
          Create Account
        </button>
      </form>

      {/* Footer */}
      <footer className="mt-8 text-center">
        <p className="text-sm text-on-surface-variant">
          Already have an account?{" "}
          <button
            type="button"
            onClick={() => navigate("/login")}
            className="text-primary font-semibold hover:underline"
          >
            Sign In
          </button>
        </p>
      </footer>
    </div>

    {/* Bottom Text */}
    <p className="mt-6 text-center text-xs uppercase tracking-[0.2em] text-outline opacity-50">
      © 2026 HiR Atelier. Precision in design.
    </p>

  </div>
</main>

        </>
    )
}

export default Signup
