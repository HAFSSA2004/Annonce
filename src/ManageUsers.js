import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaTrash } from "react-icons/fa";
import "./ManageUsers.css";
import { useNavigate } from "react-router-dom";

const users = [
  { id: "A1234557", adds: 10, date: "12/08/2024", status: "Active" },
  { id: "A1234558", adds: 2, date: "10/03/2022", status: "Not Active" },
  { id: "A1234559", adds: 0, date: "12/08/2032", status: "Not Active" },
  { id: "A1234560", adds: 5, date: "12/08/2024", status: "Active" },
  { id: "A1234561", adds: 3, date: "12/08/2024", status: "Not Active" },
];


const ManageUsers = () => {
  const navigate = useNavigate();
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
          <h2 className="text-warning text-center">Manage Users</h2>

          {/* Champ de recherche */}
          <div className="d-flex justify-content-center mb-3">
            <input type="text" className="form-control w-50" placeholder="Enter the member ID" />
          </div>

          {/* Tableau responsive */}
          <div className="table-responsive">
            <table className="table table-bordered text-center">
              <thead className="table-light">
                <tr>
                  <th>Member ID</th>
                  <th>Adds Number</th>
                  <th>Register Date</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={index}>
                    <td>{user.id}</td>
                    <td>{user.adds}</td>
                    <td>{user.date}</td>
                    <td className={user.status === "Active" ? "text-success" : "text-danger"}>
                      {user.status}
                    </td>
                    <td>
                      <button className="btn btn-danger btn-sm">
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

export default ManageUsers;
