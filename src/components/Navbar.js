import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaUserCircle, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import "./styles/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to toggle menu state
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      {/* Brand + Burger Menu */}
      <div className="d-flex align-items-center">
        <button
          className="burger-menu d-lg-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes size={24} color="white" /> : <FaBars size={24} color="white" />}
        </button>
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <span className="brandlogo">Shakya's Shopcart</span>
        </Link>
      </div>

      {/* Links Section - Toggle on click */}
      <ul className={`nav ${menuOpen ? "nav-active" : ""}`}>

      <li className="nav-item">
      <Link to="/" className="nav-link" onClick={() => { closeMenu(); window.scrollTo(0, 0); }}>
      Home
      </Link>
        </li>

        <li className="nav-item">
          <Link to="/aboutus" className="nav-link" onClick={closeMenu}>
            About Us
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/deals" className="nav-link" onClick={closeMenu}>
            Deals
          </Link>
        </li>
       
        <li className="nav-item">
          <Link to="/delivery" className="nav-link" onClick={closeMenu}>
            Delivery
          </Link>
        </li>
      </ul>

      {/* Actions Section */}
      <div className="d-flex align-items-center navbar-actions">
        {/* Search Bar */}
        <form className="d-flex me-3" id="search-form">
          <input className="form-control" type="search" placeholder="Search Product" aria-label="Search" />
          <button className="btn btn-outline-success ms-2" type="submit">
            <FaSearch />
          </button>
        </form>

        {/* Icons */}
        <Link to="/account" className="account-icon me-3">
          <FaUserCircle size={24} />
        </Link>
        <Link to="/cart" className="cart-icon">
          <FaShoppingCart size={24} />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
