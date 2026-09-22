import React from "react";
import "./Footer.css";

import urdubanLogo from "../../assets/urdubanLogo.svg";
import facebookIcon from "../../assets/facebookIcon.svg";
import instaIcon from "../../assets/instaIcon.svg";
import youtubeIcon from "../../assets/youtubeIcon.svg";
import twitterIcon from "../../assets/twitterIcon.svg";
import androidIcon from "../../assets/andriodIcon.svg";
import appleIcon from "../../assets/appleWhiteLogo.svg";
import footerLinks from "../../data/footerLinks.json";

const socialLinks = [
  { id: 1, icon: facebookIcon, alt: "Facebook Icon", url: "#" },
  { id: 2, icon: instaIcon, alt: "Instagram Icon", url: "#" },
  { id: 3, icon: youtubeIcon, alt: "Youtube Icon", url: "#" },
  { id: 4, icon: twitterIcon, alt: "Twitter Icon", url: "#" },
];

const appLinks = [
  { id: 1, icon: androidIcon, alt: "Android Icon", url: "#" },
  { id: 2, icon: appleIcon, alt: "Apple Icon", url: "#" },
];

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
            {socialLinks.map((social) => (
              <a href={social.url} key={social.id} aria-label={social.alt}>
                <img src={social.icon} alt={social.alt} />
              </a>
            ))}
          </div>
        </div>

        <div className="footer-right-content">
          <div className="gridTwo">
            {/* Footer 2nd column */}
            <div className="footer-1st-col gridBoxTwo">
              {footerLinks.column1.map((link) => (
                <a href={link.url} key={link.id}>
                  {link.label}
                </a>
              ))}
            </div>

            {/* Footer 3rd column */}
            <div className="footer-1st-col gridBoxTwo">
              {footerLinks.column2.map((link) => (
                <a href={link.url} key={link.id}>
                  {link.label}
                </a>
              ))}
              <p>Download Our Mobile App:</p>
              <div className="social-icons">
                {appLinks.map((app) => (
                  <a href={app.url} key={app.id} aria-label={app.alt}>
                    <img src={app.icon} alt={app.alt} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
