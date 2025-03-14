import React from "react";
import { Link } from "react-router-dom"; // Importer Link
import "./Categories.css";
import "bootstrap/dist/css/bootstrap.min.css";

const categories = [
  { name: "Sport", image: "shoes.png", link: "/sport" },
  { name: "Technology", image: "tech.jpg", link: "/techno" },
  { name: "Car", image: "car.jpg", link: "/car" },
  { name: "Clothes", image: "clothes.jpg", link: "#" },
  { name: "Skincare", image: "skincare.png", link: "#" },
  { name: "Pet Product", image: "pet.png", link: "#" },
];

const Categories = () => {
  return (
    <div className="ms-3 mt-5">
      <h2 className="ms-4 mb-4" style={{ borderBottom: '2px solid black' ,width:'230px'}}>Top Categories</h2>
      <div className="d-flex justify-content-center align-items-center">
        <div className="category-container d-flex">
          {categories.map((category, index) => (
            <div key={index} className="category-item text-center mx-2">
              <Link to={category.link}>
                
                <img src={`${process.env.PUBLIC_URL}/${category.image}`} className="category-image" alt={category.name}  />
              </Link>
              <div className="category-description">{category.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
