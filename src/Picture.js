import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AdsContext } from "./AdsContext";
import { FaUpload } from "react-icons/fa";

function Picture() {
  const { ads, addAd } = useContext(AdsContext);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setUploadedImage(file);
    } else {
      alert("Please select a valid image file (JPG, PNG, GIF, etc.).");
    }
  };

  const uploadToImgBB = async () => {
    if (!uploadedImage) {
      alert("Please select an image first.");
      return;
    }

    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("image", uploadedImage);

      const response = await fetch(
        `https://api.imgbb.com/1/upload?key=275b68f5068007b0f4aaba6bc0f9276a`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (data.success) {
        setImageUrl(data.data.url);
        alert("Image uploaded successfully!");
      } else {
        alert(`Error uploading image: ${data.error.message}`);
      }
    } catch (error) {
      console.error("Upload Error:", error);
      alert("An error occurred while uploading.");
    } finally {
      setLoading(false);
    }
  };

  const handleNext = async () => {
    if (!imageUrl) {
        alert("Please upload the image before proceeding.");
        return;
    }

    if (ads.length === 0) {
        alert("No product details found. Please fill in the form first.");
        navigate("/add-ads"); // Redirect back
        return;
    }

    const lastAd = ads[ads.length - 1];

    const newAd = { ...lastAd, image: imageUrl, id: Date.now() };

    try {
        const response = await fetch("http://localhost:8000/products", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newAd),
        });

        if (response.ok) {
            alert("Ad added successfully!");
            addAd(newAd);
            navigate("/seller-info");
        } else {
            const data = await response.json();
            alert(`Error: ${data.error}`);
        }
    } catch (error) {
        console.error("Error adding product:", error);
        alert("An error occurred while adding the product.");
    }
};

  

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Upload Product Picture</h1>

      <div className="d-flex justify-content-center align-items-center">
        <div className="tab bg-secondary text-white px-4 py-2 me-2 border rounded">1. Product Info</div>
        <div className="tab bg-white text-dark px-4 py-2 me-2 border rounded shadow">2. Product Pictures</div>
        <div className="tab bg-secondary text-white px-4 py-2 border rounded">3. Seller Info</div>
      </div>

      <div className="d-flex justify-content-center mt-4">
        <input type="file" accept="image/*" onChange={handleFileChange} />
        <button className="btn btn-primary ms-2" onClick={uploadToImgBB} disabled={loading}>
          {loading ? "Uploading..." : <FaUpload />}
        </button>
      </div>

      {imageUrl && (
        <div className="text-center mt-3">
          <img src={imageUrl} alt="Uploaded" width="150" className="border rounded" />
        </div>
      )}

      <div className="text-center mt-3">
        <button className="btn btn-warning" onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}

export default Picture;
