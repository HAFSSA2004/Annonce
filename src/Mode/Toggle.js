import React, { useEffect } from "react";
import './Toggle.css'; // Ensure you have the correct path to your CSS
function Toggle() {
  // Handle the initial theme based on localStorage or default to 'light'
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      document.body.setAttribute('data-theme', savedTheme);
    } else {
      document.body.setAttribute('data-theme', 'light'); // Default theme
    }
  }, []);
  const toggleTheme = (e) => {
    const newTheme = e.target.checked ? 'dark' : 'light';
    document.body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme); // Save the selected theme
  };

  return (
    <div className="wrapper">
      <label className="switch">
        <input type="checkbox" onChange={toggleTheme} />
        <span className="slider round"></span>
      </label>
    </div>
  );
}

export default Toggle;
