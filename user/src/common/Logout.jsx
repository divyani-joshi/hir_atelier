import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();
  const [message, setMessage] = useState("Logging out...");

  useEffect(() => {
    localStorage.removeItem("token");
    setMessage("Logout Successful!");

    // Redirect after 2 seconds
    setTimeout(() => {
      navigate("/login");
    }, 2000);
  }, [navigate]);

}

export default Logout;