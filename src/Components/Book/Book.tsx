import { BookType } from "../../lib/types";

const Book = ({ title, isbn }: BookType) => {
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
