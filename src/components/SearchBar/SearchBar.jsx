import React, { useState, useEffect, useRef } from "react";
import searchIcon from "../../assets/searchBlackIcon.svg";
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

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        className="search-bar-input heading-3"
        placeholder="Welcome"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit" className="search-bar-button" aria-label="Search">
        <img src={searchIcon} alt="" />
      </button>
    </form>
  );
};

export default SearchBar;
