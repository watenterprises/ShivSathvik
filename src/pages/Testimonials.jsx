import React from 'react';
import './Testimonials.css';

const TESTIMONIALS = [
    {
        id: 1,
        name: "Rahul Sharma",
        role: "Homeowner",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
        text: "JS Reality Group made finding my dream home in Whitefield incredibly easy. Their team was professional, transparent, and understood exactly what I was looking for."
    },
    {
        id: 2,
        name: "Priya Patel",
        role: "Tenant",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
        text: "I was new to Bangalore and struggling to find a good apartment. JS Reality Group helped me find a perfect 2BHK in Indiranagar within a week. Highly recommended!"
    },
    {
        id: 3,
        name: "Vikram Singh",
        role: "Property Investor",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
        text: "I've been investing in real estate for years, and JS Reality Group is by far the best agency I've worked with. Their market insights are unmatched."
    }
];

const Testimonials = () => {
    return (
        <div className="testimonials-page">
            <div className="container">
                <h2 className="section-title">What Our Clients Say</h2>
                <p className="section-subtitle">Read about the experiences of people who found their perfect property with us.</p>

                <div className="testimonials-grid">
                    {TESTIMONIALS.map(testimonial => (
                        <div key={testimonial.id} className="testimonial-card">
                            <img src={testimonial.image} alt={testimonial.name} className="testimonial-avatar" />
                            <p className="testimonial-text">"{testimonial.text}"</p>
                            <h4 className="testimonial-author">{testimonial.name}</h4>
                            <span className="testimonial-role">{testimonial.role}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
