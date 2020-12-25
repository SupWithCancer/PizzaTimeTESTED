import '../send.js';
import { sendOrder } from '../send.js';

describe('Send order test', () => {
    it( 'it should return response with id of 17', async () => {
        let body = { 
            name : 'name',
            phone : 'phone', 
            mail : 'mail',
            date : 'date',
            time : 'time',
            payment : 'payment',
            total : 'totalCost',
            cart : 'cart'
        };
        await sendOrder(body).then(data => {
            expect(data.id).toBe(17);
        });
    });
});