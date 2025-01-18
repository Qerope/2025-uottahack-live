import React from 'react';
import './ContactView.css';

const ContactView: React.FC = () => {
    return (
        <div id="contact-view">
            <h1 className="contact-title">Contact</h1>

            <div className="contact-content">
                <div className="contact-text">
                    <div className="contact-section">
                        <h2>Have a question?</h2>
                        <p>All answers will be answered through the Discord!</p>
                    </div>
                    
                    <div className="contact-section">
                        <h2>Emergency Phone Numbers</h2>
                        <p>Campus Security: (613) 562 - 5411</p>
                    </div>

                    <div className="contact-section">
                        <h2>For Life Threatening Issues</h2>
                        <p>Emergency Services: 911</p>
                    </div>
                </div>

                <div className="contact-image">
                    <img src={require('../assets/gang.svg').default} alt="Contact Illustration" />
                </div>
            </div>
        </div>
    );
};

export default ContactView;