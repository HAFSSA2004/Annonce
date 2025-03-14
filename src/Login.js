import React, { useState } from "react";
import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom";
import './SignUp.css';

const Login = () => {
  const { login, logout, user } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    isAdmin: false,
    adminKey: "",
  });

  const [errors, setErrors] = useState({});
  const [showDropdown, setShowDropdown] = useState(false); // To handle the visibility of the dropdown
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";
    if (formData.isAdmin && !formData.adminKey) newErrors.adminKey = "Admin key is required"; // Only check if admin is true
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      if (formData.isAdmin) {
        if (formData.adminKey === "123") {
          login();
          navigate("/managea");  // Admin dashboard page
        } else {
          login();
          navigate("/");  // Regular user landing page
        }
      } else {
        logout();
        setErrors({ adminKey: "Invalid admin key" });
      }
    }
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLogout = () => {
    logout();
    navigate("/login"); // Redirect to the login page after logout
  };

  return (
    <div className="signup-container">
      <h2 className="signup-title">Login</h2>
      <form onSubmit={handleSubmit} className="signup-form">
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? "input-error" : ""}
            placeholder="Enter your email"
          />
          {errors.email && <small className="error-text">{errors.email}</small>}
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className={errors.password ? "input-error" : ""}
            placeholder="Create a password"
          />
          {errors.password && <small className="error-text">{errors.password}</small>}
        </div>

        <div className="inp">
          <input
            type="checkbox"
            name="isAdmin"
            checked={formData.isAdmin}
            onChange={handleChange}
            className="form-check-input"
          />
          <label className="form-check-label" style={{ marginTop: '2px', marginLeft: '5px' }}>Login as Admin</label>
        </div>

        {/* Only display the admin key input field if isAdmin is true */}
        {formData.isAdmin && (
          <div className="form-group">
            <label>Admin Key</label>
            <input
              type="text"
              name="adminKey"
              value={formData.adminKey}
              onChange={handleChange}
              className={errors.adminKey ? "input-error" : ""}
              placeholder="Enter the admin key"
            />
            {errors.adminKey && <small className="error-text">{errors.adminKey}</small>}
          </div>
        )}
        <button type="submit" className="btn c1">Login</button>
      </form><br />
      
      <button type="button" className="btn-google c1">Continue with Google</button>
      <p className="login-redirect">
        Don’t have an account? <span className="login-link" onClick={() => navigate("/signup")}>Sign Up here</span>
      </p>

      {/* Show dropdown for logged-in non-admin users */}
      {user && !formData.isAdmin && (
        <div>
          <button onClick={toggleDropdown} className="btn-dropdown">
            {showDropdown ? "Hide Options" : "Show Options"}
          </button>
          {showDropdown && (
            <div className="dropdown-menu">
              <button onClick={() => navigate("/clientspace")} className="dropdown-item">Client Space</button>
              <button onClick={handleLogout} className="dropdown-item">Logout</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Login;
