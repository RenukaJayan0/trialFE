import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Payment = () => {
  // Sample cart items data (replace with actual cart state later)
  const [cartItems, setCartItems] = useState([
    { id: '1', title: 'Great Big Beautiful Life', author: 'Emily Henry', price: 34.99, quantity: 2, image: '/abstract-book-cover.png' },
    { id: '5', title: 'Atomic Habits', author: 'James Clear', price: 19.99, quantity: 1, image: '/placeholder.svg?key=ggpqe' },
  ]);

  const [billingAddress, setBillingAddress] = useState({
    fullName: '',
    address: '',
    city: '',
    state: '',
    zip: '',
  });

  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const handleBillingChange = (e) => {
    setBillingAddress({ ...billingAddress, [e.target.id]: e.target.value });
  };

  const handlePaymentChange = (e) => {
    setPaymentInfo({ ...paymentInfo, [e.target.id]: e.target.value });
  };

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const totalPrice = getCartTotal();
  const shippingCost = totalPrice > 50 ? 0 : 4.99;
  const tax = totalPrice * 0.08; // 8% tax
  const orderTotal = totalPrice + shippingCost + tax;

  const handleCheckout = (e) => {
    e.preventDefault();
    // Basic validation (can be expanded)
    if (
      !billingAddress.fullName ||
      !billingAddress.address ||
      !billingAddress.city ||
      !billingAddress.state ||
      !billingAddress.zip ||
      !paymentInfo.cardNumber ||
      !paymentInfo.expiryDate ||
      !paymentInfo.cvv
    ) {
      alert('Please fill in all fields.');
      return;
    }
    alert('Proceeding to checkout! (Basic alert, actual payment processing and redirection would be here)');
    // In a real app, you would process the payment and then navigate to confirmation
    // navigate('/payment/confirmation');
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Checkout</h1>

      <form onSubmit={handleCheckout}>
        <div className="row">
          <div className="col-md-8">
            {/* Billing Address */}
            <div className="card mb-4">
              <div className="card-header">Billing Address</div>
              <div className="card-body">
                <div className="mb-3">
                  <label htmlFor="fullName" className="form-label">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="fullName"
                    value={billingAddress.fullName}
                    onChange={handleBillingChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="address" className="form-label">Address</label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    value={billingAddress.address}
                    onChange={handleBillingChange}
                    required
                  />
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="city" className="form-label">City</label>
                    <input
                      type="text"
                      className="form-control"
                      id="city"
                      value={billingAddress.city}
                      onChange={handleBillingChange}
                      required
                    />
                  </div>
                  <div className="col-md-4 mb-3">
                    <label htmlFor="state" className="form-label">State</label>
                    <input
                      type="text"
                      className="form-control"
                      id="state"
                      value={billingAddress.state}
                      onChange={handleBillingChange}
                      required
                    />
                  </div>
                  <div className="col-md-2 mb-3">
                    <label htmlFor="zip" className="form-label">Zip</label>
                    <input
                      type="text"
                      className="form-control"
                      id="zip"
                      value={billingAddress.zip}
                      onChange={handleBillingChange}
                      required
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Information */}
            <div className="card mb-4">
              <div className="card-header">Payment Information</div>
              <div className="card-body">
                <div className="mb-3">
                  <label htmlFor="cardNumber" className="form-label">Card Number</label>
                  <input
                    type="text"
                    className="form-control"
                    id="cardNumber"
                    value={paymentInfo.cardNumber}
                    onChange={handlePaymentChange}
                    required
                  />
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="expiryDate" className="form-label">Expiry Date (MM/YY)</label>
                    <input
                      type="text"
                      className="form-control"
                      id="expiryDate"
                      value={paymentInfo.expiryDate}
                      onChange={handlePaymentChange}
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="cvv" className="form-label">CVV</label>
                    <input
                      type="text"
                      className="form-control"
                      id="cvv"
                      value={paymentInfo.cvv}
                      onChange={handlePaymentChange}
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            {/* Order Summary */}
            <div className="card bg-light p-4">
              <h2 className="h5 mb-3">Order Summary</h2>
              {cartItems.map(item => (
                <div key={item.id} className="d-flex justify-content-between text-sm mb-2">
                  <span>{item.title} (x{item.quantity})</span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
              <hr className="my-3" />
              <div className="d-flex justify-content-between text-sm mb-2">
                <span>Subtotal</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="d-flex justify-content-between text-sm mb-2">
                <span>Shipping</span>
                <span>{shippingCost === 0 ? 'Free' : `$${shippingCost.toFixed(2)}`}</span>
              </div>
              <div className="d-flex justify-content-between text-sm mb-3">
                <span>Tax</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <hr className="my-3" />
              <div className="d-flex justify-content-between font-weight-bold mb-4">
                <span>Total</span>
                <span>${orderTotal.toFixed(2)}</span>
              </div>
              <button type="submit" className="btn btn-dark btn-block">Place Order</button>
              <p className="text-muted text-center mt-3 mb-0 text-sm">Free shipping on orders over $50</p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Payment;