import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';

import { Link } from 'react-router';

import OrderList from './orderList';

xdescribe('OrderList component', () => {

    let list, orders;
    beforeEach('Create component', () => {
        orders = [
                {id:1, price:2, quantity: 3},
                {id:2, price:3, quantity: 2},
                {id:4, price:20, quantity: 1}
            ];
        list = shallow(<OrderList allOrders={orders}/>);
    });

    it('uses <Link />', () => {
        expect(list.find(Link).length).to.be.equal(3);
    });

    it('passes its own price prop to <span id="price">', () => {
        const usedOrders = list.find('#price').nodes[1];
        expect(usedOrders.props.children.join(' ')).to.be.equal('Pay me ' + orders[1].price);
    });

});
