import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Rent.css';
import PaymentButton from "../components/PaymentButton";


const Rent = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProperties = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/properties');
            console.log('API Response:', response.data); // Log the response
            if (Array.isArray(response.data)) {
              setProperties(response.data);
            } else {
              setError('API did not return an array of properties');
            }
          } catch (err) {
            setError('Error fetching properties');
            console.error('Error fetching properties:', err);
          } finally {
            setLoading(false);
          }
    };

    fetchProperties();
  }, []);

  if (loading) {
    return <div>Loading properties...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <div className="property-list">
        {properties.length === 0 ? (
          <p>No properties available.</p>
        ) : (
          properties.map((property) => (
            <div key={property._id} className="property-card">
              <img
                src={property.images[0] || 'default-image.jpg'} // Default image if no property images
                alt={property.title}
                className="property-image"
              />
              <div className="property-details">
                <h3>{property.title}</h3>
                <p>{property.description}</p>
                <p><strong>Category:</strong> {property.category}</p>
                <p><strong>Location:</strong> {property.location}</p>
                <p><strong>Price:</strong> ${property.price}</p>
                <p><strong>Contact:</strong> {property.contact}</p>
                {/* <button className="buy-button">Rent Now</button> */}
                <PaymentButton />
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Rent;
