import React from 'react'
import Book from './Book'

const BookList = (props) => {
    return (
        <div>{props.books.map(bookData => <Book book={bookData} onClick={props.onClick} key={bookData.id} />)} </div>
    )
}

export default BookList