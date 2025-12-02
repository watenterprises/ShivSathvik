import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useProperties } from '../../context/PropertyContext';
import { LOCATIONS, PROPERTY_TYPES } from '../../data/mockData';
import './PropertyForm.css';

const PropertyForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { properties, addProperty, updateProperty } = useProperties();

    const isEditMode = !!id;

    const [formData, setFormData] = useState({
        title: '',
        price: '',
        type: PROPERTY_TYPES[0],
        location: LOCATIONS[0],
        image: '',
        beds: 0,
        baths: 0,
        sqft: 0,
        status: 'buy'
    });

    useEffect(() => {
        if (isEditMode) {
            const propertyToEdit = properties.find(p => p.id === parseInt(id));
            if (propertyToEdit) {
                setFormData(propertyToEdit);
            }
        }
    }, [id, properties, isEditMode]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isEditMode) {
            updateProperty(id, formData);
        } else {
            addProperty(formData);
        }
        navigate('/admin');
    };

    return (
        <div className="property-form-container">
            <div className="container">
                <div className="form-header">
                    <h1>{isEditMode ? 'Edit Property' : 'Add New Property'}</h1>
                </div>

                <form onSubmit={handleSubmit} className="property-form">
                    <div className="form-group">
                        <label>Property Title</label>
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label>Price</label>
                            <input
                                type="text"
                                name="price"
                                value={formData.price}
                                onChange={handleChange}
                                placeholder="e.g. ₹1.5 Cr"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Status</label>
                            <select name="status" value={formData.status} onChange={handleChange}>
                                <option value="buy">Buy</option>
                                <option value="rent">Rent</option>
                                <option value="sell">Sell</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label>Type</label>
                            <select name="type" value={formData.type} onChange={handleChange}>
                                {PROPERTY_TYPES.map(type => (
                                    <option key={type} value={type}>{type}</option>
                                ))}
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Location</label>
                            <select name="location" value={formData.location} onChange={handleChange}>
                                {LOCATIONS.map(loc => (
                                    <option key={loc} value={loc}>{loc}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Image URL</label>
                        <input
                            type="url"
                            name="image"
                            value={formData.image}
                            onChange={handleChange}
                            placeholder="https://example.com/image.jpg"
                            required
                        />
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label>Beds</label>
                            <input
                                type="number"
                                name="beds"
                                value={formData.beds}
                                onChange={handleChange}
                                min="0"
                            />
                        </div>
                        <div className="form-group">
                            <label>Baths</label>
                            <input
                                type="number"
                                name="baths"
                                value={formData.baths}
                                onChange={handleChange}
                                min="0"
                            />
                        </div>
                        <div className="form-group">
                            <label>Sqft</label>
                            <input
                                type="number"
                                name="sqft"
                                value={formData.sqft}
                                onChange={handleChange}
                                min="0"
                            />
                        </div>
                    </div>

                    <div className="form-actions">
                        <button type="submit" className="btn btn-primary" style={{ flex: 1 }}>
                            {isEditMode ? 'Update Property' : 'Add Property'}
                        </button>
                        <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={() => navigate('/admin')}
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PropertyForm;
