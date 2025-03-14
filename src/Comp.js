import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import CardsCategories from "./Cards";
import { useLanguage } from "./LanguageContext"; // Import Language Context
import './List.css';
import Categories from './Categories';
import axios from "axios";

function ListeCard() {
    const { city, category } = useSelector((state) => state);
    const dispatch = useDispatch();
    const { language, toggleLanguage } = useLanguage(); // Get language and toggle function

    const [annonces, setAnnonces] = useState([]);

    // Fetch data from Laravel API
    useEffect(() => {
        axios
            .get("http://127.0.0.1:8000/api/annonces")
            .then((response) => {
                setAnnonces(response.data); // Store fetched annonces in state
            })
            .catch((error) => {
                console.error("There was an error fetching the data: ", error);
            });
    }, []);

    // Define translations
    const translations = {
        en: {
            banner: "Exclusive deals, premium finds—your perfect marketplace awaits",
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
            banner: "Offres exclusives, trouvailles premium—votre marché parfait vous attend",
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
            banner: "Ofertas exclusivas, hallazgos premium—tu mercado perfecto te espera",
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

    const t = translations[language]; // Get translations for the current language

    // Filtering annonces based on selected city & category
    const filteredAnnonces = annonces.filter((annonce) => {
        return (
            (city ? annonce.location?.toLowerCase() === city.toLowerCase() : true) &&
            (category ? annonce.categorie?.toLowerCase().includes(category.toLowerCase()) : true)
        );
    });

    return (
        <div>
            {/* Banner Section */}
            <div className="banner">
                <img src="/metting.jpg" alt="" className="banner-image" />
                <p className="banner-text">{t.banner}</p>
            </div>
            <Categories />

            {/* Language Toggle with Flags */}
            <div className="language-toggle" onClick={toggleLanguage} style={{ cursor: 'pointer', textAlign: 'center', margin: '10px 0' }}>
                <img
                    src={language === 'fr' ? 'france.png' : language === 'es' ? 'spain.png' : 'eng.png'}
                    alt="Language Toggle"
                    style={{ width: '50px', height: 'auto' }}
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
                        <option value="">{t.filterBy}</option>
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
            <div className="cards-container">
                {filteredAnnonces.map((annonce, index) => (
                    <CardsCategories
                        key={index}
                        image={annonce.image}
                        title={annonce.title}
                        location={annonce.location}
                        description={annonce.description}
                        price={annonce.price}
                    />
                ))}
            </div>
        </div>
    );
}

export default ListeCard;
