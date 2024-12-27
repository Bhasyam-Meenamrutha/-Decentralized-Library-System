import React from 'react';
import { Link } from 'react-router-dom';

const BookCard = ({ book }) => {
  return (
    <div className="card">
      <h3>{book.title}</h3>
      <p>Author: {book.author}</p>
      <Link to={`/borrow/${book.id}`}>
        <button>Borrow</button>
      </Link>
    </div>
  );
};

export default BookCard;
