import DefaultView from './DefaultView.js';
import {implementCart}  from '../other.js';

export default class extends DefaultView {
    constructor(params) {
        super(params);
        this.setTitle('Корзина');
    }

    async getHtml() {
        let response = await fetch('../scripts/views/cart.html');
        let content = await response.text();
        return content;
    }

    async additionalHtml() {
        implementCart();
    }
}