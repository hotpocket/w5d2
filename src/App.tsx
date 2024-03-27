import { useState } from 'react'
import './App.css'
import Book from './Components/Book/Book.tsx'
import books from './Data/books.js'


function App() {

  return (
    <>
   {books.map((book) => {
      return <Book key={book.isbn} title={book.Title}/>
   })}
    </>
  )
}

export default App;



