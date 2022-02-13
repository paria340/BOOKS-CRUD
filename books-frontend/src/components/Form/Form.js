import React, { useState, useEffect } from "react";
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";
import { createBook, updateBook } from '../../actions/books';


const Form = ({currentId, setCurrentId}) => {
    const [bookData, setBookData] = useState({
        title: '', author: '', year: '', ISBN: '', selectedFile: ''
    })
    const dispatch = useDispatch();

    const book = useSelector((state) => currentId ? state.books.find((p) => p._id === currentId) : null)

    useEffect(() => {
        if (book) setBookData(book)
    }, [book])

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("hello")
        if(currentId){
            dispatch(updateBook(currentId, bookData))
        }else{
            dispatch(createBook(bookData))
        }
        clear()
    }

    const clear = () => {
        setCurrentId(null)
        setBookData({ title: '', author: '', year: '', ISBN: '', selectedFile: '' })
    }

    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <h2>Create Your BookShelf</h2>
                <div className="inputContainer">
                    <label htmlFor="title" className="visuallyHidden" name="title">{currentId ? 'Editing' : 'Creating'} a book</label>
                <input
                    type="text"
                    id="title"
                    value={bookData.title}
                    size={15}
                    onChange={(e) => setBookData({ ...bookData, title: e.target.value })}
                    placeholder="Title"
                    required
                />
                </div>
                
                <div className="inputContainer">
                    <label htmlFor="author" className="visuallyHidden" name="author">Author</label>
                    <input
                        type="text"
                        
                        id="author"
                        value={bookData.author}
                        size={15}
                        onChange={(e) => setBookData({ ...bookData, author: e.target.value })}
                        placeholder="Author"
                        required
                    />
                </div>

                <div className="inputContainer">
                    <label htmlFor="year" className="visuallyHidden" name="year">Year</label>
                    <input
                        type="text"
                        id="year"
                        value={bookData.year}
                        size={15}
                        onChange={(e) => setBookData({ ...bookData, year: e.target.value })}
                        placeholder="Year"
                        required
                    />
                </div>
                
                <div className="inputContainer">
                    <label htmlFor="ISBN" className="visuallyHidden" name="ISBN">ISBN</label>
                    <input
                        type="text"
                        id="ISBN"
                        value={bookData.ISBN}
                        size={15}
                        onChange={(e) => setBookData({ ...bookData, ISBN: e.target.value })}
                        placeholder="ISBN"
                        required
                    />
                </div>


                <div className="pictureBook">
                    <FileBase type="file" multiple={false} onDone={({ base64 }) => setBookData({ ...bookData, selectedFile: base64 })} />
                </div>
                <button className="submit" onSubmit={handleSubmit}>Submit</button>
                <button className="clear" onClick={clear}>Clear</button>
            </form>

            
        </div>
    )
}
export default Form