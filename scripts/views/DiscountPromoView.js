import DefaultView from './DefaultView.js';
import {showPromo}  from '../other.js';

export default class extends DefaultView {
    constructor(params) {
        super(params);
        this.setTitle('Промо');
    }

    async getHtml() {
        let response = await fetch('../scripts/views/discounts_promo.html');
        let content = await response.text();
        return content;
    }

    async additionalHtml() {
        showPromo(this.params);
    }
}