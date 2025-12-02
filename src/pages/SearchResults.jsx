import React, { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { useProperties } from '../context/PropertyContext';
import SearchForm from '../components/SearchForm';
import PropertyCard from '../components/PropertyCard';
import './SearchResults.css';

const SearchResults = () => {
    const locationState = useLocation();
    const queryParams = new URLSearchParams(locationState.search);
    const { properties } = useProperties();

    const status = queryParams.get('status') || 'buy';
    const location = queryParams.get('location') || '';
    const type = queryParams.get('type') || '';

    const filteredProperties = useMemo(() => {
        return properties.filter(property => {
            // Filter by status (buy/rent/sell)
            if (status && status !== 'sell' && property.status !== status) return false;

            // Filter by location (exact match for dropdown, or partial if we wanted)
            // Since it's a dropdown now, exact match is better, but let's keep includes for flexibility
            if (location && !property.location.toLowerCase().includes(location.toLowerCase())) return false;

            // Filter by type
            if (type && property.type !== type) return false;

            return true;
        });
    }, [status, location, type, properties]);

    return (
        <div className="search-results-page">
            <div className="search-header">
                <div className="container">
                    <SearchForm initialValues={{ status, location, type }} />
                </div>
            </div>

            <div className="container">
                <h2 className="section-title">
                    {filteredProperties.length} Properties Found
                </h2>

                {filteredProperties.length > 0 ? (
                    <div className="properties-grid">
                        {filteredProperties.map(property => (
                            <PropertyCard key={property.id} property={property} />
                        ))}
                    </div>
                ) : (
                    <div className="no-results">
                        <p>No properties found matching your criteria. Try adjusting your search.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SearchResults;
