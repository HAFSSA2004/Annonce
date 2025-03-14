import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  console.log("isAuthenticated:", isAuthenticated); // Check if this is logging true or false correctly.

  return isAuthenticated ? children : <Navigate to="/login" replace />;
};


export default ProtectedRoute;
