import React from "react";
import { FaTrash } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import {  useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { INITIAL_STATE } from "./Reducers/Filter";


const MyActiveAds = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const ads = INITIAL_STATE.profils;

  const handleDelete = (id) => {
    dispatch({ type: "DELETE_AD", payload: { productN: id } });
  };

  return (
    <div className="container-fluid">
      <div className="row flex-wrap">
        {/* Sidebar */}
        <div className="col-12 col-md-3 p-3">
          <div className="d-flex flex-column align-items-start">
          <button className="sidebar-button" onClick={() => navigate("/MyActiveAds")}>Manage Adds</button>          
        <button className="sidebar-button" onClick={() => navigate("/ManageValidation")}>Validated Adds</button>
        <button className="sidebar-button" onClick={() => navigate("/ManageUsers")}>Delete Users</button>
          </div>
        </div>

        {/* Contenu principal */}
        <div className="col-12 col-md-9 p-4">
          <h2 className="text-warning text-center">My Active Ads</h2>

          {/* Table responsive */}
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead className="table-dark">
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {ads.map((ad) => (
                  <tr key={ad.id}>
                    <td>
                      <div className="d-flex align-items-center">
                        <img src={ad.image} alt="Product" className=" img-fluid w-25 rounded me-2" />

                        <div>
                          <strong>{ad.name}</strong>
                          <br />
                          <small>Color: {ad.color} {ad.size && <>, Size: {ad.size}</>}</small>
                        </div>
                      </div>
                    </td>
                    <td>{ad.price}</td>
                    <td className="text-success">{ad.status}</td>
                    <td>
                      <button className="btn btn-danger btn-sm" onClick={() => handleDelete(ad.id)}>
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyActiveAds;