import { getCart, addToCart } from '../other.js';

describe('Cart test', () => {
    it( 'it should get an empty array', ()=> {
        let cart = getCart();
        expect(cart).toEqual([]);
    });

    it( 'it should add elements to array', ()=> {
        let cart = getCart();
        addToCart(1);
        expect(cart).toEqual([{'id': 1, 'quantity': 1,}]);
        addToCart(2);
        expect(cart).toEqual([{'id': 1, 'quantity': 1,},{'id': 2, 'quantity': 1,}]);
    });
});