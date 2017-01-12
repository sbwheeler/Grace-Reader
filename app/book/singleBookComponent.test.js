import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import SingleBookComponent from './singleBookComponent';

describe('Single Book Component', () => {
  let book = {title: 'Harry Potter', price: 15}
  let newSingleBook;
  beforeEach('Create component', () => {
     newSingleBook = shallow(<SingleBookComponent book={book} />)
  })

  it('should be a <div>', () => {
    expect(newSingleBook.is('div')).to.be.true
  })

  it('should have title and price on its prop', () => {
    expect(newSingleBook.instance().props.book.title).to.equal('Harry Potter')
    expect(newSingleBook.instance().props.book.price).to.equal(15)
  })
})
