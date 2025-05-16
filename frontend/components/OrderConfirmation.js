import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const OrderConfirmation = () => {
  const [orderNumber, setOrderNumber] = useState('');
  const [estimatedDelivery, setEstimatedDelivery] = useState('');

  useEffect(() => {
    // Generate a random order number (similar to the original script)
    const generateOrderNumber = () => {
      return 'ORD-' + Math.random().toString(36).substr(2, 9).toUpperCase();
    };

    // Calculate estimated delivery date (similar to the original script)
    const calculateEstimatedDelivery = () => {
      const today = new Date();
      const deliveryDate = new Date(today);
      deliveryDate.setDate(today.getDate() + 5); // Estimate 5 days for delivery

      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      return deliveryDate.toLocaleDateString(undefined, options);
    };

    setOrderNumber(generateOrderNumber());
    setEstimatedDelivery(calculateEstimatedDelivery());
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div className="container mt-5">
      <div className="text-center mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" className="bi bi-check-circle text-success mb-3" viewBox="0 0 16 16">
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
          <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 10.97a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-.93m9.208-10.415-1.061-1.06L7.5 8.939l-2.122-2.122a.75.75 0 0 0-1.06 1.06L6.439 10l3.147-3.146a.75.75 0 0 0 0-1.061z"/>
        </svg>
        <h1 className="mb-3 text-success">Thank You for Your Order!</h1>
        <p className="lead">Your order has been placed successfully.</p>
        {orderNumber && <p className="mb-4">Your Order Number is: <strong>{orderNumber}</strong></p>}
      </div>

      <div className="card p-4 mb-4">
        <h2 className="h5 mb-3">Order Details</h2>
        <p>Estimated Delivery: <strong>{estimatedDelivery}</strong></p>
        {/* Additional order details can be added here */}
      </div>

      <div className="card p-4">
        <h2 className="h5 mb-3">What's Next?</h2>
        <div className="d-grid gap-3">
          <Link to="/books" className="btn btn-dark">Continue Shopping</Link>
          {/* Replace with actual order history route when available */}
          <Link to="#" className="btn btn-outline-secondary">View Order History</Link>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;