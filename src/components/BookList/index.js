import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { addBook } from "~/store/modules/books/actions";

const BookList = () => {
  const [newBook, setNewBook] = useState("");

  const dispatch = useDispatch();
  const books = useSelector(state => state.books);

  function handleSubmit(e) {
    e.preventDefault();

    dispatch(addBook(newBook));
    setNewBook("");
  }

  return (
    <form onSubmit={handleSubmit} data-testid="book-form">
      <ul data-testid="book-list">
        {books.map(book => (
          <li key={book}>{book}</li>
        ))}
      </ul>

      <label htmlFor="book">Book</label>
      <input
        type="text"
        id="book"
        value={newBook}
        onChange={e => setNewBook(e.target.value)}
      />

      <button>Adicionar</button>
    </form>
  );
};

export default BookList;
