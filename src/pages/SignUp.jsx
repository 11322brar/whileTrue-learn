import React, { useState } from "react";
import { Link } from "react-router-dom";
import signupImage from "../assets/signupImage.jpg";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import googleLogo from "../assets/googleLogo.svg";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
const SignUp = ({ isLoggedIn, setIsLoggedIn }) => {
  // State to manage visibility of new password
  const [newPasswordVisibility, setNewPasswordVisibility] = useState(false);
  // State to manage visibility of confirm password
  const [confirmPasswordVisibility, setConfirmPasswordVisibility] =
    useState(false);

  // Toggle function for new password visibility
  function toggleNewPasswordVisibility() {
    newPasswordVisibility
      ? setNewPasswordVisibility(false)
      : setNewPasswordVisibility(true);
  }

  // Toggle function for confirm password visibility
  function toggleConfirmPasswordVisibility() {
    confirmPasswordVisibility
      ? setConfirmPasswordVisibility(false)
      : setConfirmPasswordVisibility(true);
  }

  // State to hold signup form data
  const [signupData, setSignupData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    newPassword: "",
    confirmPassword: "",
  });

  // Handle change in input fields
  function handleChange(event) {
    let { name, value } = event.target;
    // Update state with new input values
    setSignupData((previousData) => ({ ...previousData, [name]: value }));
    console.log("signupData:", signupData); // Log the current signup data
  }

  const navigate = useNavigate();

  function handleSignup(event) {
    event.preventDefault();

if(signupData.newPassword===signupData.confirmPassword)
 {   setIsLoggedIn(true);
    navigate("/welcome");
    toast.success("Welcome! You’ve successfully signed up.", {
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });
  }
  else{
    toast.error("Passwords do not match. Please try again.", {
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });
  }
}

  return (
    <div className="mt-6 flex h-screen w-full justify-between">
      {/* LEFT CONTAINER */}
      <section className="w-1/2">
        <h1 className="mb-4 text-balance text-3xl font-bold">
          Start the loop of learning with while(true) learn – join for free
          today!
        </h1>
        <p className="text-lg text-gray-300">
          Master essential skills for a brighter future.
        </p>
        <p className="text-blue-400">
          Join a community dedicated to empowering your career.
        </p>

        {/* FORM */}
        <form className="my-4" onSubmit={handleSignup}>
          {/* NAME SECTION */}
          <section className="mb-4 flex w-5/6 gap-4">
            {/* FIRST NAME FIELD */}
            <div className="flex flex-1 flex-col">
              <label className="mb-2 block" htmlFor="firstName">
                First Name <sup className="text-red-500">*</sup>
              </label>
              <input
                required
                type="text"
                name="firstName"
                id="firstName"
                placeholder="Enter first name"
                className="w-full rounded-md bg-secondaryColor p-2"
                onChange={handleChange} // Handle input change
              />
            </div>
            {/* LAST NAME FIELD */}
            <div className="flex flex-1 flex-col">
              <label className="mb-2 block" htmlFor="lastName">
                Last Name <sup className="text-red-500">*</sup>
              </label>
              <input
                required
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Enter last name"
                className="w-full rounded-md bg-secondaryColor p-2"
                onChange={handleChange} // Handle input change
              />
            </div>
          </section>

          {/* EMAIL ADDRESS FIELD */}
          <label className="mb-2 block" htmlFor="email">
            Email Address <sup className="text-red-500">*</sup>
          </label>
          <input
            required
            type="text"
            name="email"
            id="email"
            placeholder="Enter email address"
            className="mb-4 w-5/6 rounded-md bg-secondaryColor p-2"
            onChange={handleChange} // Handle input change
          />

          {/* PASSWORD SECTION */}
          <section className="flex w-5/6 gap-4">
            {/* NEW PASSWORD FIELD */}
            <div className="flex flex-1 flex-col">
              <label htmlFor="newPassword" className="mb-2 block">
                Create Password <sup className="text-red-500">*</sup>
              </label>
              <div className="relative">
                <input
                  required
                  type={newPasswordVisibility ? "text" : "password"}
                  name="newPassword"
                  id="newPassword"
                  placeholder="Enter password"
                  className="w-full rounded-md bg-secondaryColor p-2"
                  onChange={handleChange} // Handle input change
                />
                {/* Toggle visibility icon for new password */}
                {newPasswordVisibility ? (
                  <BsEye
                    className="absolute right-2 top-1/2 -translate-y-1/2 transform cursor-pointer"
                    onClick={toggleNewPasswordVisibility} // Toggle password visibility
                  />
                ) : (
                  <BsEyeSlash
                    className="absolute right-2 top-1/2 -translate-y-1/2 transform cursor-pointer"
                    onClick={toggleNewPasswordVisibility} // Toggle password visibility
                  />
                )}
              </div>
            </div>

            {/* CONFIRM PASSWORD FIELD */}
            <div className="flex flex-1 flex-col">
              <label htmlFor="confirmPassword" className="mb-2 block">
                Confirm Password <sup className="text-red-500">*</sup>
              </label>
              <div className="relative">
                <input
                  required
                  type={confirmPasswordVisibility ? "text" : "password"}
                  name="confirmPassword"
                  id="confirmPassword"
                  placeholder="Re-enter password"
                  className="w-full rounded-md bg-secondaryColor p-2"
                  onChange={handleChange} // Handle input change
                />
                {/* Toggle visibility icon for confirm password */}
                {confirmPasswordVisibility ? (
                  <BsEye
                    className="absolute right-2 top-1/2 -translate-y-1/2 transform cursor-pointer"
                    onClick={toggleConfirmPasswordVisibility} // Toggle password visibility
                  />
                ) : (
                  <BsEyeSlash
                    className="absolute right-2 top-1/2 -translate-y-1/2 transform cursor-pointer"
                    onClick={toggleConfirmPasswordVisibility} // Toggle password visibility
                  />
                )}
              </div>
            </div>
          </section>

          {/* CREATE ACCOUNT BUTTON */}
          <button className="mt-6 w-5/6 rounded-lg bg-[#ffd60a] p-2 text-slate-950">
            Create Account
          </button>

          {/* OR SEPARATOR */}
          <div className="my-4 flex w-5/6 items-center">
            <hr className="flex-grow border-gray-500"></hr>
            <span className="mx-2 text-sm text-gray-500">OR</span>
            <hr className="flex-grow border-gray-500"></hr>
          </div>

          {/* GOOGLE SIGN IN BUTTON */}
          <button className="w-5/6 rounded-lg border border-slate-700 bg-transparent p-2">
            <div className="flex justify-center gap-2">
              <img src={googleLogo} className="w-[5%]" alt="logo of google" />
              <span>Sign in with Google</span>
            </div>
          </button>
        </form>
      </section>

      {/* RIGHT CONTAINER */}
      <section className="flex w-1/2 justify-end">
        <img
          loading="lazy"
          src={signupImage}
          className="h-[26rem] w-[26rem] object-cover object-left-bottom"
          alt="Signup image"
        />
      </section>
    </div>
  );
};

export default SignUp;
