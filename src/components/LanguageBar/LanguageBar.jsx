import React, { useState } from "react";
import dropdownArrow from "../../assets/dropdownWhiteArrow.svg";
import rightArrow from "../../assets/rightWhiteArrowWithTail.svg";
import "./LanguageBar.css";

// Static list for now
const LANGUAGES = ["English", "Urdu", "Arabic"];

const LanguageBar = () => {
  const [openSide, setOpenSide] = useState(null);
  const [fromLang, setFromLang] = useState("English");
  const [toLang, setToLang] = useState("Urdu");

  const toggleDropdown = (side) => {
    setOpenSide((prev) => (prev === side ? null : side));
  };

  return (
    <div className="language-bar">
      {/* FROM language */}
      <div className="language-bar__item">
        <button
          type="button"
          className="language-bar__button"
          onClick={() => toggleDropdown("from")}
        >
          <span>{fromLang}</span>
          <img src={dropdownArrow} alt="" className="language-bar__chevron" />
        </button>

        {openSide === "from" && (
          <ul className="language-bar__dropdown">
            {LANGUAGES.map((lang) => (
              <li key={lang}>
                <button
                  type="button"
                  onClick={() => {
                    setFromLang(lang);
                    setOpenSide(null);
                  }}
                >
                  {lang}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Direction indicator */}
      <img src={rightArrow} alt="" className="language-bar__direction" />

      {/* TO language */}
      <div className="language-bar__item">
        <button
          type="button"
          className="language-bar__button"
          onClick={() => toggleDropdown("to")}
        >
          <span>{toLang}</span>
          <img src={dropdownArrow} alt="" className="language-bar__chevron" />
        </button>

        {openSide === "to" && (
          <ul className="language-bar__dropdown">
            {LANGUAGES.map((lang) => (
              <li key={lang}>
                <button
                  type="button"
                  onClick={() => {
                    setToLang(lang);
                    setOpenSide(null);
                  }}
                >
                  {lang}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default LanguageBar;
