var Api = require('bittrex-api-node');
 // currency manual feed daily basis
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
    
        var d = data.Deltas.filter(function (a) {
            
           return a.MarketName.match(/USD-/g);
            
        });
       // console.log(d.length);
       // console.log(d);
        d.forEach(  element => {
            
           console.log("test")
        });
        
       
        // if (data.Deltas[0]){
        //     console.log(data.Deltas[0].MarketName, data.Deltas[0].Last);
        // }
    });
});
