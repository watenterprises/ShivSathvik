import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about-page">
            <div className="container">
                <div className="about-content">
                    <div className="about-text">
                        <h2>Redefining Real Estate in Bangalore</h2>
                        <p>
                            Founded in 2010, JS Reality Group has been at the forefront of the real estate revolution in Bangalore.
                            We believe that finding a home is more than just a transaction; it's about finding your place in the world.
                        </p>
                        <p>
                            Our team of experienced professionals is dedicated to providing you with the most accurate market insights,
                            premium property listings, and a seamless buying or renting experience.
                        </p>
                        <div className="stats-grid">
                            <div className="stat-item">
                                <span className="stat-number">15+</span>
                                <span className="stat-label">Years Experience</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">5000+</span>
                                <span className="stat-label">Happy Families</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">100+</span>
                                <span className="stat-label">Awards Won</span>
                            </div>
                        </div>
                    </div>
                    <div className="about-image">
                        <img
                            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                            alt="Modern Office Building"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
