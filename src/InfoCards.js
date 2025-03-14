import React from "react";
import "./InfoCards.css";

function InfoCards() {
    const infoData = [
        {
            id: "aboutus",
            title: "About Us",
            description: "We are a leading marketplace connecting advertisers with potential clients. Whether you're selling, renting, or promoting services, we help your ads reach the right audience.",
        },
        {
            id: "services",
            title: "Our Services",
            description: "Our platform offers featured ad placements, secure payments, and verified listings to help you gain maximum exposure for your announcements.",
        },
        {
            id: "contactus",
            title: "Contact Us",
            description: "Need assistance? Reach out to our support team for any inquiries. We are here to help you with your announcements.",
            email: "support@example.com",
            phone: "+212 612-345678",
        }
    ];

    return (
        <div className="info-cards-container">
            {infoData.map((item, index) => (
                <div key={index} id={item.id} className="info-card">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    {item.email && <p><strong>Email:</strong> {item.email}</p>}
                    {item.phone && <p><strong>Phone:</strong> {item.phone}</p>}
                </div>
            ))}
        </div>
    );
}

export default InfoCards;
