import React, { useEffect, useState } from "react";
import closeIcon from "../../assets/closeBlackIcon.svg";
import "./AdBanner.css";

const AD_STORAGE_KEY = "homeAdClosed";

const AdBanner = () => {
  // Default to hidden until we've checked storage, so a previously-closed ad
  // never flashes on screen before disappearing.
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
        className="ad-banner__close"
        onClick={handleClose}
        aria-label="Close advertisement"
      >
        <img src={closeIcon} alt="" />
      </button>

      <div className="ad-banner__content">
        <div className="ad-banner__image" />
        <div className="ad-banner__text">
          <p className="ad-banner__title">Advertisement</p>
          <p className="ad-banner__subtitle">Sponsored content placeholder</p>
        </div>
        <button type="button" className="ad-banner__cta">
          Open
        </button>
      </div>
    </div>
  );
};

export default AdBanner;
