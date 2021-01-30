var express = require('express'),
    app     = express();

app.get('/', (prReq, prRes) => {

    prRes.send('<html><body>Portal de notícias</body></html>')

});

app.get('/tecnologia', (prReq, prRes) => {

    prRes.send('<html><body>Notícias de tecnologia</body></html>')

});

app.listen(3000, () => console.log('Server running with Express'));