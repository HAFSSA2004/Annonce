import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const TechnoPage = () => {
    const ads = [
        {
          id: 1,
          image: "assus2.png",
          title: "Ordinateur ASUS",
          location: "Tanger",
          description: "PC portable performant avec processeur rapide et écran Full HD.",
          price: "$900",
        },
        {
          id: 2,
          image: "lap.png",
          title: "Laptop Gamer",
          location: "Rabat",
          description: "Ordinateur portable puissant conçu pour les jeux et le travail.",
          price: "$1,500",
        },
        {
          id: 3,
          image: "phone.png",
          title: "iPhone 13",
          location: "Casablanca",
          description: "Téléphone moderne avec caméra haute résolution et batterie longue durée.",
          price: "$600",
        },
        {
          id: 4,
          image: "tech.jpg",
          title: "PC de bureau",
          location: "Fès",
          description: "Casque de réalité virtuelle immersif pour gaming et films.",
          price: "$250",
        },
        {
          id: 5,
          image: "laptop.jpg",
          title: "Ordinateur ASUS",
          location: "Tanger",
          description: "Ordinateur portable haut de gamme pour le travail et la création.",
          price: "$1,800",
        },
        {
          id: 6,
          image: "ordinateur.jpg",
          title: "Lenovo",
          location: "Casablanca",
          description: "Unité centrale avec processeur puissant pour travail et gaming.",
          price: "$700",
        },
        {
          id: 7,
          image: "phone1.jpg",
          title: "Phone",
          location: "Oujda",
          description: "Smartphone Apple avec écran OLED et double caméra avancée.",
          price: "$1,000",
        },
        {
          id: 8,
          image: "phone2.jpg",
          title: "Samsung Galaxy S21",
          location: "Tétouan",
          description: "Téléphone Android avec écran AMOLED et excellente autonomie.",
          price: "$850",
        },
      ];
      
      

  return (
    <div className="container mt-5">
    <h3
      style={{
        color: "#4A00E0",
        backgroundColor: "black",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        fontSize: "2rem",
        fontWeight: "bold",
        letterSpacing: "2px",
        textTransform: "uppercase",
        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
      }}
    >
      TOP ADS FOR TECHNOLOGIE    </h3>
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 mt-4">
      {ads.map((ad) => (
        <div className="col" key={ad.id}>
          <div className="card h-100 shadow-sm">
          <img  src={`${process.env.PUBLIC_URL}/${ad.image}`} className="card-img-top" alt={ad.title} />
            <div className="card-body d-flex flex-column">
              <div className="title d-flex justify-content-between align-items-center">
                <h5 className="card-title">{ad.title}</h5>
                <span className="location text-danger">
                  <i className="bi bi-geo-alt-fill"></i> {ad.location}
                </span>
              </div>
              <p className="card-text flex-grow-1">{ad.description}</p>
              <p className="card-text price">
                <strong>Price:</strong> {ad.price}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);
};

export default TechnoPage;