import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import SingleBookComponent from 'APP/app/book/singleBookComponent';

describe('Single Book Component', () => {
  let book = {title: 'Harry Potter', price: 15}
  let newSingleBook;
  beforeEach('Create component', () => {
     newSingleBook = shallow(<SingleBookComponent currentBook={book} />)
  })

  it('should be a <div>', () => {
    expect(newSingleBook.is('div')).to.be.true
  })

  it('should have title and price on its prop', () => {
    expect(newSingleBook.instance().props.currentBook.title).to.equal('Harry Potter')
    expect(newSingleBook.instance().props.currentBook.price).to.equal(15)
  })

  it('should have initial state set to false', () => {
    expect(newSingleBook.state()).to.deep.equal({ addedToCart: false })
  })
})
