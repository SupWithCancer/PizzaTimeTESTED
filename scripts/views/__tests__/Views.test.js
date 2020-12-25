
import '../DefaultView.js';
import DefaultView from '../DefaultView.js';

describe('Testing if the DefaultView works correctly', () => {
    let view = new DefaultView();
    it( 'test ability to change title', async ()=> {
        view.setTitle('test');
        expect(document.title).toEqual('test');
    });
    it( 'test ability to change html', async ()=> {
        await view.getHtml().then(data => {
            expect(data).toEqual('');
        });
    });
    it( 'test ability to add additional html', async ()=> {
        await view.additionalHtml().then(data => {
            expect(data).toEqual(undefined);
        });
    });
});