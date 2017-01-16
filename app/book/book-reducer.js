import { FETCH_SINGLE_BOOK, FETCH_ALL_BOOKS, SET_GENRE } from './book-actions';

const initialState = {
  allBooks: [],
  currentBook: {},
  currentGenre: ''
}

const bookReducer = function(state = initialState, action) {
  switch (action.type) {
    case FETCH_ALL_BOOKS:
      return Object.assign({}, state, { allBooks: action.books });
    case FETCH_SINGLE_BOOK:
      return Object.assign({}, state, { currentBook: action.book });
    case SET_GENRE:
      return Object.assign({}, state, { currentGenre: action.genre });
    default: return state;
  }
}

export default bookReducer;
