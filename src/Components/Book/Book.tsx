import React from "react";

interface BookProps {
  title: string;
  isbn: string;
}

const Book = ({ isbn, title }: BookProps) => {
  return (
    <div>
      isbn: {isbn}
      <br />
      title: {title}
      <br />
    </div>
  );
};

export default Book;
