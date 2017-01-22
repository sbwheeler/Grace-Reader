import {expect} from 'chai';

import {createStore} from 'redux';
import orderReducer from 'APP/app/order/order-reducer';

describe('Order reducer', () => {

    let testStore;
    beforeEach('Create testing store', () => {
        testStore = createStore(orderReducer);
    });

    it('has expected initial state', () => {
        expect(testStore.getState()).to.be.deep.equal({
            allOrders: [],
            currentOrder: [],
            shoppingCart: []
        });
    });

    describe('FETCH_SINGLE_ORDER', () => {

        it('sets order to action order', () => {
            testStore.dispatch({ type: 'FETCH_SINGLE_ORDER', currentOrder: {id:1, price:2, quantity: 3} });
            const newState = testStore.getState();
            expect(newState.currentOrder).to.be.deep.equal({id:1, price:2, quantity: 3});
        });

    });

    describe('FETCH_ALL_ORDERS', () => {

        it('sets orders to action orders', () => {
            const newOrders = [
                {id:1, price:2, quantity: 3},
                {id:2, price:3, quantity: 2},
                {id:4, price:20, quantity: 1}
            ];
            testStore.dispatch({ type: 'FETCH_ALL_ORDERS', orders: newOrders });
            const newState = testStore.getState();
            expect(newState.allOrders).to.be.deep.equal([
                {id:1, price:2, quantity: 3},
                {id:2, price:3, quantity: 2},
                {id:4, price:20, quantity: 1}
            ]);
        });

    });

});
