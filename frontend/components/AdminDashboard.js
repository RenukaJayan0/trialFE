import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const sampleBooks = [
    { id: 1, title: "Great Big Beautiful Life", author: "Emily Henry", price: 34.99, stock: 50 },
    { id: 2, title: "Atomic Habits", author: "James Clear", price: 19.99, stock: 120 },
    { id: 3, title: "The Silent Patient", author: "Alex Michaelides", price: 24.99, stock: 75 },
];

const sampleUsers = [
    { id: 101, name: "Alice Smith", email: "alice.smith@example.com", role: "Customer" },
    { id: 102, name: "Bob Johnson", email: "bob.j@example.com", role: "Customer" },
    { id: 103, name: "Charlie Brown", email: "charlie.b@example.com", role: "Admin" },
];

const AdminDashboard = () => {
    const [books, setBooks] = useState(sampleBooks);
    const [users, setUsers] = useState(sampleUsers);

    const handleEditBook = (bookId) => {
        alert(`Edit book with ID: ${bookId}`);
        // Implement actual edit logic later
    };

    const handleDeleteBook = (bookId) => {
        alert(`Delete book with ID: ${bookId}`);
        setBooks(books.filter(book => book.id !== bookId));
        // Implement actual delete logic later
    };

    const handleEditUser = (userId) => {
        alert(`Edit user with ID: ${userId}`);
        // Implement actual edit logic later
    };

    const handleDeleteUser = (userId) => {
        alert(`Delete user with ID: ${userId}`);
        setUsers(users.filter(user => user.id !== userId));
        // Implement actual delete logic later
    };

    return (
        <div className="container mt-4">
            <h1 className="mb-4">Admin Dashboard</h1>

            {/* Stats Cards */}
            <div className="row row-cols-1 row-cols-md-3 g-4 mb-5">
                <div className="col">
                    <div className="card text-white bg-primary mb-3">
                        <div className="card-body">
                            <h5 className="card-title">Total Books</h5>
                            <p className="card-text display-4">{books.length}</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card text-white bg-success mb-3">
                        <div className="card-body">
                            <h5 className="card-title">Total Users</h5>
                            <p className="card-text display-4">{users.length}</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card text-white bg-warning mb-3">
                        <div className="card-body">
                            <h5 className="card-title">Orders Today (Placeholder)</h5>
                            <p className="card-text display-4">15</p> {/* Placeholder data */}
                        </div>
                    </div>
                </div>
            </div>

            {/* Manage Books Section */}
            <div className="card mb-5">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h2 className="h5 mb-0">Manage Books</h2>
                    <Link to="/admin/add-book" className="btn btn-dark btn-sm">Add New Book</Link>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Title</th>
                                    <th scope="col">Author</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Stock</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {books.map((book, index) => (
                                    <tr key={book.id}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{book.title}</td>
                                        <td>{book.author}</td>
                                        <td>${book.price.toFixed(2)}</td>
                                        <td>{book.stock}</td>
                                        <td>
                                            <button className="btn btn-sm btn-outline-primary me-2" onClick={() => handleEditBook(book.id)}>Edit</button>
                                            <button className="btn btn-sm btn-outline-danger" onClick={() => handleDeleteBook(book.id)}>Delete</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="text-end mt-3">
                        <Link to="/books" className="btn btn-outline-secondary btn-sm">View All Books</Link>
                    </div>
                </div>
            </div>

            {/* Manage Users Section */}
            <div className="card mb-5">
                <div className="card-header">
                    <h2 className="h5 mb-0">Manage Users</h2>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Role</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user, index) => (
                                    <tr key={user.id}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.role}</td>
                                        <td>
                                            <button className="btn btn-sm btn-outline-primary me-2" onClick={() => handleEditUser(user.id)}>Edit</button>
                                            <button className="btn btn-sm btn-outline-danger" onClick={() => handleDeleteUser(user.id)}>Delete</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="text-end mt-3">
                         {/* Assuming there will be a separate page for managing all users */}
                        <Link to="/admin/users" className="btn btn-outline-secondary btn-sm">View All Users</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;