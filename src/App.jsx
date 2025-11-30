import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { books } from "./data";
import BookList from "./components/BookList";
import BookDetail from "./components/BookDetail";


export default function App() {
return (
<Router>
<div className="container">
<h1 className="title">Каталог книг</h1>
<Routes>
<Route path="/" element={<BookList books={books} />} />
<Route path="/books/:id" element={<BookDetail books={books} />} />
</Routes>
</div>
</Router>
);
}