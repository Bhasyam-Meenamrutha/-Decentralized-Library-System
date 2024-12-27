import React, { useState } from 'react';

const AddBookForm = () => {
  const [bookData, setBookData] = useState({
    title: '',
    author: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookData({ ...bookData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('New Book Added:', bookData);
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        name="title"
        placeholder="Book Title"
        value={bookData.title}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="author"
        placeholder="Author"
        value={bookData.author}
        onChange={handleChange}
        required
      />
      <textarea
        name="description"
        placeholder="Description"
        value={bookData.description}
        onChange={handleChange}
      ></textarea>
      <button type="submit">Add Book</button>
    </form>
  );
};

export default AddBookForm;
