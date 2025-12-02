import React from 'react';
import { useProperties } from '../context/PropertyContext';
import PropertyCard from '../components/PropertyCard';
import './Projects.css';

const Projects = () => {
    const { properties } = useProperties();

    return (
        <div className="projects-page">
            <div className="container">
                <div className="projects-header">
                    <h1>Our Exclusive Projects</h1>
                    <p>Explore our complete portfolio of premium residential and commercial properties across Bangalore.</p>
                </div>

                <div className="properties-grid">
                    {properties.map(property => (
                        <PropertyCard key={property.id} property={property} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
