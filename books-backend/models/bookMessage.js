import mongoose from 'mongoose'

const bookSchema = mongoose.Schema({
    title: String,
    author: String,
    year: String,
    ISBN: String,
    selectedFile: String,
});

const BookMessage = mongoose.model('BookMessage', bookSchema)
export default BookMessage