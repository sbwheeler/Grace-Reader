import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';

import SingleOrder from 'APP/app/order/singleOrder';

describe('<SingleOrder /> component', () => {

    let order, total;
    beforeEach('Create component', () => {
         total = [{total: 300, created_at: 'T12480', id: 1, title: 'test', imageUrl: 'aklsd', selectedBooks: ['a']}]
         order = shallow(<SingleOrder currentOrder={total} />);
    });

    it('should be a <div>', () => {
        expect(order.is('div')).to.be.equal(true);
    });

    it('should have a currentOrder prop with an expected value', () => {
      expect(order.props().children[0].props.children[0].type).to.equal('h4')
    });

});
