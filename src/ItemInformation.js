import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import axios from 'axios';

function ItemInformation() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        console.log("Fetching product with ID:", id);
    
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/produits/${id}`);
                console.log("Product data:", response.data); // Vérification des données reçues
                setProduct(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
                setError("Product not found");
            }
        };
    
        if (id) {
            fetchProduct();
        }
    }, [id]);
    
    if (error) return <p>{error}</p>;
    if (!product) return <p>Loading...</p>;

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px', fontFamily: "'Roboto', sans-serif", backgroundColor: '#f9f9f9' }}>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '20px', backgroundColor: 'white', padding: '20px', borderRadius: '12px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', flexWrap: 'wrap' }}>
                <div>
      
                <img src={product.image} alt={product.title} style={{ width: '100%', maxWidth: '300px', borderRadius: '10px' }} />


                </div>
                <div style={{ maxWidth: '500px' }}>
                    <h2>{product.title}</h2>
                    <h4 style={{ color: '#d79128' }}>ABOUT PRODUCT</h4>
                    <p>{product.description}</p>
                    <ul>
                        <li><strong>Price:</strong> {product.price}</li>
                        <li><strong>Location:</strong> {product.location}</li>
                        <li><strong>Category:</strong> {product.categorie}</li>
                        <li><strong>Date Posted:</strong> {product.datePoster}</li>
                    </ul>

                    <h4 style={{ color: '#d79128' }}>ABOUT SELLER</h4>
                    <div>
                        <FaPhone style={{ color: 'black' }} />
                        <p>(+33) 70055551</p>
                    </div>
                    <div>
                        <FaEnvelope style={{ color: 'black' }} />
                        <p>kristenwasten@example.com</p>
                    </div>

                    <button
                        style={{ padding: '12px 24px', borderRadius: '8px', backgroundColor: 'grey', color: 'white', border: 'none', cursor: 'pointer' }}
                        onClick={() => setIsModalOpen(true)}
                    >
                        Contact the Seller
                    </button>

                    {isModalOpen && (
                        <div style={{ position: 'fixed', top: '0', left: '0', right: '0', bottom: '0', backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '8px' }}>
                                <h3 style={{ color: '#4CAF50' }}>Success</h3>
                                <p>Your message has been sent successfully to the seller!</p>
                                <button style={{ backgroundColor: '#d32f2f', color: 'white', padding: '10px' }} onClick={() => setIsModalOpen(false)}>
                                    Close
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ItemInformation;
