import React, { useState, useEffect } from 'react';
import { Heart, Share } from 'lucide-react';

const Section1 = ({ propertyInfo }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const savedState = localStorage.getItem('heartSaved') === 'true';
    setIsSaved(savedState);
  }, []);

  const toggleSave = () => {
    const newSavedState = !isSaved;
    setIsSaved(newSavedState);
    localStorage.setItem('heartSaved', newSavedState.toString());
  };

  const displayShare = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("URL copied to clipboard!");
  };

  return (
    <div className="section1">
      <h2 id="section1_h1">Comfy New Apt. in Pueblo Libre!</h2>
      <div className="section1__action-buttons">
        <button className="section1__action-btn section1__share-btn" id="section1__share-btn_id" onClick={displayShare}>
          <Share size={16} />
          Share
        </button>
        <button className="section1__action-btn section1__save-btn" id="heartButton" onClick={toggleSave}>
          <Heart size={16} fill={isSaved ? 'red' : 'none'} />
          Save
        </button>
      </div>
      
      {isModalOpen && (
        <div id="shareModal" className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <div className="share-title">Share this place</div>
            <div className="share-description">
              <img src="images/section1_img1.jpg" alt="Thumbnail" id="share_img" />
              <div>
                <strong id="modal-content_country">{propertyInfo?.location || 'Entire rental unit in Limpa, Peru'}</strong><br />
                {propertyInfo?.isNew ? '★ New · ' : ''}
                {propertyInfo?.details || '2 guests · 1 bedroom · 1 bed · 1 bath'}
              </div>
            </div>
            <div className="share-options">
              <div className="share-option" onClick={copyToClipboard}>
                <i className="fa-solid fa-copy"></i>
                <div className="share_txt">Copy Link</div>
              </div>
              <div className="share-option">
                <i className="fa-solid fa-envelope"></i>
                <div className="share_txt">Email</div>
              </div>
              <div className="share-option">
                <i className="fa-solid fa-message"></i>
                <div className="share_txt">Messages</div>
              </div>
              <div className="share-option">
                <i className="fa-brands fa-square-whatsapp"></i>
                <div className="share_txt">WhatsApp</div>
              </div>
              <div className="share-option">
                <i className="fa-brands fa-facebook-messenger"></i>
                <div className="share_txt">Messenger</div>
              </div>
              <div className="share-option">
                <i className="fa-brands fa-square-facebook"></i>
                <div className="share_txt">Facebook</div>
              </div>
              <div className="share-option">
                <i className="fa-brands fa-square-x-twitter"></i>
                <div className="share_txt">Twitter</div>
              </div>
              <div className="share-option">
                <i className="fa-solid fa-code"></i>
                <div className="share_txt">Embed</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Section1;