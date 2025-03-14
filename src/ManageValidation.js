import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaTrash } from "react-icons/fa";
import axios from "axios"; // Import d'Axios

const API_URL = "http://localhost:8000/products"; // Assure-toi que c'est l'URL correcte

const ManageValidation = () => {
  // Stocker les produits dans l'état local
  const [products, setProducts] = useState([]);

  // Charger les produits depuis l'API
  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Erreur lors du chargement des produits:", err));
  }, []);

  // Fonction pour supprimer un produit
  const handleDelete = (id) => {
    if (!window.confirm("Voulez-vous vraiment supprimer ce produit ?")) return;

    axios
      .delete(`${API_URL}/${id}`)
      .then(() => {
        // Mettre à jour l'état local après suppression
        setProducts(products.filter((product) => product.id !== id));
      })
      .catch((error) => {
        console.error("Erreur lors de la suppression:", error);
      });
  };

  return (
    <div className="container-fluid">
      <div className="d-flex justify-content-center">
        {/* Contenu principal */}
        <div className="col-12 col-md-9 p-4">
          {/* Table responsive */}
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead className="table-dark">
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id}>
                    <td>
                      <div className="d-flex align-items-center">
                      <img
  src={product.image}
  alt="Product" 
  className="rounded me-2" 
  width="50" 
  height="50" 
/>

                        <div>
                          <strong>{product.title}</strong>
                          <br />
                          <small>Location: {product.location}</small>
                        </div>
                      </div>
                    </td>
                    <td>{product.price} DH</td>
                    <td>
                      <button
                        className="btn btn-danger btn-sm text-center"
                        onClick={() => handleDelete(product.id)}
                      >
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))}
                {products.length === 0 && (
                  <tr>
                    <td colSpan="3" className="text-center text-muted">
                      Aucun produit disponible
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageValidation;
