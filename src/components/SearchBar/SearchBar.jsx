import React, { useState, useEffect, useRef } from "react";
import searchIcon from "../../assets/searchBlackIcon.svg";
import closeIcon from "../../assets/closeBlackIcon.svg";
import "./SearchBar.css";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const debounceTimer = useRef(null);

  useEffect(() => {
    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current);
    }

    debounceTimer.current = setTimeout(() => {
      onSearch(query);
    }, 500);

    return () => clearTimeout(debounceTimer.current);
  }, [query, onSearch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current);
    }
    onSearch(query);
  };

  const handleClear = () => {
    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current);
    }
    setQuery("");
    onSearch("");
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <div className="search-bar-input-wrapper">
        <input
          type="text"
          className="search-bar-input heading-3"
          placeholder="Welcome"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Search input"
        />

        {query?.length > 0 && (
          <button
            type="button"
            className="search-bar-clear"
            onClick={handleClear}
            aria-label="Clear search"
            title="Clear search"
          >
            <img src={closeIcon} alt="Clear search" />
          </button>
        )}
      </div>

      <button
        type="submit"
        className="search-bar-button"
        aria-label="Search"
        title="Search"
      >
        <img src={searchIcon} alt="Search" />
      </button>
    </form>
  );
};

export default SearchBar;
