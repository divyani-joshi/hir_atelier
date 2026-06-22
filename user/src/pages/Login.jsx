import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import api from '../utility/AxiosConfig';

function Login() {
  return (
    <div>
      <LoginContent/>
    </div>
  )
}

function LoginContent (){
  let [loginData, setLoginData] = useState({
  email: "",
  password: "",
});
let handleChange = (e) => {
  setLoginData({
    ...loginData,
    [e.target.name]: e.target.value,
  });
};
let navigate = useNavigate();
console.log(loginData);

let handleLogin = async (e) => {
  e.preventDefault();

  try {
    const response = await api.post("/user/login", loginData);

    localStorage.setItem("token", response.data.token);

    alert(response.data.message);
   
    navigate("/");

  } catch (err) {
    console.log(err);

    alert(
      err.response?.data?.message ||
      "Login Failed"
    );
  }
};
    return(
        <>
           {/* Main Viewport Split */}
<main className="min-h-screen flex items-center justify-center bg-surface px-4">
  <div className="w-full max-w-[400px]">

    {/* Brand */}
    <div className="mb-5 flex justify-center">
      <h1 className="text-3xl font-bold text-primary">
        HiR Atelier
      </h1>
    </div>

    {/* Login Card */}
    <div className="glass-panel border border-outline-variant/30 rounded-xl shadow-lg p-8">

      {/* Header */}
      <header className="text-center mb-8">
        <h2 className="text-2xl font-semibold text-on-surface">
          Welcome Back
        </h2>

        <div className="flex items-center justify-center gap-2 mt-2 text-on-surface-variant">
          <span className="material-symbols-outlined text-lg">
            person
          </span>
          <span className="uppercase tracking-widest text-xs">
            User Login
          </span>
        </div>
      </header>

      {/* Form */}
      <form onSubmit={handleLogin} className="space-y-5">

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
            value={loginData.email}
            onChange={handleChange}
            placeholder="name@company.com"
            className="w-full px-4 py-3 bg-surface-container-low border border-outline-variant rounded-lg focus:outline-none focus:border-primary"
          />
        </div>

        {/* Password */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <label
              htmlFor="password"
              className="text-sm text-on-surface-variant uppercase tracking-wider"
            >
              Password
            </label>

            <a
              href="#"
              className="text-xs text-primary hover:underline"
            >
              Forgot password?
            </a>
          </div>

          <div className="relative">
            <input
              id="password"
              name="password"
              type="password"
              required
              value={loginData.password}
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

        {/* Submit */}
        <button
          type="submit"
          className="w-full py-4 bg-primary-container text-on-primary-container rounded-lg uppercase tracking-widest font-semibold transition hover:opacity-90"
        >
          Sign In
        </button>
      </form>

      {/* Footer */}
      <footer className="mt-8 text-center">
        <p className="text-sm text-on-surface-variant">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-primary font-semibold hover:underline"
          >
            Create one
          </Link>
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

export default Login
