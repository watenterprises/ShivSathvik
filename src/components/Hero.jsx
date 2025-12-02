import React, { useState, useEffect } from 'react';
import SearchForm from './SearchForm';
import './Hero.css';

const HERO_IMAGES = [
    "https://images.unsplash.com/photo-1600596542815-2495db9dc2c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
];

const Hero = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % HERO_IMAGES.length);
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="hero">
            {HERO_IMAGES.map((img, index) => (
                <div
                    key={index}
                    className={`hero-bg ${index === currentImageIndex ? 'active' : ''}`}
                    style={{ backgroundImage: `url(${img})` }}
                />
            ))}
            <div className="hero-overlay"></div>

            <div className="hero-content">
                <h1 className="hero-title">Find Your Dream Home in Bangalore</h1>
                <p className="hero-subtitle">Discover the best properties for buy, sell, and rent across the city's prime locations.</p>
                <SearchForm />
            </div>
        </div>
    );
};

export default Hero;
