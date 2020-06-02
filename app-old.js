const http = require('http');
http.createServer((req, res) => {
        res.write('Hola Liz!');
        res.end();
    })
    .listen(8080);

console.log('Escuchadno puerto 8080');