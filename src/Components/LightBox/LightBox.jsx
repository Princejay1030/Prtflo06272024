import React from 'react';
import './LightBox.css';
import Close from '../../assets/img/Close.svg';

function LightBox({ isOpen, image, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <div className="lightbox-close" onClick={onClose}><img src={Close} alt="Close" /></div>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <img src={image} alt="lightbox" />
      </div>
    </div>
  );
}

export default LightBox
