import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { LOCATIONS, PROPERTY_TYPES } from '../data/mockData';
import './SearchForm.css';

const SearchForm = ({ initialValues = {} }) => {
    const navigate = useNavigate();
    const locationState = useLocation();

    // Parse query params if initialValues are not provided but we are on search page
    const queryParams = new URLSearchParams(locationState.search);

    const [activeTab, setActiveTab] = useState(initialValues.status || queryParams.get('status') || 'buy');
    const [location, setLocation] = useState(initialValues.location || queryParams.get('location') || '');
    const [propertyType, setPropertyType] = useState(initialValues.type || queryParams.get('type') || '');

    const handleSearch = (e) => {
        e.preventDefault();
        const params = new URLSearchParams();
        params.append('status', activeTab);
        if (location) params.append('location', location);
        if (propertyType) params.append('type', propertyType);

        navigate(`/search?${params.toString()}`);
    };

    return (
        <div className="search-container">
            <div className="search-tabs">
                <button
                    className={`tab-btn ${activeTab === 'buy' ? 'active' : ''}`}
                    onClick={() => setActiveTab('buy')}
                >
                    Buy
                </button>
                <button
                    className={`tab-btn ${activeTab === 'sell' ? 'active' : ''}`}
                    onClick={() => setActiveTab('sell')}
                >
                    Sell
                </button>
                <button
                    className={`tab-btn ${activeTab === 'rent' ? 'active' : ''}`}
                    onClick={() => setActiveTab('rent')}
                >
                    Rent
                </button>
            </div>

            <form onSubmit={handleSearch} className="search-inputs">
                <div className="input-group">
                    <label className="input-label">Location</label>
                    <select
                        className="form-select"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    >
                        <option value="">All Locations</option>
                        {LOCATIONS.map((loc, index) => (
                            <option key={index} value={loc}>{loc}</option>
                        ))}
                    </select>
                </div>

                <div className="input-group">
                    <label className="input-label">Property Type</label>
                    <select
                        className="form-select"
                        value={propertyType}
                        onChange={(e) => setPropertyType(e.target.value)}
                    >
                        <option value="">All Types</option>
                        {PROPERTY_TYPES.map((type, index) => (
                            <option key={index} value={type}>{type}</option>
                        ))}
                    </select>
                </div>

                <button type="submit" className="btn btn-primary search-btn">
                    Search
                </button>
            </form>
        </div>
    );
};

export default SearchForm;
