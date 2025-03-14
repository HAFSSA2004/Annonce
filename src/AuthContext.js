import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("auth") === "true"
  );

  useEffect(() => {
    const storedAuth = localStorage.getItem("auth") === "true";
    console.log("Stored auth state:", storedAuth);  // Debugging
    setIsAuthenticated(storedAuth);
  }, []);
  
  const login = () => {
    localStorage.setItem("auth", "true");
    setIsAuthenticated(true);
    navigate("/addads");
  };

  const logout = () => {
    localStorage.removeItem("auth");
    setIsAuthenticated(false);
    navigate("/ "); // Redirect to login page after logout
  };
  

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
