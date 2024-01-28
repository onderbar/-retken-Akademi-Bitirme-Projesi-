import React from 'react';
import './İcon.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Icon = () => {
  return (
    <div className="right-widget">
      <a href="https://wa.me/904443042" target="_blank" className="request">
        <span className="icon-container">
          <FontAwesomeIcon icon={faWhatsapp} className="icon" />
        </span>
        <span className="text">WhatsApp İhbar</span>
      </a>
    </div>
  );
};

export default Icon;
