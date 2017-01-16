import axios from 'axios';
import { browserHistory } from 'react-router'

/*********************************CONSTS******************************/

export const FETCH_ALL_BOOKS = 'FETCH_ALL_BOOKS';
export const FETCH_SINGLE_BOOK = 'FETCH_SINGLE_BOOK';


/****************************ACTION CREATORS****************************/
export function getAllBooks(books) {
  return {
    type: FETCH_ALL_BOOKS,
    books
  }
}

export function getSingleBook(book) {
  return {
    type: FETCH_SINGLE_BOOK,
    book
  }
}

/*************************THUNKS*********************************/

export function fetchAllBooks() {
  return function(dispatch) {
    axios.get('/api/books')
      .then(res => res.data)
      .then(foundBooks => {
        dispatch(getAllBooks(foundBooks))
      })
      .catch(console.error)
  }
}

export function fetchSingleBook(id) {
  return function(dispatch) {
    axios.get(`/api/books/${id}`)
      .then(res => {
        return res.data
      })
      .then(foundBook => {
        dispatch(getSingleBook(foundBook))
      })
      .catch(console.error)
  }
}

export function addNewBook (book) {
  console.log('thunk book: ', book)
    return function(dispatch, getState) {
      axios.post('/api/books', book)
        .then(res => res.data)
        .then(newBook => {
          dispatch(fetchSingleBook(newBook.id))
          browserHistory.push(`/books/${newBook.id}`)
        })
        .catch(console.error)
    }
}
