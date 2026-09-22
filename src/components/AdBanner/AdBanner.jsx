import React, { useEffect, useState } from "react";
import closeIcon from "../../assets/closeBlackIcon.svg";
import adImage from "../../assets/couples.jpeg";
import "./AdBanner.css";

const AD_STORAGE_KEY = "homeAdClosed";

const AdBanner = () => {
  const [isClosed, setIsClosed] = useState(true);

  useEffect(() => {
    const stored = sessionStorage.getItem(AD_STORAGE_KEY);
    setIsClosed(stored === "true");
  }, []);

  const handleClose = () => {
    sessionStorage.setItem(AD_STORAGE_KEY, "true");
    setIsClosed(true);
  };

  if (isClosed) return null;

  return (
    <div className="ad-banner">
      <button
        type="button"
        className="ad-banner-close"
        onClick={handleClose}
        aria-label="Close advertisement"
      >
        <img src={closeIcon} alt="" />
      </button>

      <div className="ad-banner-content">
        <div className="ad-banner-image">
          <img src={adImage} alt="Zaroorat rishta in Pakistan" />
        </div>
        <div className="ad-banner-text">
          <p className="ad-banner-title">Zaroorat rishta in Pakistan</p>
          <p className="ad-banner-subtitle">
            Find your perfect life partner with verified profiles across
            Pakistan. Trusted by thousands of families — start your search today
            and discover meaningful matches near you.
          </p>
        </div>
        <button type="button" className="ad-banner-cta">
          Open
        </button>
      </div>
    </div>
  );
};

export default AdBanner;
