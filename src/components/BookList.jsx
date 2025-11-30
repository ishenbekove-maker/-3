import React from "react";
import { Link } from "react-router-dom";


export default function BookList({ books }) {
return (
<div className="list">
{books.map(book => (
<Link key={book.id} to={`/books/${book.id}`} className="card">
<h2 className="book-title">{book.title}</h2>
<p className="book-author">Автор: {book.author}</p>
</Link>
))}
</div>
);
}