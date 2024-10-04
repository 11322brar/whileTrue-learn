import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import loginImage from "../assets/loginImage.jpg";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import googleLogo from "../assets/googleLogo.svg";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const Login = ({ isLoggedIn, setIsLoggedIn }) => {
  // State to manage password visibility
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  // Function to toggle password visibility
  function togglePasswordVisibility() {
    setPasswordVisibility((previousState) => !previousState);
  }

  // State to hold login data
  const [loginData, setLoginData] = useState({ email: "", password: "" });

  // Function to handle input changes
  function handleChange(event) {
    let { name, type, value } = event.target;
    // Update loginData state with the current input value
    setLoginData((previousData) => ({ ...previousData, [name]: value }));
    console.log("loginData:", loginData); // Log the current login data
  }
  const navigate = useNavigate();

  function handleLogin(event) {
    event.preventDefault();
    setIsLoggedIn(true);
    navigate("/welcome");
    toast.success("Welcome back! Ready to code?", {
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });
  }
  return (
    <div className="mt-6 flex justify-between gap-16">
      {/* left container */}
      <section className="w-1/2">
        <h1 className="mb-4 text-4xl font-bold">Welcome Back</h1>
        <p className="text-lg text-gray-300">
          Build skills for today, tomorrow, and beyond.
        </p>
        <p className="text-blue-400">Education to future-proof your career.</p>

        <form className="my-4" onSubmit={handleLogin}>
          {/* Email input field */}
          <label className="mb-1 block" htmlFor="email">
            Email Address <sup className="text-red-500">*</sup>
          </label>
          <input
            required
            type="text"
            name="email"
            id="email"
            placeholder="Enter email address"
            className="mb-2 w-5/6 rounded-md bg-secondaryColor p-2"
            onChange={handleChange} // Call handleChange on input change
          />

          {/* Password input field */}
          <label htmlFor="password" className="mb-1 block">
            Password<sup className="text-red-500">*</sup>
          </label>

          <div className="flex flex-col">
            {/* Password input and eye icon for visibility toggle */}
            <div className="flex items-center">
              <input
                required
                type={passwordVisibility ? "text" : "password"} // Toggle input type based on passwordVisibility state
                name="password"
                id="password"
                placeholder="Enter password"
                className="mb-1 w-5/6 rounded-md bg-secondaryColor p-2"
                onChange={handleChange} // Call handleChange on input change
              />
              {passwordVisibility ? (
                <BsEye // Show eye icon if password is visible
                  className="relative right-8"
                  onClick={togglePasswordVisibility} // Toggle visibility on click
                />
              ) : (
                <BsEyeSlash // Show eye slash icon if password is hidden
                  className="relative right-8"
                  onClick={togglePasswordVisibility} // Toggle visibility on click
                />
              )}
            </div>
            <div className="flex w-5/6 justify-end">
              <Link className="text-sm text-blue-400">Forgot Password</Link>{" "}
              {/* Link to forgot password page */}
            </div>
          </div>

          <button className="mt-6 w-5/6 rounded-lg bg-[#ffd60a] p-2 text-slate-950">
            Sign in {/* Sign in button */}
          </button>

          <div className="my-4 flex w-5/6 items-center">
            <hr className="flex-grow border-gray-500"></hr>
            <span className="mx-2 text-sm text-gray-500">OR</span>{" "}
            {/* Divider for alternative sign-in option */}
            <hr className="flex-grow border-gray-500"></hr>
          </div>

          <button className="w-5/6 rounded-lg border border-slate-700 bg-transparent p-2">
            <div className="flex justify-center gap-2">
              <img src={googleLogo} className="w-[5%]" alt="logo of google" />{" "}
              {/* Google logo */}
              <span>Sign in with Google</span>{" "}
              {/* Alternative sign-in button */}
            </div>
          </button>
        </form>
      </section>

      {/* right container */}
      <section className="flex w-1/2 justify-end">
        <img
          loading="lazy"
          src={loginImage}
          className="h-[26rem] w-[26rem] object-cover"
          alt="Login image" // Alt text for the login image
        />
      </section>
    </div>
  );
};

export default Login; // Export the Login component
