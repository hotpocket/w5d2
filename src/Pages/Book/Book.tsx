// import React from "react";
import { useState, useEffect } from "react";
import "./Book.css";
import bookData from "../../Data/books.json";
import Book from "../../Components/Book/Book";

// const Book = ({ isbn, title }: BookProps) => {
const BookPage = () => {
  const [books, setBooks] = useState(bookData);
  useEffect(
    () => {
      console.log("App component mounted!");
      // myBooks = go fetch some data from some api... and load it here
      // setBooks(myBooks);
    },
    [] // if this array is missing we will get an infinite loop
  ); // only run once - historically was componentWillMount
  console.log(bookData);
  return (
    <div>
      <div className="title">My Super Awesome React Resources!</div>
      <div className="subtitle">Inspect the awesomeness and be awed!</div>
      <div className="eduResources">
        <div>
          <b className="center">Books</b>
          {books.map((book) => {
            return <Book key={book.isbn} title={book.Title} isbn={book.isbn} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default BookPage;
