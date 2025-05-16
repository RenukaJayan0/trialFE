import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Bookstore</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              {/* Replace a with Link */}
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/books">Books</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cart">Cart</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/account/settings">Account</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="jumbotron text-center bg-light py-5">
        <div className="container">
          <h1 className="display-4">Welcome to Our Bookstore</h1>
          <p className="lead">Find your next favorite read.</p>
          {/* Replace a with Link */}
          <Link to="/books" className="btn btn-primary btn-lg">Browse Books</Link>
        </div>
      </section>

      {/* Featured Books (Example - replace with dynamic data later) */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-4">Featured Books</h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card h-100">
                <img src="/public/fantasy-book.png" className="card-img-top" alt="Book Cover" />
                <div className="card-body">
                  <h5 className="card-title">Fantasy Adventure</h5>
                  <p className="card-text">An epic journey into a world of magic.</p>
                  {/* Replace a with Link */}
                  <Link to="/books/detail" className="btn btn-secondary">View Details</Link>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100">
                <img src="/public/self-help-book.png" className="card-img-top" alt="Book Cover" />
                <div className="card-body">
                  <h5 className="card-title">Self-Help Guide</h5>
                  <p className="card-text">Improve your life with practical advice.</p>
                  {/* Replace a with Link */}
                  <Link to="/books/detail" className="btn btn-secondary">View Details</Link>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100">
                <img src="/public/abstract-book-cover.png" className="card-img-top" alt="Book Cover" />
                <div className="card-body">
                  <h5 className="card-title">Abstract Concepts</h5>
                  <p className="card-text">Explore complex ideas in a simple way.</p>
                  {/* Replace a with Link */}
                  <Link to="/books/detail" className="btn btn-secondary">View Details</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-light text-center text-lg-start mt-auto">
        <div className="text-center p-3">
          © 2023 Bookstore
        </div>
      </footer>
    </div>
  );
};

export default Home;