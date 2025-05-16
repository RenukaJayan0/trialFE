import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const sampleBookData = [
    {
        id: "1",
        title: "Great Big Beautiful Life",
        author: "Emily Henry",
        price: 34.99,
        image: "/abstract-book-cover.png",
        description: "A heartwarming novel about finding joy in unexpected places.",
        category: "Fiction",
        isbn: "978-0593202505",
        pages: 320,
        publisher: "Berkley",
        publicationDate: "2022-05-17",
    },
    {
        id: "2",
        title: "The Let Them Theory",
        author: "Mel Robbins",
        price: 28.98,
        image: "/self-help-book.png",
        description: "A groundbreaking approach to personal development and growth.",
        category: "Self-Help",
        isbn: "978-1984881205",
        pages: 256,
        publisher: "Hay House",
        publicationDate: "2023-10-24",
    },
    {
        id: "3",
        title: "King of Envy",
        author: "Ana Huang",
        price: 16.99,
        image: "/placeholder.svg?key=ap1f3",
        description: "A passionate romance that will keep you turning pages.",
        category: "Romance",
        isbn: "978-1398507117",
        pages: 384,
        publisher: "Piatkus",
        publicationDate: "2023-04-18",
    },
];


const BookDetail = () => {
    const { id } = useParams(); // Get book ID from URL
    const [book, setBook] = useState(null);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        // In a real application, you would fetch book data based on the ID
        const foundBook = sampleBookData.find(b => b.id === id);
        setBook(foundBook);
    }, [id]);

    const handleQuantityChange = (amount) => {
        setQuantity(prevQuantity => Math.max(1, prevQuantity + amount));
    };

    const handleAddToCart = () => {
        if (book) {
            console.log(`Added ${quantity} x "${book.title}" to cart.`);
            alert(`${quantity} x "${book.title}" added to cart! (Simulated)`);
            // In a real application, you would dispatch an action to add to cart state/context
        }
    };

    if (!book) {
        return <div className="container mt-4 text-center">Loading book details...</div>; // Or a proper loading indicator
    }

    return (
        <div className="container mt-4">
            <div className="row">
                {/* Book Image */}
                <div className="col-md-4">
                    <img
                        src={book.image || '/placeholder.svg'}
                        className="img-fluid rounded shadow-sm"
                        alt={book.title}
                    />
                </div>

                {/* Book Details */}
                <div className="col-md-8">
                    <h1>{book.title}</h1>
                    <p className="text-muted lead">{book.author}</p>
                    <p className="fs-4 text-primary mb-3">${book.price.toFixed(2)}</p>
                    <p>{book.description}</p>

                    <hr />

                    <dl className="row">
                        <dt className="col-sm-3">Category</dt>
                        <dd className="col-sm-9">{book.category}</dd>

                        <dt className="col-sm-3">ISBN</dt>
                        <dd className="col-sm-9">{book.isbn}</dd>

                        <dt className="col-sm-3">Pages</dt>
                        <dd className="col-sm-9">{book.pages}</dd>

                        <dt className="col-sm-3">Publisher</dt>
                        <dd className="col-sm-9">{book.publisher}</dd>

                        <dt className="col-sm-3">Publication Date</dt>
                        <dd className="col-sm-9">{book.publicationDate}</dd>
                    </dl>

                    <hr />

                    {/* Quantity Selector */}
                    <div className="mb-3">
                        <label htmlFor="quantity" className="form-label">Quantity</label>
                        <div className="input-group" style={{ width: '150px' }}>
                            <button
                                className="btn btn-outline-secondary"
                                type="button"
                                onClick={() => handleQuantityChange(-1)}
                                disabled={quantity <= 1}
                            >
                                -
                            </button>
                            <input
                                type="text"
                                className="form-control text-center"
                                value={quantity}
                                readOnly
                                style={{ width: '50px' }}
                            />
                            <button
                                className="btn btn-outline-secondary"
                                type="button"
                                onClick={() => handleQuantityChange(1)}
                            >
                                +
                            </button>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="d-grid gap-2 d-md-block">
                        <button
                            className="btn btn-primary me-md-2 mb-2 mb-md-0"
                            type="button"
                            onClick={handleAddToCart}
                        >
                            Add to Cart
                        </button>
                        <Link to="/cart" className="btn btn-outline-secondary">
                            Go to Cart
                        </Link>
                    </div>

                    <div className="mt-3">
                        <Link to="/books" className="text-decoration-none text-muted d-flex align-items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left me-2" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                            </svg>
                            Browse More Books
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetail;