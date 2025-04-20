import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <header className="about-us-header">
        <h1>About Us</h1>
        <p>Get to know more about our company and how we work.</p>
      </header>

      <section className="about-us-section">
        <h2>Our Story</h2>
        <p>
          We started with a vision to revolutionize the real estate market, simplifying the way people buy, sell, and rent properties. Over the years, we have grown into one of the leading platforms for real estate transactions.
        </p>
      </section>

      <section className="about-us-section">
        <h2>Our Vision</h2>
        <p>
          To be the most trusted and innovative real estate platform that helps people make informed decisions with ease, efficiency, and trust.
        </p>
      </section>

      <section className="about-us-section">
        <h2>Our Mission</h2>
        <p>
          Our mission is to provide users with a comprehensive and user-friendly platform to find, buy, sell, or rent real estate, backed by the best customer service and latest technology.
        </p>
      </section>

      <section className="about-us-section">
        <h2>Our Values</h2>
        <ul>
          <li><strong>Integrity:</strong> We believe in transparency and honesty in all our dealings.</li>
          <li><strong>Innovation:</strong> We constantly push the boundaries of technology to make real estate simpler.</li>
          <li><strong>Customer-centricity:</strong> We put our users first, understanding their needs and delivering beyond expectations.</li>
        </ul>
      </section>

      <section className="about-us-section">
        <h2>Meet Our Team</h2>
        <div className="team">
          <div className="team-member">
            <img src="https://via.placeholder.com/150" alt="Team Member" />
            <p><strong>John Doe</strong><br />CEO</p>
          </div>
          <div className="team-member">
            <img src="https://via.placeholder.com/150" alt="Team Member" />
            <p><strong>Jane Smith</strong><br />CTO</p>
          </div>
          <div className="team-member">
            <img src="https://via.placeholder.com/150" alt="Team Member" />
            <p><strong>Robert Brown</strong><br />COO</p>
          </div>
        </div>
      </section>

      <footer className="about-us-footer">
        <p>© 2025 Your Company Name. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default AboutUs;
