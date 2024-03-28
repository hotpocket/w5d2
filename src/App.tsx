import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Book from "./Components/Book/Book.tsx";
import bookData from "./Data/videos.json";

function App() {
  useEffect(
    () => {
      console.log("App component mounted!");
      // axios
      //   .get("./assets/Data/videos.json")
      //   .then((response) => {
      //     console.log(response.data);
      //   })
      //   .catch((error) => {
      //     console.error("There was an error!", error);
      //   });
    },
    [] // if this array is missing we will get an infinite loop
  ); // only run once - historically was componentWillMount
  const [books, setBooks] = useState({ ...bookData });
  return (
    <>
      {console.log(books)}
      <h1>My Super Awesome React Resources!</h1>
      <p>Here is a site to show you all of the cool info I like.</p>
      <div>Here is my list of Books</div>
      {books["Videos"].map((book) => {
        return <Book key={book.isbn} title={book.Title} />;
      })}
    </>
  );
}

export default App;
