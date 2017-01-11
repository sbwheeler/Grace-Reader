import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';

import SingleOrder from './singleOrder';

describe.only('<SingleOrder /> component', () => {

    let order, total;
    beforeEach('Create component', () => {
         total = {total: 300}
         order = shallow(<SingleOrder currentOrder={total} />);
    });

    it('should be a <div>', () => {
        expect(order.is('div')).to.be.equal(true);
    });

    it('should have a currentOrder prop with an expected value', () => {
      expect(order.props().children[0].props.children).to.equal(300)
    });

});
