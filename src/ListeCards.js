import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import CardsCategories from "./Cards";
import { useLanguage } from "./LanguageContext"; 
import "./List.css";
import Categories from "./Categories";
import Page from "./Page";
import InfoCards from "./InfoCards";

function ListeCard() {
    const heroStyle = {
        backgroundImage: `url(${process.env.PUBLIC_URL}/orange.jpg)`,  
        backgroundSize: "cover",
        width: "100%",
        height: "500px",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center", /* Centre verticalement */
        alignItems: "center", /* Centre horizontalement */
        textAlign: "center", /* Assure le centrage du texte */
        backgroundPosition: "center",
        position: "relative",
    };
    

    const { city, category } = useSelector((state) => state);
    const dispatch = useDispatch();
    const { language, toggleLanguage } = useLanguage();

    const [products, setProducts] = useState([]); // Store fetched products

    useEffect(() => {
        axios.get("http://localhost:8000/products") // Replace with your actual backend URL
            .then((response) => {
                setProducts(response.data); // Store fetched data in state
            })
            .catch((error) => {
                console.error("Error fetching products:", error);
            });
    }, []);

    const translations = {
        en: {
            banner: "Find the Best Deals!",
            filterBy: "Filter By",
            categories: {
                electronique: "Electronics",
                skincare: "Skincare",
                clothes: "Clothes"
            },
            cities: {
                Tangier: "Tangier",
                Casablanca: "Casablanca",
                Agadir: "Agadir",
                Marrakech: "Marrakech"
            }
        },
        fr: {
            banner: "Trouvez les meilleures offres !",
            filterBy: "Filtrer Par",
            categories: {
                electronique: "Électronique",
                skincare: "Soins de la peau",
                clothes: "Vêtements"
            },
            cities: {
                Tangier: "Tanger",
                Casablanca: "Casablanca",
                Agadir: "Agadir",
                Marrakech: "Marrakech"
            }
        },
        es: {
            banner: "¡Encuentra las mejores ofertas!",
            filterBy: "Filtrar Por",
            categories: {
                electronique: "Electrónica",
                skincare: "Cuidado de la piel",
                clothes: "Ropa"
            },
            cities: {
                Tangier: "Tánger",
                Casablanca: "Casablanca",
                Agadir: "Agadir",
                Marrakech: "Marrakech"
            }
        }
    };

    const t = translations[language];

    // Filter products based on selected city & category
    const filteredProducts = products.filter((product) => {
        return (
            (city ? product.location?.toLowerCase() === city.toLowerCase() : true) &&
            (category ? product.categorie?.toLowerCase().includes(category.toLowerCase()) : true)
        );
    });

    return (
        <div>
            <section className="hero-section" style={heroStyle}>
            <h3 className="hero-subtitle">{t.banner}</h3>
            <button className="cute-btn" onClick={() => window.scrollTo({ top: 800, behavior: 'smooth' })}>
        🛍 Explore Now!
            </button>
            </section>

            <Page />
            <Categories />
            {/* Language Toggle with Flags */}
            <div className="language-toggle" onClick={toggleLanguage} style={{ cursor: "pointer", textAlign: "center", margin: "10px 0" }}>
                <img
                    src={`${process.env.PUBLIC_URL}/${language === "fr" ? "france.png" : language === "es" ? "spain.png" : "eng.png"}`}
                    alt="Language Toggle"
                    style={{ width: "50px", height: "auto" }}
                />
            </div>

            {/* Filters */}
            <div className="fil">
                <div className="select-container">
                    <i className="fas fa-map-marker-alt select-icon"></i>
                    <select
                        name="city"
                        className="form-selectc styled-select"
                        onChange={(e) => dispatch({ type: "SET_CITY", payload: e.target.value })}
                    >
                        <option value="" className="filter-default" style={{ color: '#ff7f50' }}>{t.filterBy}</option>

                        <option value="Tangier">{t.cities.Tangier}</option>
                        <option value="Casablanca">{t.cities.Casablanca}</option>
                        <option value="Agadir">{t.cities.Agadir}</option>
                        <option value="Marrakech">{t.cities.Marrakech}</option>
                    </select>
                </div>

                <div className="select-container">
                    <i className="fas fa-tags select-icon"></i>
                    <select
                        name="category"
                        className="form-selectc styled-select"
                        onChange={(e) => dispatch({ type: "SET_CATEGORY", payload: e.target.value })}
                    >
                        <option value="">{t.filterBy}</option>
                        <option value="Electronique">{t.categories.electronique}</option>
                        <option value="skincare">{t.categories.skincare}</option>
                        <option value="clothes">{t.categories.clothes}</option>
                    </select>
                </div>
            </div>

            {/* Cards Section */}
            <h2 className="ms-5 " style={{ borderBottom: "2px solid black", width: "260px" ,fontFamily:'cursive' }}>All Categories</h2>

            <div className="cards-container">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product, index) => (
                        <CardsCategories
                            key={index}
                            id={product.id} 
                            image={product.image}
                            title={product.title}
                            location={product.location}
                            description={product.description}
                            price={Number(product.price)} // Convert price to a number
                        />
                    ))
                ) : (
                    <p style={{ textAlign: "center", marginTop: "20px", fontSize: "18px", color: "gray" }}>
                        No products found.
                    </p>
                )}
            </div>

            <InfoCards />
        </div>
    );
}

export default ListeCard;