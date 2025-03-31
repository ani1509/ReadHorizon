import React from "react";
import { useAuth } from "../context/AuthProvider";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Logout() {
  const [authUser, setAuthUser] = useAuth();
  
    const location = useLocation(); // to get the location of the page
    const navigate = useNavigate();  // to navigate to the page
  
    const from = location.state?.from?.pathname || "/";
  const handleLogout = () => {
    try {
      setAuthUser({  // we changed the state of the user to null
        ...authUser,
        user: null,
      });
      localStorage.removeItem("Users"); // remove the user from local storage which was in our context
      toast.success("Logout successfully");
      navigate(from, { replace: true });

      setTimeout(() => {
        window.location.reload(); // after logged out we reload the page to reflect the changes
      }, 1200);
    } catch (error) {
      toast.error("Error: " + error);
      setTimeout(() => {}, 2000);
    }
  };
  return (
    <div>
      <button
        className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}

export default Logout;
