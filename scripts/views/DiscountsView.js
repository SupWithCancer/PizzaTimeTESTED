import DefaultView from './DefaultView.js';
import {implementPromo} from '../other.js';

export default class extends DefaultView {
    constructor(params) {
        super(params);
        this.setTitle('Акции');
    }

    async getHtml() {
        let response = await fetch('../scripts/views/discounts.html');
        let content = await response.text();
        return content;
    }

    async additionalHtml() {
        implementPromo();
    }
}