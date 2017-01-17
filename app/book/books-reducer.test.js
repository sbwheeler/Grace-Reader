import {expect} from 'chai';

import {createStore} from 'redux';
import bookReducer from './book-reducer.js';

describe('Book Reducer', () => {

    let testStore;
    beforeEach('Create testing store', () => {
        testStore = createStore(bookReducer);
    });

    it('has expected initial state', () => {
        expect(testStore.getState()).to.be.deep.equal({
            allBooks: [],
            currentBook: {},
            currentGenre: '',
            currentAuthor: {},
            selectedBooks: []
        });
    });

    describe('FETCH_ALL_BOOKS', () => {
        it('returns all of the books', () => {
            testStore.dispatch({ type: 'FETCH_ALL_BOOKS', books: [{title: 'harry potter'}, { title: 'enders game'}, { title: 'LOTR'} ]});
            const newState = testStore.getState();
            expect(newState.allBooks).to.be.deep.equal([{title: 'harry potter'}, { title: 'enders game'}, { title: 'LOTR'} ])
            expect(newState.allBooks[0]).to.be.deep.equal({title: 'harry potter'});
            expect(newState.allBooks[1]).to.be.deep.equal({title: 'enders game'})
            expect(newState.allBooks[2]).to.be.deep.equal({title: 'LOTR'})
        });
    });

    describe('FETCH_SINGLE_BOOKS', () => {
        it('returns single book by id', () => {
            testStore.dispatch({ type: 'FETCH_SINGLE_BOOK', book: {
              id: 1,
              title: 'harry potter',
              genre: 'fantasy'
            }});
            const newState = testStore.getState();
            expect(newState.currentBook).to.be.deep.equal({
              id: 1,
              title: 'harry potter',
              genre: 'fantasy'
            });
        })

        it('returns single book by id', () => {
            testStore.dispatch({ type: 'FETCH_SINGLE_BOOK', book: {
              id: 2,
              title: 'enders game',
              genre: 'fantasy'
            }});
            const newState = testStore.getState();
            expect(newState.currentBook).to.be.deep.equal({
              id: 2,
              title: 'enders game',
              genre: 'fantasy'
            });
        })

    })
});
