import React from 'react';
import style from './BookList.module.css';

function BookList({ bookList }) {
    return (
        <div className={style.frame}>
            {bookList.map((book) => (
                <button className={style.button} key={book.bookId}>
                    <img src={book.coverImage} alt={book.title} />
                    <p>{book.title}</p> 
                </button>
            ))}
        </div>
    );
}

export default BookList;
