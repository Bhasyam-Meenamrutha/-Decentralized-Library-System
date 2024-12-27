import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddBookPage from './pages/AddBookPage';
import BorrowPage from './pages/BorrowPage';
import MyBorrowedBooksPage from './pages/MyBorrowedBooksPage';
import LendingHistoryPage from './pages/LendingHistoryPage';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add-book" element={<AddBookPage />} />
          <Route path="/borrow/:bookId" element={<BorrowPage />} />
          <Route path="/my-borrowed-books" element={<MyBorrowedBooksPage />} />
          <Route path="/lending-history" element={<LendingHistoryPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
