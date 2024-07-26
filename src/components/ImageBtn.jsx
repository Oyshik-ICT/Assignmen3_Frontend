import React, { useState } from 'react';

const ImageBtn = ({ images }) => {
  const [showFullGallery, setShowFullGallery] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const showAllPhotos = () => {
    setShowFullGallery(true);
  };

  const closeGallery = () => {
    setShowFullGallery(false);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <>
      <button className="img_button" onClick={showAllPhotos}>
        <span className="button-icon"></span>
        <span className="button-text">Show all photos</span>
      </button>

      {showFullGallery && (
        <div id="fullGallery" className="full-gallery" style={{ display: 'block' }}>
          <div className="gallery-header">
            <button id="closeBtn" className="close-btn" onClick={closeGallery}>X Close</button>
            <span id="imageCounter" className="image-counter">{currentIndex + 1} / {images.length}</span>
          </div>
          <div className="gallery-content">
            <button id="prevBtn" className="nav-btn prev-btn" onClick={prevImage}>&#10094;</button>
            <img id="fullImage" src={images[currentIndex]} alt={`Full size image ${currentIndex + 1}`} />
            <button id="nextBtn" className="nav-btn next-btn" onClick={nextImage}>&#10095;</button>
          </div>
        </div>
      )}
    </>
  );
};

export default ImageBtn;