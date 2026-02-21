import React from 'react';
import './FloatingButtons.css';

const FloatingButtons = () => {
    return (
        <div className="floating-container">
            <a
                href="https://wa.me/919488730758"
                className="floating-btn whatsapp-btn"
                target="_blank"
                rel="noopener noreferrer"
                title="Chat on WhatsApp"
            >
                <i className="fa-brands fa-whatsapp"></i>
            </a>
            <a
                href="tel:+919842930758"
                className="floating-btn phone-btn"
                title="Call Us"
            >
                <span className="material-symbols-outlined">call</span>
            </a>
        </div>
    );
};

export default FloatingButtons;
