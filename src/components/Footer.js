import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            {/* Logo and About Section */}
            <div className="col-md-4 mb-3" id='logo-section'>
              <h4 className="footer-brand">Shakya's ShopCart</h4>
              <p className="footer-description">
                Based in the heart of Nepal, Shakya's ShopCart is your trusted e-commerce platform, offering the best deals for quality products. 
                Proudly supporting local businesses and providing global reach, we bring a blend of tradition and modernity to every purchase.
              </p>
            </div>

            {/* Quick Links Section */}
            <div className="col-md-3 mb-4" id='quick-links'>
              <h5 className="footer-title">Quick Links</h5>
              <ul className="footer-links list-unstyled">
              <li> <Link to="/" className="footer-link" onClick={() => window.scrollTo(0, 0)}> Home </Link> </li>
                <li><Link to="/shop" className="footer-link">Shop</Link></li>
                <li><Link to="/aboutus" className="footer-link" onClick={() => window.scrollTo(0, 0)}>  About Us</Link></li>
                <li><Link to="/contact" className="footer-link">Contact</Link></li>
                <li><Link to="/faq" className="footer-link">FAQ</Link></li>
              </ul>
            </div>

            {/* Contact Section */}
            <div className="col-md-4 mb-4">
              <h5 className="footer-title">Contact Us</h5>
              <p className="footer-contact">
                <i className="fas fa-envelope"></i> support@shopcart.com
              </p>
              <p className="footer-contact" id='phone'>
                <i className="fas fa-phone"></i> +977 9861953035
              </p>
              <p className="footer-contact">
                <i className="fas fa-map-marker-alt"></i> Balkumari, Patan, Nepal
              </p>
              <div className="social-icons">
                <a href="https://facebook.com" className="social-link" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://twitter.com" className="social-link" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://www.instagram.com/wamiqagabbi/" className="social-link" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://linkedin.com" className="social-link" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="footer-bottom">
        <div className="container">
          <p className="text-center color-white">
            &copy; 2025 Shakya's ShopCart. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
