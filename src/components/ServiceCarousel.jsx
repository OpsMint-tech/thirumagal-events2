import React from 'react';
import './ServiceCarousel.css';
import birthdayImg from '../assets/decor-birthday.jpg';
import weddingImg from '../assets/decor-wedding.jpg';
import stageImg from '../assets/decor-stage.jpg';
import entranceImg from '../assets/decor-entrance.jpg';
import engagementImg from '../assets/decor-engagement.jpg';
import housewarmingImg from '../assets/decor-housewarming.jpg';
import pubertyImg from '../assets/decor-puberty.jpg';
import balloonImg from '../assets/decor-balloon.jpg';
import corporateImg from '../assets/decor-corporate.jpg';
import garlandImg from '../assets/decor-garland.jpg';
import { useLanguage } from '../contexts/LanguageContext';

const ServiceCarousel = () => {
    const { t } = useLanguage();

    const services = [
        {
            title: t('carousel.items.birthday.title'),
            price: "₹10,000 - ₹15,000",
            unit: t('carousel.unit'),
            description: t('carousel.items.birthday.desc'),
            image: birthdayImg
        },
        {
            title: t('carousel.items.wedding.title'),
            price: "₹50,000 - ₹1,50,000",
            unit: t('carousel.unit'),
            description: t('carousel.items.wedding.desc'),
            image: weddingImg
        },
        {
            title: t('carousel.items.stage.title'),
            price: "₹15,000 - ₹35,000",
            unit: t('carousel.unit'),
            description: t('carousel.items.stage.desc'),
            image: stageImg
        },
        {
            title: t('carousel.items.entrance.title'),
            price: "₹8,000 - ₹20,000",
            unit: t('carousel.unit'),
            description: t('carousel.items.entrance.desc'),
            image: entranceImg
        },
        {
            title: t('carousel.items.engagement.title'),
            price: "₹20,000 - ₹45,000",
            unit: t('carousel.unit'),
            description: t('carousel.items.engagement.desc'),
            image: engagementImg
        },
        {
            title: t('carousel.items.housewarming.title'),
            price: "₹12,000 - ₹25,000",
            unit: t('carousel.unit'),
            description: t('carousel.items.housewarming.desc'),
            image: housewarmingImg
        },
        {
            title: t('carousel.items.puberty.title'),
            price: "₹15,000 - ₹30,000",
            unit: t('carousel.unit'),
            description: t('carousel.items.puberty.desc'),
            image: pubertyImg
        },
        {
            title: t('carousel.items.balloon.title'),
            price: "₹5,000 - ₹12,000",
            unit: t('carousel.unit'),
            description: t('carousel.items.balloon.desc'),
            image: balloonImg
        },
        {
            title: t('carousel.items.corporate.title'),
            price: "₹30,000 - ₹80,000",
            unit: t('carousel.unit'),
            description: t('carousel.items.corporate.desc'),
            image: corporateImg
        },
        {
            title: t('carousel.items.pool.title'),
            price: "₹20,000 - ₹40,000",
            unit: t('carousel.unit'),
            description: t('carousel.items.pool.desc'),
            image: garlandImg
        }
    ];

    return (
        <section id="shop" className="service-carousel-section">
            <div className="container">
                <div className="carousel-header">
                    <span className="section-subtitle">{t('carousel.subtitle')}</span>
                    <h2 className="section-title">{t('carousel.title')}</h2>
                    <p className="section-description">{t('carousel.desc')}</p>
                </div>

                <div className="carousel-container">
                    <div className="carousel-track">
                        {services.map((service, index) => (
                            <div key={index} className="service-card-v2">
                                <div className="card-image">
                                    <img src={service.image} alt={service.title} />
                                    <div className="card-price-tag">{service.price}</div>
                                </div>
                                <div className="card-content">
                                    <h3 className="card-title">{service.title}</h3>
                                    <span className="card-unit">{service.unit}</span>
                                    <p className="card-text">{service.description}</p>
                                    <button className="btn-text" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
                                        {t('carousel.bookBtn')} <span className="material-symbols-outlined">arrow_forward</span>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceCarousel;
