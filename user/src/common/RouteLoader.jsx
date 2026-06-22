import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function RouteLoader({ children }) {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 900);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  if (loading) {
    return (
      <div className="fixed inset-0 z-[9999] bg-[#FDFBF8] flex flex-col items-center justify-center">
        
        {/* Logo / Brand */}
        <h1 className="text-5xl md:text-6xl italic text-[#A38F7A] mb-6">
          HiR Atelier
        </h1>

        {/* Luxury Loading Line */}
        <div className="w-64 h-[2px] bg-[#E5DDD3] overflow-hidden rounded-full">
          <div className="h-full w-1/3 bg-[#A38F7A] animate-[loading_1.5s_ease-in-out_infinite]" />
        </div>

        <p className="mt-6 text-[#8B7A68] tracking-[0.3em] uppercase text-xs">
          Crafting Elegance...
        </p>

        <style>
          {`
            @keyframes loading {
              0% {
                transform: translateX(-100%);
              }
              100% {
                transform: translateX(350%);
              }
            }
          `}
        </style>
      </div>
    );
  }

  return children;
}

export default RouteLoader;