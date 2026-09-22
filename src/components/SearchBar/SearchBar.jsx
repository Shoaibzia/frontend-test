import React, { useState } from "react";
import searchIcon from "../../assets/searchBlackIcon.svg";
import "./SearchBar.css";

const SearchBar = () => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: wire up real search once the dictionary API/route exists
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        className="search-bar__input heading-3"
        placeholder="Welcome"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit" className="search-bar__button" aria-label="Search">
        <img src={searchIcon} alt="" />
      </button>
    </form>
  );
};

export default SearchBar;
