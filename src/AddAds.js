import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AdsContext } from "./AdsContext";
import { useAuth } from "./AuthContext";
import { FaUpload } from "react-icons/fa";

function AddAds() {
  //https://www.canva.com/templates/EAFacynVIg4/huz
  const { addAd } = useContext(AdsContext);
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const [productN, setProductN] = useState("");
  const [category, setCategory] = useState("");
  const [aboutP, setAboutP] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [uploadedImage, setUploadedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!isAuthenticated) {
      alert("You need to log in first!");
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

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
        setImageUrl(data.data.display_url || data.data.url);
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

  const handleNext = async (e) => {
    e.preventDefault();

    if (!productN || !category || !aboutP || !price || !location || !imageUrl) {
      setError(true);
      return;
    }

    setError(false);
    const customId = Math.floor(Math.random() * 1000000);
    const newAd = {
      id: customId,
      title: productN.trim(),
      categorie: category.trim(),
      description: aboutP.trim(),
      price: Number(price),
      location: location.trim(),
      image: imageUrl,
      datePoster: new Date().toISOString(),
    };

    try {
      const response = await fetch("http://localhost:8000/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newAd),
      });

      if (response.ok) {
        const data = await response.json();
        alert("Ad added successfully!");
        addAd(data.product);
        navigate("/seller-info");
      } else {
        alert("Error adding product.");
      }
    } catch (error) {
      console.error("Error adding product:", error);
      alert("An error occurred while adding the product.");
    }
  };

  return (
    <div className="container py-5 d-flex justify-content-center">
      <div className="card p-4 shadow-lg" style={{ maxWidth: "600px", borderRadius: "12px" }}>
        <h2 className="text-center mb-4">Add a New Ad</h2>
        <form onSubmit={handleNext}>
          <input type="text" className="form-control mb-3" placeholder="Product Name" value={productN} onChange={(e) => setProductN(e.target.value)} />
          <select className="form-control mb-3" value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="">Select Category</option>
            <option value="clothes">Clothes</option>
            <option value="books">Books</option>
            <option value="el">Electronics</option>
            <option value="children">Children</option>
            <option value="sport">Sports</option>
          </select>
          <textarea className="form-control mb-3" placeholder="Describe your product" value={aboutP} onChange={(e) => setAboutP(e.target.value)}></textarea>
          <input type="number" className="form-control mb-3" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
          <select className="form-control mb-3" value={location} onChange={(e) => setLocation(e.target.value)}>
            <option value="">Select Location</option>
            <option value="tanger">Tanger</option>
            <option value="rabat">Rabat</option>
            <option value="casablanca">Casablanca</option>
            <option value="agadir">Agadir</option>
          </select>
          <div className="d-flex align-items-center mb-3">
            <input type="file" accept="image/*" onChange={handleFileChange} className="form-control" />
            <button type="button" className="btn btn-primary ms-2" onClick={uploadToImgBB} disabled={loading}>
              {loading ? "Uploading..." : <FaUpload />}
            </button>
          </div>
          {imageUrl && <img src={imageUrl} alt="Uploaded" className="img-fluid rounded shadow-sm mb-3" style={{ maxWidth: "100px" }} />}
          {error && <div className="text-danger text-center">Please fill in all fields.</div>}
          <button type="submit" className="btn btn-warning w-100">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default AddAds;