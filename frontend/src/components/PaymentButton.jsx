import React from 'react';
import './PaymentButton.css';

const PaymentButton = () => {
  const handlePayment = () => {
    const options = {
      key: 'rzp_test_YourKey', // Razorpay test key (you can use a mock key for now)
      amount: 50000, // Payment amount in the smallest currency unit (e.g., paise for INR, cents for USD)
      currency: 'INR',
      name: 'Your Website Name',
      description: 'Demo Payment',
      image: 'https://your-logo-url.com/logo.png',
      handler: function (response) {
        alert('Payment successful! Payment ID: ' + response.razorpay_payment_id);
      },
      prefill: {
        name: 'Customer Name',
        email: 'customer@example.com',
        contact: '9876543210',
      },
      notes: {
        address: 'Customer Address',
      },
      theme: {
        color: '#3399cc',
      },
      modal: {
        ondismiss: function () {
          alert('Payment dismissed!');
        },
      },
      error: function (error) {
        alert('Payment failed: ' + error.description);
      },
    };

    try {
      const rzp1 = new window.Razorpay(options);
      rzp1.open();
    } catch (error) {
      console.error('Razorpay script failed to load:', error);
      alert('Failed to load Razorpay. Please try again.');
    }
  };

  return (
    <button onClick={handlePayment} className="payment-button">
      Buy Now
    </button>
  );
};

export default PaymentButton;
