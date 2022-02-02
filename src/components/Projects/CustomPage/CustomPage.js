import React from 'react';
import './custom-page.scss';
import '../../../custom-js/custom';
import { useState, useEffect } from "react";

const CustomPage = () => {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/books')
            .then(res => res.json())
            .then(json => setBooks(json))
            .catch(err => console.log(err))
    }, [])

    console.log(books);

    return (
        <>
            <div className="CustomPage">
                <h1>Custom Page</h1>
                {books.map(book => (<pre key={book._id}>{book.title}</pre>))}
            </div>
        </>
    );
}

export default CustomPage;
