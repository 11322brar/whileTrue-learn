import { useState } from "react";

import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Logout from "./pages/Logout";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
import Welcome from "./pages/Welcome";

import NavBar from "./components/NavBar";
import PrivateRoute from "./components/PrivateRoute";

import { Toaster, toast } from "react-hot-toast";
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    // main container
    <div className="h-screen">
      <Toaster />
      <div className="m-auto w-3/4">
        <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/signup"
            element={
              <SignUp isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            }
          />
          <Route
            path="/login"
            element={
              <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            }
          />
          <Route path="/logout" element={<Logout />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/*" element={<NotFound />} />

          <Route
            path="/dashboard"
            element={
              <PrivateRoute isLoggedIn={isLoggedIn}>
                <Dashboard />
              </PrivateRoute>
            }
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;

//student/instructor button conditional operator in classname '{$}
//private routing on dashboard understand this
//add account type to data object
