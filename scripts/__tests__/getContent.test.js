import '../getContent.js';
import { getContent } from '../getContent.js';

describe('get Content test', () => {
    it( 'must return arr with content in it after use', async ()=> {
        const link = 'https://my-json-server.typicode.com/SupWithCancer/db-pizzatime';
        let content = await getContent(`${link}/pizza`);
        await expect(content).not.toBe('');
    });
});