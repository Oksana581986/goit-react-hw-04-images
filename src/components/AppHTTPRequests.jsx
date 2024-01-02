import React, { useState, useEffect } from 'react';
import { Searchbar } from "components/searchbar/Searchbar";
import { Button } from "components/button/Button";
import { ImageGallery } from "components/imageGallery/ImageGallery";
import { Loader } from "components/loader/Loader";
import { Modal } from "components/modal/Modal";
import axios from "axios";


const API_KEY = "40580008-174d380b9c70d9faabd5ad5fa";
const BASE_URL = 'https://pixabay.com/api/';

export const AppHTTPRequests = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [error, setError] = useState(null);

 
  useEffect(() => {
    if (!query) return; 
    const fetchImages = async () => {
        try {
        setIsLoading(true);
        const response = await axios.get(`${BASE_URL}?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`);
        setImages((images) => [...images, ...response.data.hits]);
      } catch (error) {
        console.error(error);
        setError('Error fetching images. Please try again.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();

    }, [query, page]);


  const handleSearch = (newQuery) => {
    setQuery(newQuery);
    setPage(1);
    setImages([]);
    setError(null);
  };

  const handleLoadMore = () => {
    setPage((page) => page + 1);
  };

  const handleImageClick = (src) => {
    setSelectedImage(src);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <Searchbar onSubmit={handleSearch} />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ImageGallery images={images} onImageClick={handleImageClick} />
      {isLoading && <Loader />}
      {images.length > 0 && <Button onClick={handleLoadMore} isHidden={isLoading} />}
      {selectedImage && <Modal onClose={closeModal} src={selectedImage} alt="" />}
    </div>
  );
}

   
  

