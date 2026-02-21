import React, { useState } from 'react';
import './Contact.css';
import { useLanguage } from '../contexts/LanguageContext';

const Contact = () => {
    const { t } = useLanguage();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        eventType: '',
        message: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Construct the WhatsApp message
        const message = `*New Event Inquiry from Website*%0A%0A` +
            `*Name:* ${formData.name}%0A` +
            `*Email:* ${formData.email}%0A` +
            `*Phone:* ${formData.phone}%0A` +
            `*Address:* ${formData.address}%0A` +
            `*Event Type:* ${formData.eventType}%0A` +
            `*Message:* ${formData.message}`;

        // WhatsApp number: 919488730758
        const whatsappUrl = `https://wa.me/919488730758?text=${message}`;

        // Redirect to WhatsApp
        window.open(whatsappUrl, '_blank');

        // Optional: show local success message
        // alert(t('contact.success'));
    };

    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <div className="contact-grid">
                    <div className="contact-info">
                        <span className="section-subtitle">{t('contact.subtitle')}</span>
                        <h2 className="section-title">{t('contact.title')}</h2>
                        <p className="contact-description">
                            {t('contact.desc')}
                        </p>

                        <div className="contact-details">
                            <div className="contact-item">
                                <span className="material-symbols-outlined contact-icon">location_on</span>
                                <div>
                                    <h4>{t('contact.visit')}</h4>
                                    <p>{t('contact.addressVal')}</p>
                                </div>
                            </div>
                            <div className="contact-item">
                                <span className="material-symbols-outlined contact-icon">call</span>
                                <div>
                                    <h4>{t('contact.call')}</h4>
                                    <p>{t('contact.phoneVal1')}<br />{t('contact.phoneVal2')}</p>
                                </div>
                            </div>
                            <div className="contact-item">
                                <span className="material-symbols-outlined contact-icon">mail</span>
                                <div>
                                    <h4>{t('contact.email')}</h4>
                                    <p>{t('contact.emailVal')}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form-wrapper">
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder={t('contact.name')}
                                    className="form-input"
                                    required
                                    value={formData.name}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder={t('contact.emailPlh')}
                                    className="form-input"
                                    required
                                    value={formData.email}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder={t('contact.phone')}
                                    className="form-input"
                                    required
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="address"
                                    placeholder={t('contact.address')}
                                    className="form-input"
                                    required
                                    value={formData.address}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <select
                                    name="eventType"
                                    className="form-input form-select"
                                    required
                                    value={formData.eventType}
                                    onChange={handleInputChange}
                                >
                                    <option value="" disabled>{t('contact.eventType')}</option>
                                    <option value="Wedding">{t('contact.wedding')}</option>
                                    <option value="Corporate Event">{t('contact.corporate')}</option>
                                    <option value="Birthday Party">{t('contact.birthday')}</option>
                                    <option value="Other">{t('contact.other')}</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <textarea
                                    name="message"
                                    placeholder={t('contact.msg')}
                                    className="form-input form-textarea"
                                    required
                                    value={formData.message}
                                    onChange={handleInputChange}
                                ></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary submit-btn">
                                {t('contact.sendBtn')} <span className="material-symbols-outlined icon-right">send</span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <div className="contact-map">
                <iframe
                    src="https://maps.google.com/maps?q=6/186%20kavindapady%20main%20road,%20Kalingarayan%20Palayam,%20Bhavani,%20Erode,%20Tamil%20Nadu&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="50%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Our Location"
                ></iframe>
            </div>
        </section>
    );
};

export default Contact;


// import React, { useState } from 'react';
// import './Contact.css';
// import { useLanguage } from '../contexts/LanguageContext';

// const Contact = () => {
//     const { t } = useLanguage();

//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         phone: '',
//         address: '',
//         eventType: '',
//         message: ''
//     });

//     const [success, setSuccess] = useState(false);

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setFormData(prev => ({
//             ...prev,
//             [name]: value
//         }));
//     };

//     // const handleSubmit = (e) => {
//     //     e.preventDefault();

//     //     // ✅ Client-side success only
//     //     setSuccess(true);

//     //     // Reset form
//     //     setFormData({
//     //         name: '',
//     //         email: '',
//     //         phone: '',
//     //         address: '',
//     //         eventType: '',
//     //         message: ''
//     //     });

//     //     // Hide success message after 2 seconds
//     //     setTimeout(() => {
//     //         setSuccess(false);
//     //     }, 2000);
//     // };
//     const handleSubmit = (e) => {
//         e.preventDefault();

//         const message = `
// New Event Inquiry from Website

// Name: ${formData.name}
// Email: ${formData.email}
// Phone: ${formData.phone}
// Address: ${formData.address}
// Event Type: ${formData.eventType}
// Message: ${formData.message}
//     `;

//         const encodedMessage = encodeURIComponent(message);

//         const whatsappUrl = `https://wa.me/919488730758?text=${encodedMessage}`;

//         // ✅ Open WhatsApp (REQUIRED to send message)
//         window.open(whatsappUrl, '_blank');

//         // Show success message
//         setSuccess(true);

//         // Reset form
//         setFormData({
//             name: '',
//             email: '',
//             phone: '',
//             address: '',
//             eventType: '',
//             message: ''
//         });

//         // Hide success message after 2 seconds
//         setTimeout(() => {
//             setSuccess(false);
//         }, 2000);
//     };

//     return (
//         <section id="contact" className="contact-section">
//             <div className="container">
//                 <div className="contact-grid">

//                     <div className="contact-info">
//                         <span className="section-subtitle">{t('contact.subtitle')}</span>
//                         <h2 className="section-title">{t('contact.title')}</h2>
//                         <p className="contact-description">
//                             {t('contact.desc')}
//                         </p>
//                     </div>

//                     <div className="contact-form-wrapper">

//                         {success && (
//                             <p className="success-message">
//                                 ✅ Your message has been submitted successfully!
//                             </p>
//                         )}

//                         <form className="contact-form" onSubmit={handleSubmit}>
//                             <input
//                                 type="text"
//                                 name="name"
//                                 placeholder={t('contact.name')}
//                                 required
//                                 value={formData.name}
//                                 onChange={handleInputChange}
//                             />

//                             <input
//                                 type="email"
//                                 name="email"
//                                 placeholder={t('contact.emailPlh')}
//                                 required
//                                 value={formData.email}
//                                 onChange={handleInputChange}
//                             />

//                             <input
//                                 type="tel"
//                                 name="phone"
//                                 placeholder={t('contact.phone')}
//                                 required
//                                 value={formData.phone}
//                                 onChange={handleInputChange}
//                             />

//                             <input
//                                 type="text"
//                                 name="address"
//                                 placeholder={t('contact.address')}
//                                 required
//                                 value={formData.address}
//                                 onChange={handleInputChange}
//                             />

//                             <select
//                                 name="eventType"
//                                 required
//                                 value={formData.eventType}
//                                 onChange={handleInputChange}
//                             >
//                                 <option value="" disabled>
//                                     {t('contact.eventType')}
//                                 </option>
//                                 <option value="Wedding">{t('contact.wedding')}</option>
//                                 <option value="Corporate">{t('contact.corporate')}</option>
//                                 <option value="Birthday">{t('contact.birthday')}</option>
//                                 <option value="Other">{t('contact.other')}</option>
//                             </select>

//                             <textarea
//                                 name="message"
//                                 placeholder={t('contact.msg')}
//                                 required
//                                 value={formData.message}
//                                 onChange={handleInputChange}
//                             />

//                             <button type="submit" className="btn btn-primary">
//                                 {t('contact.sendBtn')}
//                             </button>
//                         </form>

//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Contact;
