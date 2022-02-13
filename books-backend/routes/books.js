import express from 'express'

import { getBooks, createBook, updateBook, deleteBook } from '../controllers/books.js';

const router = express.Router();


//localhost:4000/books
router.get('/', getBooks)
router.post('/', createBook)
router.patch('/:id', updateBook)
router.delete('/:id', deleteBook)

export default router;