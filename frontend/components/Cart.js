import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Cart = () => {
  // Sample cart data (replace with actual data fetching/management later)
  const [cartItems, setCartItems] = useState([
    {
      id: '1',
      title: 'Great Big Beautiful Life',
      author: 'Emily Henry',
      price: 34.99,
      image: '/abstract-book-cover.png',
      quantity: 1,
    },
    {
      id: '2',
      title: 'Atomic Habits',
      author: 'James Clear',
      price: 19.99,
      image: '/placeholder.svg?key=xg6ed',
      quantity: 2,
    },
  ]);

  const [subtotal, setSubtotal] = useState(0);
  const [tax, setTax] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    calculateTotals();
  }, [cartItems]);

  const calculateTotals = () => {
    let newSubtotal = 0;
    cartItems.forEach(item => {
      newSubtotal += item.price * item.quantity;
    });
    const newTax = newSubtotal * 0.1; // Example tax rate (10%)
    const newTotal = newSubtotal + newTax;

    setSubtotal(newSubtotal);
    setTax(newTax);
    setTotal(newTotal);
  };

  const handleQuantityChange = (id, newQuantity) => {
    const updatedCart = cartItems.map(item =>
      item.id === id ? { ...item, quantity: parseInt(newQuantity, 10) } : item
    );
    setCartItems(updatedCart);
  };

  const handleRemoveItem = (id) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <div className="alert alert-info text-center" role="alert">
          Your cart is empty. <Link to="/books">Continue Shopping</Link>
        </div>
      ) : (
        <div className="row">
          <div className="col-lg-8">
            <div className="card mb-4">
              <div className="card-body">
                {cartItems.map(item => (
                  <div key={item.id} className="row align-items-center mb-3 pb-3 border-bottom">
                    <div className="col-md-2">
                      <img src={item.image} alt={item.title} className="img-fluid rounded" />
                    </div>
                    <div className="col-md-4">
                      <h5 className="card-title mb-1">{item.title}</h5>
                      <p className="card-text text-muted mb-0">{item.author}</p>
                    </div>
                    <div className="col-md-2">
                      <p className="card-text fw-bold">${item.price.toFixed(2)}</p>
                    </div>
                    <div className="col-md-2">
                      <input
                        type="number"
                        className="form-control form-control-sm"
                        value={item.quantity}
                        min="1"
                        onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                      />
                    </div>
                    <div className="col-md-2 text-end">
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => handleRemoveItem(item.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="d-flex justify-content-between">
              <Link to="/books" className="btn btn-outline-primary">Continue Shopping</Link>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title mb-3">Order Summary</h5>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    Subtotal
                    <span>${subtotal.toFixed(2)}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    Tax
                    <span>${tax.toFixed(2)}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center fw-bold">
                    Total
                    <span>${total.toFixed(2)}</span>
                  </li>
                </ul>
                <div className="d-grid gap-2 mt-3">
                  <Link to="/payment" className="btn btn-primary">Proceed to Checkout</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;