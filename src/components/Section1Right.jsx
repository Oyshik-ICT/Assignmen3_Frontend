import React, { useState } from 'react';

const Section1Right = ({ images }) => {
  const [showAllImages, setShowAllImages] = useState(false);

  const renderImage = (imageSrc, index) => {
    return (
      <div key={index} className="section1_image-wrapper">
        <img
          className="section1_img"
          src={imageSrc}
          alt={`Image ${index + 2}`}
          id={`section1_img${index + 2}`}
        />
      </div>
    );
  };

  const renderLastImage = () => {
    const additionalImagesCount = images.length - 3;
    if (additionalImagesCount > 0) {
      return (
        <div 
          className="section1_image-wrapper section1_last-image"
          onClick={() => setShowAllImages(true)}
        >
          <img
            className="section1_img"
            src={images[3]}
            alt="More images"
          />
        </div>
      );
    }
    return renderImage(images[3], 3);
  };

  const renderAllImages = () => (
    <div className="section1_all-images">
      {images.map((image, index) => renderImage(image, index))}
      <button onClick={() => setShowAllImages(false)}>Close</button>
    </div>
  );

  if (showAllImages) {
    return renderAllImages();
  }

  return (
    <div className="section1_right-column">
      <div className="section1_right-row">
        {images[0] && renderImage(images[0], 0)}
        {images[1] && renderImage(images[1], 1)}
      </div>
      <div className="section1_right-row">
        {images[2] && renderImage(images[2], 2)}
        {images.length > 3 && renderLastImage()}
      </div>
    </div>
  );
};

export default Section1Right;