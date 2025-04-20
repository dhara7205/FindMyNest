import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-light py-4">
      <div className="containerabc">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <h5>Contact Us</h5>
            <p>
              <strong>Email:</strong> support@findmynest.com<br />
              <strong>Phone:</strong> +1 (800) 123-4567<br />
              <strong>Address:</strong> 123 FindMyNest St, City, Country
            </p>
          </div>

          <div className="col-lg-4 col-md-6">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-light">Home</a></li>
              <li><a href="/AboutUs" className="text-light">About Us</a></li>
              <li><a href="/contact" className="text-light">Contact</a></li>
              <li><a href="/terms" className="text-light">Terms & Conditions</a></li>
            </ul>
          </div>

          <div className="col-lg-4 col-md-6">
            <h5>Follow Us</h5>
            <div className="social-icons">
              <a href="#" className="text-light me-3">
                <i className="bi bi-facebook"></i> Facebook
              </a>
              <a href="#" className="text-light me-3">
                <i className="bi bi-twitter"></i> Twitter
              </a>
              <a href="#" className="text-light">
                <i className="bi bi-instagram"></i> Instagram
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-4">
        <p>&copy; 2025 FindMyNest. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
