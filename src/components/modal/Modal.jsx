import React, { useEffect } from 'react';
import css from './Modal.module.css';

export const Modal = ({ onClose, src, alt }) => {
    const handleOverlayClick = (event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      };
       
      useEffect(() => {
        const handleKeyPress = (event) => {
            if (event.code === "Escape") {
              onClose();
            }
          };

        document.body.style.overflow = 'hidden';
        window.addEventListener('keydown', handleKeyPress);
    
        return () => {
          document.body.style.overflow = 'auto';
          window.removeEventListener('keydown', handleKeyPress);
        };
      }, [onClose]);
    
      return (
        <div className={css.overlay} onClick={handleOverlayClick}>
          <div className={css.modal}>
            <img className={css.modalImg} src={src} alt={alt} />
          </div>
        </div>
      );
    };