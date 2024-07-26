import React from 'react';

const Section1left = ({ imageSrc }) => {
  return (
    <div className="section1_left-column">
      <div className="section1_image-wrapper">
        {imageSrc ? (
          <img
            className="section1_img"
            id="section1_img1"
            src={imageSrc}
            alt="Main bedroom view"
          />
        ) : (
          <p>No image available</p>
        )}
      </div>
    </div>
  );
};

export default Section1left;


