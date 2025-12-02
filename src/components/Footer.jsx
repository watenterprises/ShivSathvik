import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <h3>ShivSathvik <span>Construction, Interior & Realtors</span></h3>
                        <p>Your trusted real estate partner in Bangalore. Excellence in property solutions since 2010.</p>
                    </div>
                    <div className="footer-links">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Properties</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div className="footer-links">
                        <h4>Locations</h4>
                        <ul>
                            <li><a href="#">Koramangala</a></li>
                            <li><a href="#">Indiranagar</a></li>
                            <li><a href="#">Whitefield</a></li>
                            <li><a href="#">HSR Layout</a></li>
                        </ul>
                    </div>
                    <div className="footer-links">
                        <h4>Contact Us</h4>
                        <ul>
                            <li>info@company.com</li>
                            <li>+91 xxxxx xxxxx</li>
                            <li>Bangalore, Karnataka</li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2025 Classic Realtors. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
