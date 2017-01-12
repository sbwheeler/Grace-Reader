import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import {spy} from 'sinon';
import BookListComponent from './bookListComponent';


describe('Book List Component', () => {

  const newBooks = [
    { id: 0, title: 'harry potter', price: 15},
    { id: 1, title: 'enders game', price: 17.20 },
    { id: 2, title: 'LOTR', price: 9.09}
  ]

  let newBookList;
  beforeEach('Create component', () => {
    newBookList = shallow(<BookListComponent books={newBooks} />)
  })

  it('should be a <div> with an expected background', () => {
    expect(newBookList.is('div')).to.be.true
  })

  it('should have reviews on its prop', () => {
    expect(newBookList.instance().props.books).to.equal(newBooks)
  })
})
