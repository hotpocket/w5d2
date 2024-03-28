import React from "react";
interface BookProps {
  title: string;
  isbn: string;
}

const Book = ({ isbn, title }: BookProps) => {
  return (
    <div className="book">
      <p>Title: {title}</p>
      <p>ISBN: {isbn || "Unknown ISBN"}</p>
    </div>
  );
};

export default Book;
