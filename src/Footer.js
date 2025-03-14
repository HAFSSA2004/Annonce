import React from "react";
import "./Footer.css"; // Assurez-vous que ce fichier existe et contient les styles nécessaires
import '@fortawesome/fontawesome-free/css/all.min.css';

function Footer() {
  return (
    <footer className="text-center mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-3 footer-section">
            <h5>Company</h5>
            <p><a href="https://facebook.com">About Us</a></p>
            
            <p><a href="https://facebook.com">Our Services</a></p>
            <p><a href="https://facebook.com">Privacy Policy</a></p>
          </div>
          <div className="col-md-3 footer-section">
            <h5>Online Shop</h5>
            <p><a href="https://facebook.com">Watch</a></p>
            <p><a href="https://facebook.com">Bags</a></p>
            <p><a href="https://facebook.com">Shoes</a></p>
            <p><a href="https://facebook.com">Dress</a></p>
            <p><a href="https://facebook.com">Skincare</a></p>
          </div>
          <div className="col-md-3 footer-section">
            <h5>Get Help</h5>
            <p><a href="https://facebook.com">FAQ</a></p>
            <p><a href="https://facebook.com">Shopping</a></p>
            <p><a href="https://facebook.com">Returns</a></p>
            <p><a href="https://facebook.com">Order Status</a></p>
            <p><a href="https://facebook.com">Payment Options</a></p>
          </div>
          <div className="col-md-3 footer-section">
            <h5>Follow Us</h5>
            <div className="social-icons">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
