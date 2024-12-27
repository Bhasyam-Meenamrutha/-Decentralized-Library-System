import React, { useState } from 'react';

const BorrowForm = () => {
  const [userData, setUserData] = useState({
    userId: '',
    duration: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Book Borrowed:', userData);
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        name="userId"
        placeholder="Your User ID"
        value={userData.userId}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="duration"
        placeholder="Borrow Duration (days)"
        value={userData.duration}
        onChange={handleChange}
        required
      />
      <button type="submit">Borrow Book</button>
    </form>
  );
};

export default BorrowForm;
