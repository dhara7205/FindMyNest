import React from 'react';
import './Home.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="home-hero">
        <div className="overlay">
          <h1 className="hero-title">Find Your Perfect Nest</h1>
        </div>
      </div>

      {/* Navbar Section */}
      <div className="mid-navbar">
        <Container className="text-center">
          <Row className="justify-content-center">
            <Col md="auto">
              <Link to="/buy" className="nav-option">BUY</Link>
            </Col>
            <Col md="auto">
              <Link to="/rent" className="nav-option">RENT</Link>
            </Col>
            <Col md="auto">
              <Link to="/sell" className="nav-option">SELL</Link>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Home;
