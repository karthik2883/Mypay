  var Api = require('bittrex-api-node');

const api = Api({
    publicKey: '416cb75f62b1439097c2bc1f41919398',
    secretKey: 'ce97197c38c24132971f55ee56f091b3',
    verbose: true  
});
const ws = api.webSocket();

ws.on('connected', () => { /* ... */ });
ws.on('disconnected', () => { /* ... */ });

ws.connect((client) => {
    client.authenticate();

    client.getSummaryDeltas((data) => {
        console.log('[getSummaryDeltas]:', data);
    });
});
