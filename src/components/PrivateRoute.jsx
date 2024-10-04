import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PrivateRoute = ({ isLoggedIn, children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn, navigate]);

  return isLoggedIn ? children : null; // Render nothing if not logged in
};

export default PrivateRoute;
