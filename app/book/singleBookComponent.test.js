import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import SingleBookComponent from './singleBookComponent';

describe('Single Book Component', () => {
  const title = 'Harry Potter';
  const price = '20';
  let newSingleBook;
  beforeEach('Create component', () => {
     newSingleBook = shallow(<SingleBookComponent title={title} price={price} />)
  })

  it('should be a <div>', () => {
    expect(newSingleBook.is('div')).to.be.true
  })

  it('should have title and price on its prop', () => {
    expect(newSingleBook.instance().props.title).to.equal(title)
    expect(newSingleBook.instance().props.price).to.equal(price)
  })
})
