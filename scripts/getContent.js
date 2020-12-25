const fetch = require('node-fetch');
var regeneratorRuntime = require('regenerator-runtime');
const link = 'https://my-json-server.typicode.com/SupWithCancer/db-pizzatime';
const link2 = 'https://my-json-server.typicode.com/SupWithCancer/db-offers';
const link3 = 'https://my-json-server.typicode.com/SupWithCancer/db-ing';


export const promisedPromo = getContent(`${link2}/promo`);
export const promisedCategory = getContent(`${link}/category`);
export const promisedPizza = getContent(`${link}/pizza`);
export const promisedIngridients = getContent(`${link3}/ingridients`);

export async function getContent(url) {
    return fetch(url).then(content => content.json());
}
