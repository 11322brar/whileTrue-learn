import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
const NavBar = ({ isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate();

  function handleLogout() {
    navigate("/");
    setIsLoggedIn(false);
    toast.success("You’ve successfully logged out. Happy coding!", {
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });
  }

  return (
    // Navigation bar container
    <div className="flex justify-between bg-[#000814] p-2">
      {/* Logo */}
      <div>
        <img src="" alt="" />
      </div>

      {/* //Pages */}
      <div className="m-2">
        <ul className="flex gap-8">
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/about"}>About</NavLink>
          </li>
          <li>
            <NavLink to={"/contact"}>Contact</NavLink>
          </li>
        </ul>
      </div>

      {/* //buttons */}
      <div className="flex gap-4">
        {isLoggedIn ? (
          <button
            className="rounded-md bg-secondaryColor px-6 py-3"
            onClick={() => navigate("/dashboard")}
          >
            Dashboard
          </button>
        ) : (
          <button
            className="rounded-md bg-secondaryColor px-6 py-3"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        )}
        {isLoggedIn ? (
          <button
            className="rounded-md bg-secondaryColor px-6 py-3"
            onClick={handleLogout}
          >
            Logout
          </button>
        ) : (
          <button
            className="rounded-md bg-secondaryColor px-6 py-3"
            onClick={() => navigate("/signup")}
          >
            Signup
          </button>
        )}
      </div>
    </div>
  );
};

export default NavBar;
