// https://www.w3schools.com/react/react_router.asp
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Layout from "./Pages/Layout/Layout.tsx";
import Book from "./Pages/Book/Book.tsx";
import Website from "./Pages/Website/Website.tsx";
import Home from "./Pages/Home/Home.tsx";
import Video from "./Pages/Video/Video.tsx";

// use react-router-dom to create a single page application
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="book" element={<Book />} />
          <Route path="website" element={<Website />} />
          <Route path="video" element={<Video />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
