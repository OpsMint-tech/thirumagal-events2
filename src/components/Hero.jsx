import React from 'react';
import './Hero.css';

import hero1 from '../assets/hero-1.webp';
import hero2 from '../assets/hero-2.webp';
import hero3 from '../assets/hero-3.webp';
import { useLanguage } from '../contexts/LanguageContext';

const images = [
    hero1,
    hero2,
    hero3
];

const Hero = () => {
    const { t } = useLanguage();
    const [currentIndex, setCurrentIndex] = React.useState(0);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section id="home" className="hero">
            <div className="hero-background">
                {images.map((img, index) => (
                    <div
                        key={index}
                        className={`hero-slide ${index === currentIndex ? 'active' : ''}`}
                        style={{ backgroundImage: `url(${img})` }}
                    />
                ))}
                <div className="hero-overlay"></div>
            </div>

            <div className="hero-content">
                <h1 className="hero-title">
                    {t('hero.title')}
                </h1>
                <p className="hero-subtitle">
                    {t('hero.subtitle')}
                </p>
                <div className="hero-buttons">
                    <button className="btn btn-primary" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
                        {t('hero.planBtn')} <span className="material-symbols-outlined icon-right">arrow_forward</span>
                    </button>
                    <button className="btn btn-outline" onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}>
                        {t('hero.learnBtn')} <span className="material-symbols-outlined icon-right">arrow_forward</span>
                    </button>
                </div>
            </div>
        </section >
    );
};

export default Hero;
