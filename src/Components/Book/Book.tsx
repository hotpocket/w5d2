import React from "react";
interface BookProps {
  title: string;
  isbn: string;
}

const Book = ({ isbn, title }: BookProps) => {
  return (
    <div>
      <p>{title}</p>
    </div>
  );
};

export default Book;
