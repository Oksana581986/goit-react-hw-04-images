import React from 'react';
import { ImageGalleryItem } from "components/imageGalleryItem/ImageGalleryItem";
import css from './ImageGallery.module.css';


const ImageGallery = ({ images, onImageClick }) => {
  return (
    <ul className={css.galleryList}>
      {images.map((image) => (
        <ImageGalleryItem
          key={image.id}
          src={image.webformatURL}
          alt=""
          onClick={() => onImageClick(image.largeImageURL)}
        />
      ))}
    </ul>
  );
};


  export { ImageGallery };