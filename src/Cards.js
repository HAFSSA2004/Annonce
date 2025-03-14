import React from 'react';
import { Link } from 'react-router-dom';
import './CardStyle.css';

function CardsCategories({ id, image, title, location, description, price, datePoster }) {
    return (
        <div className="card">
            {/* Pass the annonce id dynamically in the Link */}
            <Link to={`/iteminformation/${id}`}>

    <img src={image} className='card-img-top' alt={title}  />

</Link>
            <div className="card-body">
                <div className="title-location">
                    <h5 className="card-title">{title}</h5>
                    <div className="location">
                        <i className="bi bi-geo-alt"></i>
                        {location}
                    </div>
                </div>
                <p className="card-text">{description}</p>
                <p className="price">{price}</p>
                <p className="date">{datePoster}</p>
            </div>
        </div>
    );
}

export default CardsCategories;
