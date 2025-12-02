import React from 'react';
import './PropertyCard.css';

const PropertyCard = ({ property }) => {
    return (
        <div className="property-card">
            <div className="card-image-container">
                <img src={property.image} alt={property.title} className="card-image" />
                <span className="card-badge">{property.type}</span>
                <span className="card-status">{property.status}</span>
            </div>
            <div className="card-content">
                <div className="card-price">{property.price}</div>
                <h3 className="card-title">{property.title}</h3>
                <div className="card-location">
                    📍 {property.location}
                </div>
                <div className="card-features">
                    {property.beds > 0 && (
                        <div className="feature">
                            <span>🛏️</span> {property.beds} Beds
                        </div>
                    )}
                    {property.baths > 0 && (
                        <div className="feature">
                            <span>🚿</span> {property.baths} Baths
                        </div>
                    )}
                    <div className="feature">
                        <span>📏</span> {property.sqft} sqft
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PropertyCard;
