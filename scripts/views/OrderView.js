import DefaultView from './DefaultView.js';
import { implementOrder } from '../other.js';

export default class extends DefaultView {
    constructor(params) {
        super(params);
        this.setTitle('Заказ');
    }

    async getHtml() {
        let response = await fetch('../scripts/views/order.html');
        let content = await response.text();
        return content;
    }

    async additionalHtml() {
        implementOrder();
    }
}