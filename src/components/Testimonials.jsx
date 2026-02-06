import React from 'react';
import './Testimonials.css';
import { useLanguage } from '../contexts/LanguageContext';

const Testimonials = () => {
    const { t } = useLanguage();

    const testimonials = [
        {
            text: t('testimonials.t1'),
            author: "Ananya Suresh",
            image: "" // Empty to trigger letter avatar
        },
        {
            text: t('testimonials.t2'),
            author: "Meena Krishnan",
            image: ""
        },
        {
            text: t('testimonials.t3'),
            author: "Arjun Kumar",
            image: ""
        },
        {
            text: t('testimonials.t4'),
            author: "Divya Bharathi",
            image: ""
        }
    ];

    const getInitial = (name) => {
        return name.charAt(0).toUpperCase();
    };

    return (
        <section className="testimonials-section">
            <div className="container">
                <div className="testimonials-header">
                    <span className="section-subtitle-center">{t('testimonials.subtitle')}</span>
                    <h2 className="section-title-center">{t('testimonials.title')}</h2>
                </div>

                <div className="testimonials-grid">
                    {testimonials.map((item, index) => (
                        <div key={index} className="testimonial-card">
                            <div className="quote-icon">&rdquo;</div>
                            <p className="testimonial-text">{item.text}</p>
                            <div className="testimonial-author">
                                {item.image ? (
                                    <img src={item.image} alt={item.author} className="author-img" />
                                ) : (
                                    <div className="author-avatar">
                                        {getInitial(item.author)}
                                    </div>
                                )}
                                <h4 className="author-name">{item.author}</h4>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
