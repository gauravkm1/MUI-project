import React from 'react';
import { Link } from 'react-router-dom';
import './global.css';
import { ClassNames } from '@emotion/react';

const Contact: React.FC = () => {
  return (
    <div className='gbody'>
      <head>
        <title>Contact page</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/global.css" />
      </head>
      <body>
        <div className="contact-info desig" style={{ float: 'left' }}>
          <a href="tel:8115684000">
            <h3>Gaurav Mishra</h3>
            <p>8115684593</p>
          </a>
          <a href="tel:8115684000">
            <h3>Utkarsh Tiwari</h3>
            <p>8784858689</p>
          </a>
        </div>

        <div className="Gauravmap">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31105.865626813065!2d77.70112701342084!3d12.956924016637945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae13b4551d0957%3A0x597894d77e1e4919!2sMarathahalli%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1697833526761!5m2!1sen!2sin"
            width="250"
            height="50"
            style={{ border: '2' }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </body>
    </div>
  );
};

export default Contact;
