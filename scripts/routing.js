import '../css/normalize.css';

import '../css/style.css';


import './other.js';
import './getContent.js';

import HomeView from './views/HomeView.js';
import PizzaView from './views/PizzaView.js';
import DiscountsView from './views/DiscountsView.js';
import PizzaProductView from './views/PizzaProductView.js';
import DiscountPromoView from './views/DiscountPromoView.js';
import CartView from './views/CartView.js';
import OrderView from './views/OrderView.js';


const router = async () => {
    const routes = [
        { path: '#', view: HomeView },
        { path: '#pizza', view: PizzaView },
        { path: '#pizza/:id', view: PizzaProductView },
        { path: '#discounts', view: DiscountsView },
        { path: '#discounts/:id', view: DiscountPromoView },
        { path: '#cart', view: CartView },
        { path: '#order', view: OrderView }
    ];

    const potentialMatches = routes.map(route => {
        let url = '/' + location.href.split('#')[1];
        return {
            route: route,
            result: url.match(pathToRegex(route.path.replace('#', '/')))
        };
    });

    let match = potentialMatches.find(potentialMatch => potentialMatch.result !== null);

    if (!match) {
        match = {
            route: routes[0],
            result: [location.pathname]
        };
        window.history.replaceState(null, null, '#');
    }

    const view = new match.route.view(getParams(match));

    document.querySelector('#root').innerHTML = await view.getHtml();
    await view.additionalHtml();
    window.scroll({
        left: 0,
        top: 0, 
        behavior: 'smooth'
    });
};

const pathToRegex = path => new RegExp('^' + path.replace(/\//g, '\\/').replace(/:\w+/g, '(.+)') + '$');

const getParams = match => {
    const values = match.result.slice(1);
    const keys = Array.from(match.route.path.replace('#', '/').matchAll(/:(\w+)/g)).map(result => result[1]);

    return Object.fromEntries(keys.map((key, i) => {
        return [key, values[i]];
    }));
};

const navigateTo = url => {
    history.pushState(null, null, url);
    router();
};

window.addEventListener('popstate', router);

document.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener('click', e => {
        if (e.target.matches('[data-link]')) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    });
    router();
});