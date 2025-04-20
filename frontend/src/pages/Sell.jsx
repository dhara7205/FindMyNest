import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import navigate hook
import axios from 'axios';
import './Sell.css'; // Create this for styling

const Sell = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    price: '',
    location: '',
    contact: '',
    images: [''], // array of image URLs
  });

  const [message, setMessage] = useState('');
  const navigate = useNavigate(); // Initialize navigate

  // Check if the user is logged in
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login'); // Redirect to login if no token
    }
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Handle multiple image URLs (only one for now)
    if (name === 'images') {
      setFormData({ ...formData, images: [value] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem('token'); // Assuming you store token locally after login

      const res = await fetch(`${import.meta.env.VITE_API_BASE}/properties/create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      if (res.status === 201) {
        setMessage('Property added successfully!');
        setFormData({
          title: '',
          description: '',
          category: '',
          price: '',
          location: '',
          contact: '',
          images: [''],
        });
      }
      else{
        setMessage('Failed to add Property.');
      }
    } catch (err) {
      console.error(err);
      setMessage('Failed to add property. Make sure you are logged in.');
    }
  };

  return (
    <div className="sell-container">
      <h2>Add Property for Sale</h2>
      {message && <p className="message">{message}</p>}
      <form onSubmit={handleSubmit} className="sell-form">
        <input type="text" name="title" placeholder="Title" value={formData.title} onChange={handleChange} required />
        <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} required />
        <input type="text" name="category" placeholder="Category" value={formData.category} onChange={handleChange} required />
        <input type="number" name="price" placeholder="Price" value={formData.price} onChange={handleChange} required />
        <input type="text" name="location" placeholder="Location" value={formData.location} onChange={handleChange} required />
        <input type="text" name="contact" placeholder="Contact Number" value={formData.contact} onChange={handleChange} required />
        <input type="text" name="images" placeholder="Image URL (optional)" value={formData.images[0]} onChange={handleChange} />
        <button type="submit">Add Property</button>
      </form>
    </div>
  );
};

export default Sell;
