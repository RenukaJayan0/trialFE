import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import React Router components
import Home from './components/Home'; // Import the Home component
import Login from './components/Login'; // Import the Login component
import AdminLogin from './components/AdminLogin'; // Import the AdminLogin componentimport Cart from './components/Cart'; // Import the Cart component
import Payment from './components/Payment'; // Import the Payment component
import Books from './components/Books'; // Import the Books component
import AddBook from './components/AddBook'; // Import the AddBook component
import AdminDashboard from './components/AdminDashboard'; // Import the AdminDashboard component
import UserSettings from './components/UserSettings'; // Import the UserSettings component
import BookDetail from './components/BookDetail'; // Import the BookDetail component
import OrderConfirmation from './components/OrderConfirmation'; // Import the OrderConfirmation component

const rootElement = document.getElementById('root');

const App = () => (
 <BrowserRouter>
 <Routes>
 <Route path="/" element={<Home />} />
 <Route path="/login" element={<Login />} />
 <Route path="/admin" element={<AdminLogin />} /> {/* Add route for AdminLogin */}
 <Route path="/books" element={<Books />} /> {/* Add route for Books */}
 <Route path="/cart" element={<Cart />} /> {/* Add route for Cart */}
 <Route path="/payment" element={<Payment />} /> {/* Add route for Payment */}
 <Route path="/admin/dashboard" element={<AdminDashboard />} /> {/* Add route for AdminDashboard */}
 <Route path="/admin/add-book" element={<AddBook />} /> {/* Add route for AddBook */}
 <Route path="/account/settings" element={<UserSettings />} /> {/* Add route for UserSettings */}
 <Route path="/payment/confirmation" element={<OrderConfirmation />} /> {/* Add route for OrderConfirmation */}
 <Route path="/books/:id" element={<BookDetail />} /> {/* Add route for BookDetail with ID parameter */}
 </Routes>
 </BrowserRouter>
);
// Use createRoot for React 18+ if available, otherwise use ReactDOM.render
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement); // Use createRoot for React 18+
  root.render(<React.StrictMode><App /></React.StrictMode>); // Render the App component
} else {
  console.error('Root element not found');
}