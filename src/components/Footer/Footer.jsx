import React from "react";
import "./Footer.css";

import urdubanLogo from "../../assets/urdubanLogo.svg";
import facebookIcon from "../../assets/facebookIcon.svg";
import instaIcon from "../../assets/instaIcon.svg";
import youtubeIcon from "../../assets/youtubeIcon.svg";
import twitterIcon from "../../assets/twitterIcon.svg";
import androidIcon from "../../assets/andriodIcon.svg";
import appleIcon from "../../assets/appleWhiteLogo.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner-section container">
        {/* Footer 1st column */}
        <div className="footer-1st-col">
          <img
            src={urdubanLogo}
            alt="Urban Logo"
            className="footer-site-logo"
          />
          <p>© 2018 Copyright: Urduban</p>
          <p>All Right Reserved.</p>
          <div className="social-icons">
            <img src={facebookIcon} alt="Facebook Icon" />
            <img src={instaIcon} alt="Instagram Icon" />
            <img src={youtubeIcon} alt="Youtube Icon" />
            <img src={twitterIcon} alt="Twitter Icon" />
          </div>
        </div>

        <div className="footer-right-content">
          <div className="gridTwo">
            {/* Footer 2nd column */}
            <div className="footer-1st-col gridBoxTwo">
              <p>Home</p>
              <p>Thesaurus</p>
              <p>Dictionary</p>
              <p>Antonyms</p>
              <p>Word of Day</p>
              <p>Quiz</p>
            </div>

            {/* Footer 3rd column */}
            <div className="footer-1st-col gridBoxTwo">
              <p>About us</p>
              <p>Privacy Policy</p>
              <p>Contact us</p>
              <p>Download Our Mobile App:</p>
              <div className="social-icons">
                <img src={androidIcon} alt="Android Icon" />
                <img src={appleIcon} alt="Apple Icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
