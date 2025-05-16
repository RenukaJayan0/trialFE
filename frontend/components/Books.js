import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

// Sample book data (replace with data fetched from your backend later)
const initialBooks = [
    {
        id: 'book123',
        title: 'Great Big Beautiful Life',
        author: 'Emily Henry',
        price: '$34.99',
        image: '/abstract-book-cover.png',
        category: 'Romance',
    },
    {
        id: 'book456',
        title: 'Atomic Habits',
        author: 'James Clear',
        price: '$19.99',
        image: '/placeholder.svg?key=xg6ed',
        category: 'Self-Help',
    },
    {
        id: 'book789',
        title: 'The Silent Patient',
        author: 'Alex Michaelides',
        price: '$24.99',
        image: '/placeholder.svg?key=b9jcr',
        category: 'Fiction',
    },
    {
        id: 'book101',
        title: 'Fantasy Book',
        author: 'Fantasy Author',
        price: '$29.99',
        image: '/fantasy-book.png',
        category: 'Fiction',
    },
    {
        id: 'book102',
        title: 'Self-Help Book',
        author: 'Self-Help Guru',
        price: '$15.99',
        image: '/self-help-book.png',
        category: 'Self-Help',
    },
    // Add more book data as needed
];

const Books = () => {
    const [books, setBooks] = useState(initialBooks);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');

    const categories = ['All', ...new Set(initialBooks.map(book => book.category))];

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    useEffect(() => {
        // Filter books based on search term and selected category
        const filtered = initialBooks.filter(book => {
            const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                  book.author.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesCategory = selectedCategory === 'All' || book.category === selectedCategory;
            return matchesSearch && matchesCategory;
        });
        setBooks(filtered);
    }, [searchTerm, selectedCategory]);

    return (
        <div className="container mt-4">
            <h1 className="mb-4">Books</h1>

            <div className="row mb-4">
                <div className="col-md-6">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search for books..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                </div>
                <div className="col-md-6">
                    <div className="dropdown">
                        <button
                            className="btn btn-secondary dropdown-toggle"
                            type="button"
                            id="categoryDropdown"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            Category: {selectedCategory}
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="categoryDropdown">
                            {categories.map(category => (
                                <li key={category}>
                                    <button
                                        className="dropdown-item"
                                        onClick={() => handleCategoryChange(category)}
                                    >
                                        {category}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <div className="row row-cols-1 row-cols-md-3 g-4">
                {books.map(book => (
                    <div key={book.id} className="col">
                        <div className="card h-100 overflow-hidden">
                            <img src={book.image} className="card-img-top" alt={book.title} />
                            <div className="card-body">
                                <h5 className="card-title">{book.title}</h5>
                                <p className="card-text text-muted">{book.author}</p>
                                <p className="card-text fw-bold">{book.price}</p>
                                <Link to={`/books/${book.id}`} className="btn btn-dark w-100">
                                    View Details
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Books;