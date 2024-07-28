import React, { useState } from 'react';


const FooterPart = () => {
  const [currentImage, setCurrentImage] = useState(1);
  const totalImages = 21;

  const handlePrev = () => {
    setCurrentImage(prev => (prev > 1 ? prev - 1 : totalImages));
  };

  const handleNext = () => {
    setCurrentImage(prev => (prev < totalImages ? prev + 1 : 1));
  };

  const handleClose = () => {
    // Implement close functionality here
  };

  return (
    <footer>
      <hr />
      <div className="breadcrumb">
        Peru &gt; Lima Province &gt; Jesús María
      </div>
      <hr />

      <h1>Explore other options in and around Lima</h1>

      <div className="options-grid">
        {['Cieneguilla', 'Punta Hermosa', 'Asia', 'Chaclacayo', 'Barranco', 
          'Santiago de Surco', 'San Isidro', 'San Miguel', 'Lunahuaná'].map((place, index) => (
          <div className="option" key={index}>
            <h3>{place}</h3>
            <p>Vacation rentals</p>
          </div>
        ))}
      </div>

      <h2 className="footer_h2">Other types of stays on Airbnb</h2>

      <div className="other-stays">
        <p>Jesús María vacation rentals</p>
        <p>Jesús María monthly stays</p>
        <p>Apartment vacation rentals in Jesús María</p>
        <p>Apartment vacation rentals in Lima Province</p>
      </div>

      <div id="fullGallery" className="full-gallery">
        <div className="gallery-header">
          <button id="closeBtn" className="close-btn" onClick={handleClose}>X Close</button>
          <span id="imageCounter" className="image-counter">{currentImage} / {totalImages}</span>
        </div>
        <div className="gallery-content">
          <button id="prevBtn" className="nav-btn prev-btn" onClick={handlePrev}>&#10094;</button>
          <img id="fullImage" src="" alt="Full size image" />
          <button id="nextBtn" className="nav-btn next-btn" onClick={handleNext}>&#10095;</button>
        </div>
      </div>
    </footer>
  );
};

export default FooterPart;