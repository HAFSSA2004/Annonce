import React, { useState } from "react";
import { Link } from "react-router-dom";

function SellerInfo() {
  const [sellerName, setSellerName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [allowComments, setAllowComments] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!termsAccepted) {
      alert("You must accept the Terms & Conditions to proceed.");
      return;
    }
    console.log({ sellerName, phoneNumber, email, city, allowComments });
  };

  return (
    <div className="container py-5 d-flex justify-content-center">
      <div className="card p-4 shadow-lg" style={{ maxWidth: "600px", borderRadius: "12px" }}>
        <h2 className="text-center mb-4">Seller Information</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Seller Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your name"
              value={sellerName}
              onChange={(e) => setSellerName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Phone Number</label>
            <input
              type="number"
              className="form-control"
              placeholder="Enter your phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">City</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
          </div>
          <div className="form-check mb-3">
            <input
              type="checkbox"
              className="form-check-input"
              checked={allowComments}
              onChange={(e) => setAllowComments(e.target.checked)}
            />
            <label className="form-check-label">Allow users to write comments</label>
          </div>
          <div className="form-check mb-3">
            <input
              type="checkbox"
              className="form-check-input"
              checked={termsAccepted}
              onChange={(e) => setTermsAccepted(e.target.checked)}
            />
            <label className="form-check-label">Accept Terms & Conditions</label>
          </div>
          <div className="text-center">
            <Link to="/Myadds" className="btn btn-warning w-100">
              Next
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SellerInfo;
