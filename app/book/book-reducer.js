import { FETCH_SINGLE_BOOK, FETCH_ALL_BOOKS } from './book-actions';

const initialState = {
  allBooks: [],
  currentBook: {}
}

const bookReducer = function(state = initialState, action) {
  switch (action.type) {
    case FETCH_ALL_BOOKS:
      return Object.assign({}, state, { allBooks: action.books });
    case FETCH_SINGLE_BOOK:
      return Object.assign({}, state, { currentBook: action.book });
    default: return state;
  }
}

export default bookReducer;
