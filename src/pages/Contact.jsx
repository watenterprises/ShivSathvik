import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-page">
            <div className="container">
                <div className="contact-grid">
                    <div className="contact-info">
                        <h2>Get in Touch</h2>
                        <div className="info-item">
                            <h3>Visit Us</h3>
                            <p>123, Brigade Road, Shanthala Nagar,<br />Ashok Nagar, Bengaluru, Karnataka 560025</p>
                        </div>
                        <div className="info-item">
                            <h3>Call Us</h3>
                            <p>+91 98765 43210</p>
                            <p>+91 80 1234 5678</p>
                        </div>
                        <div className="info-item">
                            <h3>Email Us</h3>
                            <p>info@jsrealitygroup.com</p>
                            <p>sales@jsrealitygroup.com</p>
                        </div>
                    </div>

                    <div className="contact-form">
                        <form>
                            <div className="form-group">
                                <label>Name</label>
                                <input type="text" placeholder="Your Name" />
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" placeholder="Your Email" />
                            </div>
                            <div className="form-group">
                                <label>Message</label>
                                <textarea placeholder="How can we help you?"></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
