// import React from "react";
import { useState, useEffect } from "react";
import "./Book.css";
import Book from "../../Components/Book/Book";
import { BookType } from "../../lib/types";

const BookPage = () => {
  const [books, setBooks] = useState<Array<BookType>>([]);

  useEffect(() => {
    try {
      const bookUrl =
        "https://raw.githubusercontent.com/hotpocket/w5d2/main/src/Data/books.json";
      fetch(bookUrl)
        .then((response) => response.json())
        .then((data) => {
          setBooks(data);
        });
    } catch (error) {
      console.error("Error:", error);
    } finally {
      /* runs code regardless of success or failure */
    }
  }, []);

  return (
    <div>
      <div>
        <b className="center">Books</b>
        {books.map((book) => {
          return <Book key={book.isbn} title={book.title} isbn={book.isbn} />;
        })}
      </div>
    </div>
  );
};

export default BookPage;
