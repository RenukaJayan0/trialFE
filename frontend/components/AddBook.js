import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const AddBook = () => {
    const [bookDetails, setBookDetails] = useState({
        title: '',
        author: '',
        price: '',
        image: '',
        description: '',
        category: '',
        stock: ''
    });

    // Sample data for potential editing functionality (as in the original JS)
    const sampleBookDetails = {
        title: "Example Book Title",
        author: "Example Author",
        price: 29.99,
        image: "/placeholder.jpg",
        description: "This is an example book description.",
        category: "Fiction",
        stock: 50
    };

    // Example of how you might populate the form for editing
    // useEffect(() => {
    //     setBookDetails(sampleBookDetails);
    // }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setBookDetails({ ...bookDetails, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // For now, just show an alert as in the original code
        alert('Book details submitted! (Actual add/edit logic would be here)');
        console.log('Submitted Book Details:', bookDetails);
        // In a real application, you would send this data to your backend
    };

    return (
        <div className="container mt-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h1>Add/Edit Book</h1>
                <Link to="/admin/dashboard" className="btn btn-outline-secondary">
                    Back to Dashboard
                </Link>
            </div>

            <div className="row">
                {/* Book Cover Placeholder/Upload */}
                <div className="col-md-4">
                    <div className="card text-center p-3 h-100">
                        <div className="d-flex justify-content-center align-items-center mb-3" style={{ minHeight: '200px', border: '1px dashed #ccc', borderRadius: '5px' }}>
                            {bookDetails.image ? (
                                <img src={bookDetails.image} alt="Book Cover" className="img-fluid" style={{ maxHeight: '200px' }} />
                            ) : (
                                <span className="text-muted">Book Cover Placeholder</span>
                            )}
                        </div>
                        <input type="file" className="form-control" onChange={(e) => {
                            // Handle file upload - for now, just set a placeholder image
                            if (e.target.files && e.target.files[0]) {
                                // In a real app, you'd upload the image and get a URL
                                setBookDetails({...bookDetails, image: URL.createObjectURL(e.target.files[0])});
                            }
                        }} />
                    </div>
                </div>

                {/* Book Details Form */}
                <div className="col-md-8">
                    <div className="card p-4">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="title" className="form-label">Title</label>
                                <input type="text" className="form-control" id="title" name="title" value={bookDetails.title} onChange={handleInputChange} required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="author" className="form-label">Author</label>
                                <input type="text" className="form-control" id="author" name="author" value={bookDetails.author} onChange={handleInputChange} required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="price" className="form-label">Price</label>
                                <input type="number" className="form-control" id="price" name="price" value={bookDetails.price} onChange={handleInputChange} step="0.01" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="category" className="form-label">Category</label>
                                <input type="text" className="form-control" id="category" name="category" value={bookDetails.category} onChange={handleInputChange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="stock" className="form-label">Stock Quantity</label>
                                <input type="number" className="form-control" id="stock" name="stock" value={bookDetails.stock} onChange={handleInputChange} required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="description" className="form-label">Description</label>
                                <textarea className="form-control" id="description" name="description" value={bookDetails.description} onChange={handleInputChange} rows="4"></textarea>
                            </div>
                            <button type="submit" className="btn btn-dark">Save Book</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddBook;