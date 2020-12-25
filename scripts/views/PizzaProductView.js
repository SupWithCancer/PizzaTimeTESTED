import DefaultView from './DefaultView.js';
import { showCard }  from '../other.js';

export default class extends DefaultView {
    constructor(params) {
        super(params);
        this.setTitle('Пицца');
    }

    async getHtml() {
        let response = await fetch('../scripts/views/pizza_product.html');
        let content = await response.text();
        return content;
    }

    async additionalHtml() {
        showCard(this.params);
    }
}