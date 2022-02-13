import React, { useState, useEffect } from "react";
// import DeleteIcon from '@material-ui/icons/Delete';
// import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import { useDispatch } from "react-redux";
import { deleteBook } from '../../../actions/books'

const Book = ({ book, setCurrentId }) => {
    const dispatch = useDispatch()
    return(
        <section className="bookContainer">
            <img src={book.selectedFile} alt={book.title} />
            <h3>{book.title}</h3>
            <h3>{book.author}</h3>
            <h4>{book.year}</h4>
            <h4>{book.ISBN}</h4>
            <button onClick={() => setCurrentId(book._id)}>Edit</button>
            <button onClick={() => dispatch(deleteBook(book._id))}>Delete</button>
        </section>
    )
}
export default Book