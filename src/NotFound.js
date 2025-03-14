// src/NotFound.js
import React from 'react';
import './NotFound.css';  // Link to the CSS file for styling
//import Navbar from "./Home";
function NotFound() {
  return (
    <div>
    
      <div className="not-found">
        <img className="not-found-image" src="notf.jpg" alt="Not Found" />
        <div className="text-container">
          <p className="error-message">The page you are looking for does not exist.</p>
         
      </div>
    </div>
    </div>
  );
}

export default NotFound;
