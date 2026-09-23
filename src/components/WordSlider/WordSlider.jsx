import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import commonWords from "../../data/commonWords.json";
import "./WordSlider.css";

const WordSlider = () => {
  const [cards, setCards] = useState(commonWords);
  const sliderRef = useRef(null);

  const handleRemove = (id) => {
    setCards((prev) => prev.filter((card) => card.id !== id));
  };

  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 400,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="word-slider">
      <div className="word-slider-header">
        <h1 className="heading-1 font-bold">Most Common Words:</h1>
        <div className="word-slider-arrows">
          <button
            className="word-slider-arrow"
            onClick={() => sliderRef.current?.slickPrev()}
            aria-label="Previous"
          >
            <svg width="10" height="16" viewBox="0 0 10 16" fill="none">
              <path
                d="M9 1L2 8L9 15"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            className="word-slider-arrow"
            onClick={() => sliderRef.current?.slickNext()}
            aria-label="Next"
          >
            <svg width="10" height="16" viewBox="0 0 10 16" fill="none">
              <path
                d="M1 1L8 8L1 15"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      <Slider ref={sliderRef} {...settings} className="word-slider-track">
        {cards.map((card) => (
          <div key={card.id} className="word-slider-slide">
            <div className="word-slider-card">
              <button
                className="word-slider-card-close"
                onClick={() => handleRemove(card.id)}
                aria-label="Dismiss"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M1 1L13 13M13 1L1 13"
                    stroke="#9ca3af"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
              <p className="word-slider-card-title">{card.title}</p>
              <p className="word-slider-card-desc">{card.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default WordSlider;
