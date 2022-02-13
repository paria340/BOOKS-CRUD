import * as api from '../api'

//Action Creators

export const getBooks = () => async (dispatch) => {
  try {
    const { data } = await api.fetchBooks();

    dispatch({ type: 'FETCH_ALL', payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createBook = (book) => async (dispatch) => {
  try {
    const { data } = await api.createBook(book);

    dispatch({ type: 'CREATE', payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updateBook = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updateBook(id, post)
    dispatch({ type: 'UPDATE', payload: data })
  } catch (error) {
    console.log(error)
  }
}

export const deleteBook = (id) => async (dispatch) => {
  try {
    await api.deleteBook(id)

    dispatch({ type: 'DELETE', payload: id })
  } catch (error) {
    console.log(error)
  }
}