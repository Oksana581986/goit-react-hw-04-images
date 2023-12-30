import React from 'react';
import css from './ImageGalleryItem.module.css';


const ImageGalleryItem = ({ src, alt, onClick }) => {
  return (
    <li className={css.galleryItem} onClick={onClick}>
      <img className={css.galleryImg} src={src} alt={alt} />
    </li>
  );
};


  export { ImageGalleryItem };
  