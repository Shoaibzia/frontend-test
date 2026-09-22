import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/urdubanLogo.svg";
import "./Header.css";

const NAV_ITEMS = [
  { label: "Home", path: "/" },
  { label: "Dictionary", path: "/dictionary" },
  { label: "Thesaurus", path: "/thesaurus" },
  { label: "Synonyms", path: "/synonyms" },
  { label: "Antonyms", path: "/antonyms" },
  { label: "Quiz", path: "/quiz" },
];

const Header = () => {
  // Controls the mobile menu (only matters below 1024px)
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);

  // Close the menu when the user presses Escape
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header className="header">
      <div className="container header-inner">
        <NavLink to="/" onClick={closeMenu}>
          <img src={logo} alt="Urduban Logo" className="urdubanLogo" />
        </NavLink>

        {/* Hamburger button: visible on mobile only (see CSS) */}
        <button
          type="button"
          className={`hamburger ${isOpen ? "hamburger--open" : ""}`}
          onClick={toggleMenu}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          id="primary-navigation"
          className={`navBar container heading-3 ${isOpen ? "navBar--open" : ""}`}
        >
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"} // so "/" isn't active on every page
              className="navBarItem"
              onClick={closeMenu} // close the menu after tapping a link
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
