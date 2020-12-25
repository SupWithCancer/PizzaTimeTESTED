import DefaultView from './DefaultView.js';
import { fillPage} from '../other.js';

// const fetch = require('node-fetch');

export default class extends DefaultView {
    constructor(params) {
        super(params);
        this.setTitle('Главная страница');
    }

    async getHtml() {
        let response = await fetch('../scripts/views/home.html');
        let content = await response.text();
        return content;
    }

    async additionalHtml() {
       
        fillPage();
    }
}