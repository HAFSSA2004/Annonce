import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom"; // Import Link for navigation

// import "./Managea.css"; // Import du fichier CSS

const Managea = () => {
  const navigate = useNavigate(); // Hook pour naviguer entre les pages

  return (
    <div className="dashboard-box" style={{ 
      display: "flex", 
      flexDirection: "row", 
      alignItems: "center", 
      justifyContent: "center", 
      minHeight: "100vh", 
      textAlign: "center" 
    }}>
      
      {/* Sidebar des boutons */}
      <div className="sidebar" style={{ 
        display: 'flex',
        marginBottom:"150px", 
        flexDirection: 'column', 
        gap: '20px', 
        width: '80%', 
        justifyContent: 'center', // Centrer les boutons verticalement dans leur conteneur
        alignItems: 'center', // Centrer les boutons horizontalement
      }}>
        
        {/* Bouton 1 */}
        <button 
          className="sidebar-button cute-button btn bg-warning p-3 text-white"
          onClick={() => navigate("/ManageValidation")}
          style={{
            border: "none",
            borderRadius: "50px",
            fontSize: "1.2rem",
            fontWeight: "bold",
            padding: "12px 30px",
            transition: "all 0.3s ease",
            boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
            cursor: "pointer",
            textTransform: "uppercase",
            width: '350px',
          }}
          onMouseOver={(e) => {
            e.target.style.transform = "translateY(-5px)";
            e.target.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.15)";
          }}
          onMouseOut={(e) => {
            e.target.style.transform = "translateY(0)";
            e.target.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.1)";
          }}
        >
          Validated Adds
        </button>
        
        {/* Bouton 2 */}
        <Link to="/DashboardFinance">
          <button
            className="cute-button bg-warning p-3 text-white"
            style={{
              border: "none",
              borderRadius: "50px",
              width: '350px',
              fontSize: "1.2rem",
              fontWeight: "bold",
              padding: "12px 30px",
              transition: "all 0.3s ease",
              boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
              cursor: "pointer",
              textTransform: "uppercase",
            }}
            onMouseOver={(e) => {
              e.target.style.transform = "translateY(-5px)";
              e.target.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.15)";
            }}
            onMouseOut={(e) => {
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.1)";
            }}
          >
            Manage Dashboard
          </button>
        </Link>
      </div>

      {/* Contenu principal */}
      <div className="content text-warning" style={{ 
        width: '100%', 
        maxWidth: '800px', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', // Centrer le contenu horizontalement
        justifyContent: 'center', // Centrer le contenu verticalement
      }}>
        <h1 style={{ fontSize: "4rem", }}>Welcome back, admin!</h1>
        
        {/* Image en grand format */}
        <img
     
          src={`${process.env.PUBLIC_URL}/ad1.jpg`} 
          alt="Handshake"
          className="handshake-image"
          style={{ width: "100%", height: "auto", maxWidth: "500px", marginTop: "30px" }} // Ajuster la taille de l'image
        />
      </div>
    </div>
  );
};

export default Managea;
