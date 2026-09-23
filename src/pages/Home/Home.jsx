import React, { useState, useCallback } from "react";
import LanguageBar from "../../components/LanguageBar/LanguageBar";
import SearchBar from "../../components/SearchBar/SearchBar";
import AdBanner from "../../components/AdBanner/AdBanner";
import androidIcon from "../../assets/playStoreIcon.svg";
import appleIcon from "../../assets/appleWhiteLogo.svg";
import emailImage from "../../assets/email.png";
import wordCardsData from "../../data/wordCards.json";
import "./Home.css";
import WordSlider from "../../components/WordSlider/WordSlider";

const Home = () => {
  const [filteredCards, setFilteredCards] = useState(wordCardsData);

  const handleSearch = useCallback((query) => {
    const trimmed = query.trim().toLowerCase();

    if (trimmed === "") {
      setFilteredCards(wordCardsData);
      return;
    }

    const results = wordCardsData.filter((card) =>
      card.word.toLowerCase().includes(trimmed),
    );
    setFilteredCards(results);
  }, []);

  return (
    <>
      <section className="hero-section">
        <div className="inner-hero-section">
          <LanguageBar />
          <SearchBar onSearch={handleSearch} />
          <AdBanner />
        </div>
      </section>
      <div className="content-section container">
        <div className="content-grid">
          {/* Left column: word cards */}
          <div className="word-cards-col">
            {filteredCards?.length > 0 ? (
              filteredCards?.map((card) => (
                <div className="word-card" key={card.id}>
                  <div className="word-card-top">
                    <h1 className="word-heading heading-1 color-primary font-bold">
                      {card.type}: {card.word}
                    </h1>
                    <p className="word-meaning body-text">{card.description}</p>
                  </div>
                  <p className="word-meaning-urdu">{card.meaningUrdu}</p>
                </div>
              ))
            ) : (
              <p className="word-meaning">No results found.</p>
            )}
          </div>

          {/* Right column: app download + email promo */}
          <div className="side-col">
            <div className="app-download-card">
              <div className="app-download-header heading-4">
                Download Our Mobile App!
              </div>
              <div className="app-download-body">
                {/* android card */}
                <div className="app-card color-bg">
                  <img
                    src={androidIcon}
                    alt="Android Icon"
                    className="app-card-icon"
                  />
                  <div className="app-card-text">
                    <p className="app-card-label">GET IT ON</p>
                    <p className="app-card-title">Google play</p>
                  </div>
                </div>
                {/* Apple card */}
                <div className="app-card color-bg">
                  <img
                    src={appleIcon}
                    alt="Apple Icon"
                    className="app-card-icon"
                  />
                  <div className="app-card-text">
                    <p className="app-card-label">Download on the</p>
                    <p className="app-card-title">App Store</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="email-promo">
              <img
                src={emailImage}
                alt="Email Logo"
                className="email-promo-img"
              />
              <div className="email-promo-text-wrap">
                <p className="email-promo-text heading-3 font-bold">
                  Want to automate your emails?
                </p>
              </div>
              <button
                className="email-promo-button heading-2 font-bold"
                onClick={() => {
                  alert("Email mode activated!");
                }}
              >
                TRY IT FOR FREE
              </button>
            </div>

            {/* Other words card */}
            <div className="other-words-card">
              <p className="other-words-title font-bold">Other Words!</p>
              <div className="other-words-list">
                <p className="other-word-item font-normal heading-2">
                  Welcoming
                </p>
                <p className="other-word-item font-normal heading-2">Well</p>
                <p className="other-word-item font-normal heading-2">
                  Wellness
                </p>
                <p className="other-word-item font-normal heading-2">
                  Welcomes
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Slider */}
        <WordSlider />
      </div>
    </>
  );
};

export default Home;
