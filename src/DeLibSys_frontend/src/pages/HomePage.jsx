import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="home-container">
      <header>
        <h1>Decentralized Library System</h1>
        <p>Manage book lending and borrowing on-chain.</p>
      </header>
      <nav className="navigation">
        <Link to="/add-book" className="nav-link">Add New Book</Link>
        <Link to="/my-borrowed-books" className="nav-link">My Borrowed Books</Link>
        <Link to="/lending-history" className="nav-link">Lending History</Link>
      </nav>
      <section className="info-section">
        <h2>Welcome to the Decentralized Library</h2>
        <p>
          Use this platform to add books to the library, borrow books, and view lending history. All transactions are securely logged on the blockchain.
        </p>
        <div className="actions">
          <Link to="/add-book" className="button">Add a Book</Link>
          <Link to="/my-borrowed-books" className="button">View Borrowed Books</Link>
          <Link to="/lending-history" className="button">View Lending History</Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
