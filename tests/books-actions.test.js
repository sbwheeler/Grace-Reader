import {expect} from 'chai';

import { getAllBooks, getSingleBook } from 'APP/app/book/book-actions.js';

describe('Book Actions', () => {

    describe('getAllBooks', () => {

        it('returns properly formatted action creator', () => {

            const testBook = ['harry potter', 'enders game'];

            expect(getAllBooks(testBook)).to.be.deep.equal({
                type: 'FETCH_ALL_BOOKS',
                books: testBook
            });

        });

    });

    describe('getAllBooks', () => {

        it('returns properly formatted action creator', () => {

            const testBook = ['harry potter'];

            expect(getSingleBook(testBook)).to.be.deep.equal({
                type: 'FETCH_SINGLE_BOOK',
                book: testBook
            });

        });

    });

});
