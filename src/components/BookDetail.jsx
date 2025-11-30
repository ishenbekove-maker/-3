import React from "react";
import { useParams, useNavigate } from "react-router-dom";


export default function BookDetail({ books }) {
const { id } = useParams();
const navigate = useNavigate();
const book = books.find(b => b.id === parseInt(id));


if (!book) return <p>Книга не найдена</p>;


return (
<div className="detail animate-detail">
<button onClick={() => navigate(-1)}>← Назад</button>
<h2 className="book-title">{book.title}</h2>
<p className="book-author">Автор: {book.author}</p>
<p className="book-description">{book.description}</p>
{book.link && (
<a className="book-link" href={book.link} target="_blank" rel="noopener noreferrer">
Читать онлайн / Купить
</a>
)}
</div>
);
}