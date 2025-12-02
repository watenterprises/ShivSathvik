import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const isActive = (path) => {
        return location.pathname === path ? 'active' : '';
    };

    return (
        <nav className="navbar">
            <div className="container navbar-content">
                <Link to="/" className="logo">
                    ShivSathvik <span></span>
                </Link>

                <div className={`nav-links-container ${isMenuOpen ? 'open' : ''}`}>
                    <ul className="nav-links">
                        <li><Link to="/" className={`nav-link ${isActive('/')}`}>Home</Link></li>
                        <li><Link to="/about" className={`nav-link ${isActive('/about')}`}>About</Link></li>
                        <li><Link to="/projects" className={`nav-link ${isActive('/projects')}`}>Projects</Link></li>
                        <li><Link to="/blog" className={`nav-link ${isActive('/blog')}`}>Blog</Link></li>
                        <li><Link to="/testimonials" className={`nav-link ${isActive('/testimonials')}`}>Testimonials</Link></li>
                        <li><Link to="/contact" className={`nav-link ${isActive('/contact')}`}>Contact</Link></li>
                        <li><Link to="/admin" className={`nav-link ${isActive('/admin')}`}>Admin</Link></li>
                    </ul>
                </div>

                <div className="nav-actions">
                    <button className="btn btn-accent">List Property</button>
                    <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        ☰
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
