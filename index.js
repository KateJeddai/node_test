const http = require('http');
const hostname = 'localhost';
const port = 3000;
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>Hello there!<h1></body></html>')
});

server.listen(port, hostname, () => {
    console.log(`Port is listening on port ${port}`);
});
