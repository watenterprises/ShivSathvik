import React from 'react';
import { Link } from 'react-router-dom';
import { useProperties } from '../context/PropertyContext';
import Hero from '../components/Hero';
import PropertyCard from '../components/PropertyCard';
import './Home.css';

const Home = () => {
    const { properties } = useProperties();
    // Display first 6 properties as featured
    const featuredProperties = properties.slice(0, 6);

    const POPULAR_LOCATIONS = [
        { name: "Koramangala", image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
        { name: "Indiranagar", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
        { name: "Whitefield", image: "/whitefield.png" },
        { name: "HSR Layout", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" }
    ];

    return (
        <div className="home-page">
            <Hero />

            <section className="featured-section">
                <div className="container">
                    <h2 className="section-title">Featured Properties</h2>
                    <p className="section-subtitle">Explore our handpicked selection of premium properties in Bangalore's most sought-after locations.</p>

                    <div className="properties-grid">
                        {featuredProperties.map(property => (
                            <PropertyCard key={property.id} property={property} />
                        ))}
                    </div>

                    <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                        <Link to="/projects" className="btn btn-primary">View All Properties</Link>
                    </div>
                </div>
            </section>

            <section className="why-choose-us">
                <div className="container">
                    <h2 className="section-title">Why Choose Us?</h2>
                    <p className="section-subtitle">We provide a seamless and transparent real estate experience tailored to your needs.</p>

                    <div className="features-grid">
                        <div className="feature-card">
                            <span className="feature-icon">🏆</span>
                            <h3>Premium Listings</h3>
                            <p>Access exclusive properties that you won't find anywhere else.</p>
                        </div>
                        <div className="feature-card">
                            <span className="feature-icon">🤝</span>
                            <h3>Expert Guidance</h3>
                            <p>Our experienced agents are with you every step of the way.</p>
                        </div>
                        <div className="feature-card">
                            <span className="feature-icon">⚖️</span>
                            <h3>Transparent Deals</h3>
                            <p>No hidden costs or surprises. We believe in complete honesty.</p>
                        </div>
                        <div className="feature-card">
                            <span className="feature-icon">⚡</span>
                            <h3>Fast Process</h3>
                            <p>From viewing to closing, we ensure a quick and hassle-free process.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="popular-locations">
                <div className="container">
                    <h2 className="section-title">Popular Locations</h2>
                    <p className="section-subtitle">Find your perfect home in Bangalore's top neighborhoods.</p>

                    <div className="locations-grid">
                        {POPULAR_LOCATIONS.map((loc, index) => (
                            <Link to={`/search?location=${loc.name}`} key={index} className="location-card">
                                <img src={loc.image} alt={loc.name} />
                                <div className="location-overlay">
                                    <span className="location-name">{loc.name}</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className="cta-section">
                <div className="container cta-content">
                    <h2>Ready to Find Your Dream Home?</h2>
                    <p>Whether you're buying, selling, or renting, we're here to help you make the best decision.</p>
                    <div className="cta-buttons">
                        <Link to="/search?status=buy" className="btn btn-accent">Start Searching</Link>
                        <Link to="/contact" className="btn btn-primary" style={{ border: '1px solid white' }}>Contact Us</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
