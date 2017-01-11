import {expect} from 'chai';

import {getAllOrders, getSingleOrder} from './order-actions';


describe.only('Order actions', () => {

    describe('getAllOrders', () => {

        it('returns properly formatted action', () => {

            const testOrders = [
            {id:  1, price: 2, quantity: 3},
            {id:  2, price: 4, quantity: 2},
            {id:  3, price: 6, quantity: 1}
            ];

            expect(getAllOrders(testOrders)).to.be.deep.equal({
                type: 'FETCH_ALL_ORDERS',
                orders: testOrders
            });

        });

    });

    describe('getSingleOrder', () => {

        it('returns properly formatted action', () => {

            const testOrder = {id:  1, price: 2, quantity: 3};

            expect(getSingleOrder(testOrder)).to.be.deep.equal({
                type: 'FETCH_SINGLE_ORDER',
                order: testOrder
            });

        });

    });

});
