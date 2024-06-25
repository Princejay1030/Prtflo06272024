import React from 'react';
import './LightBox.css';
import close from '../../assets/img/close-menu.svg';

function LightBox({ isOpen, image, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <div className="lightbox-close" onClick={onClose}><img src={close} alt="" /></div>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <img src={image} alt="lightbox" />
      </div>
    </div>
  );
}

export default LightBox
