import React from 'react';

const MyBorrowedBooksPage = () => {
  // Sample data for borrowed books
  const borrowedBooks = [
    {
      id: 1,
      title: 'Blockchain Basics',
      author: 'John Doe',
      dueDate: '2024-12-31',
    },
    {
      id: 2,
      title: 'Solidity Essentials',
      author: 'Jane Smith',
      dueDate: '2025-01-10',
    },
  ];

  return (
    <div>
      <header>
        <h2>My Borrowed Books</h2>
      </header>
      <div>
        {borrowedBooks.length > 0 ? (
          borrowedBooks.map((book) => (
            <div className="card" key={book.id}>
              <h3>{book.title}</h3>
              <p>Author: {book.author}</p>
              <p>Due Date: {book.dueDate}</p>
            </div>
          ))
        ) : (
          <p>You have not borrowed any books yet.</p>
        )}
      </div>
    </div>
  );
};

export default MyBorrowedBooksPage;
