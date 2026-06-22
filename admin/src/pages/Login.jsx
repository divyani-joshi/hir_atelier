import React, { useState } from 'react'
import api from '../../../user/src/utility/AxiosConfig';
import { useNavigate } from "react-router-dom";

function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <LoginContent />
    </div>
  )
}

function LoginContent(){

     const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

 
const handleLogin = async (e) => {
  e.preventDefault();

  setError("");
  setLoading(true);

  try {
    const res = await api.post("/admin/login", {
      email,
      password,
    });

    // Show complete response
    console.log("Response:", res.data);

    // Show token
    console.log("Generated Token:", res.data.token);

    // Save token
    localStorage.setItem("token", res.data.token);

    // Verify token is saved
    console.log(
      "Saved Token:",
      localStorage.getItem("token")
    );

    window.location.href = "/";
  } catch (err) {
    console.log("Error:", err);
    console.log("Error Response:", err.response);
    console.log("Error Data:", err.response?.data);

    setError(err.response?.data?.message || "Login Failed");
  } finally {
    setLoading(false);
  }
};



    return(
        <>
         {/* Auth Container */}
<main className="w-full max-w-[400px] px-margin-mobile">
  {/* Brand Identifier (Subtle) */}
  <div className="mb-5 flex justify-center mb-stack-lg">
    <h1 className="font-headline-lg text-headline-lg tracking-tight text-primary font-bold">
      HiR Atelier
    </h1>
  </div>
  {/* Center Card */}
  <div className="glass-surface border border-outline-variant/30 rounded-xl ambient-shadow p-stack-lg md:p-10">
    {/* Header Section */}
    <header className="text-center mb-stack-lg">
      <h2 className="font-headline-lg text-headline-lg text-on-surface mb-2">Welcome Back</h2>
      <div className="flex items-center justify-center gap-1.5 text-on-surface-variant" id="role-indicator">
        <span className="material-symbols-outlined text-[18px]">person</span>
        <span className="font-label-caps text-label-caps uppercase tracking-widest" id="active-role-text">Admin Login</span>
      </div>
    </header>
   
    {/* Login Form */}
    <form action="#" className="space-y-stack-md" onSubmit={handleLogin}>
      {/* Email Field */}
      <div>
        <label className="mt-5 block font-label-caps text-label-caps text-on-surface-variant mb-1.5 ml-1" htmlFor="email">Email Address</label>
       <input
  className="w-full px-4 py-3 bg-surface-container-lowest border border-outline-variant rounded-lg font-body-sm text-body-sm transition-all duration-200 focus:border-primary-container focus:ring-0"
  id="email"
  name="email"
  placeholder="name@company.com"
  type="email"
  required
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>
      </div>
      {/* Password Field */}
      <div>
        <div className="mt-5 flex justify-between items-center mb-1.5 px-1">
          <label className="block font-label-caps text-label-caps text-on-surface-variant" htmlFor="password">Password</label>
          <a className="font-label-caps text-[11px] text-on-surface-variant hover:text-primary transition-colors" href="#">Forgot password?</a>
        </div>
        <div className="relative">
         <input
  className="w-full px-4 py-3 bg-surface-container-lowest border border-outline-variant rounded-lg font-body-sm text-body-sm transition-all duration-200 focus:border-primary-container focus:ring-0"
  id="password"
  name="password"
  placeholder="••••••••"
  type="password"
  required
  value={password}
  onChange={(e) => setPassword(e.target.value)}
/>
          <button className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant/50 hover:text-on-surface-variant" type="button">
            <span className="material-symbols-outlined text-[20px]">visibility</span>
          </button>
        </div>
      </div>
      {error && (
  <p className="text-red-500 text-sm text-center">
    {error}
  </p>
)}
      {/* Submit Button */}
      <div className="mt-10 pt-stack-sm">
       <button
  className="w-full bg-primary-container text-on-primary-container font-label-caps text-label-caps py-4 rounded-lg transition-all duration-300 hover:bg-primary hover:shadow-lg hover:scale-[1.01] active:scale-[0.99] uppercase tracking-widest"
  type="submit"
  disabled={loading}
>
  {loading ? "Signing In..." : "Sign In"}
</button>
      </div>
    </form>
    {/* Footer Link */}
    <footer className="mt-stack-lg text-center">
      <p className="font-body-sm text-body-sm text-on-surface-variant">
        Don't have an account? 
        <a className="text-primary font-semibold hover:underline decoration-primary/30 underline-offset-4" href="#">Create one</a>
      </p>
    </footer>
  </div>
  {/* Decorative Subtle Accent */}
  <p className="mt-stack-lg text-center font-label-caps text-[10px] text-outline tracking-[0.2em] uppercase opacity-50">
    © 2024 HiR Atelier. Precision in design.
  </p>
</main>

        </>
    )
}

export default Login
