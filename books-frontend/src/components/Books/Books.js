import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import Book from "./Book/Book";

const Books = ( {setCurrentId}) => {

    const books = useSelector((state) => state.books)
    console.log(books)
    return (

        <div className="theShelf">
            {
                books.map((book) => (
                    <li key={book._id}>
                        <Book book={book} setCurrentId={setCurrentId} />
                    </li>
                ))
            }

        </div>

    )
}
export default Books