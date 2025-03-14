import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const SportPage = () => {
  const ads = [
    {
      id: 1,
      image: "shoes.png",
      title: "Chaussures de sport",
      location: "Tanger",
      description: "Chaussures légères et confortables pour la course.",
      price: "$80",
    },
    {
      id: 2,
      image: "bike.png",
      title: "Vélo de course",
      location: "Rabat",
      description: "Vélo de route professionnel en carbone.",
      price: "$1,200",
    },
    {
      id: 3,
      image: "tap.png",
      title: "Tapis de yoga",
      location: "Casablanca",
      description: "Tapis antidérapant pour yoga et fitness.",
      price: "$40",
    },
    {
      id: 4,
      image: "ssuit.png",
      title: "Tenue de sport",
      location: "Fès",
      description: "Ensemble respirant pour entraînements intensifs.",
      price: "$60",
    },
    {
      id: 5,
      image: "suc.png",
      title: "Chaussures de sport",
      location: "Tanger",
      description: "Chaussures légères et confortables pour la course.",
      price: "$150",
    },
    {
      id: 6,
      image: "why.png",
      title: "Protéine de sport",
      location: "Casablanca",
      description: "Protéine de haute qualité pour la récupération musculaire.",
      price: "$50",
    },
    {
      id: 7,
      image: "b.png",
      title: "Sac à dos",
      location: "Oujda",
      description: "Sac spacieux et résistant pour voyages et études.",
      price: "$50",
    },
    {
      id: 8,
      image: "5k.png",
      title: "Kettlebells 5KG & 8KG",
      location: "Tétouan",
      description:
        "Ensemble de kettlebells de 5 kg et 8 kg, idéal pour l'entraînement musculaire et le fitness.",
      price: "$45",
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
        TOP ADS FOR  SPORT
      </h3>
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

export default SportPage;
