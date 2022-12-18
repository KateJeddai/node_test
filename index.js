const express = require('express');
const http = require('http');

const hostname = 'localhost';
const port = 3000;

const app = express();
app.use((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(`<html><body><h1>Express Server<h1></body></html>`);
});

const server = http.createServer(app);
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});
// const express = require('express'),
//      http = require('http');

// const hostname = 'localhost';
// const port = 3000;

// const app = express();

// app.use((req, res, next) => {
//   console.log(req.headers);
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html');
//   res.end('<html><body><h1>This is an Express Server</h1></body></html>');

// });

// const server = http.createServer(app);

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

// const http = require('http');
// const fs = require('fs');
// const path = require('path');


// const hostname = 'localhost';
// const port = 3000;

// const server = http.createServer((req, res) => {
//     console.log(`Request for ${req.url} with ${req.method}`);

//     if (req.method === 'GET') {
//         let fileUrl;

//         if (req.url === '/') {
//             fileUrl = '/index.html'
//         } else {
//             fileUrl = req.url;
//         }

//         const filePath = path.resolve('./public' + fileUrl);
//         const fileExt = path.extname(filePath);

//         if (fileExt === '.html') {
//             fs.exists(filePath, (exists) => {
//                 if (!exists) {
//                     res.statusCode = 404;
//                     res.setHeader('Content-Type', 'text/html');
//                     res.end(`<html><body><h1>Error 404. File ${fileUrl} Not Found.<h1></body></html>`);
//                     return;
//                 }
//                 res.statusCode = 200;
//                 res.setHeader('Content-Type', 'text/html');
//                 fs.createReadStream(filePath).pipe(res);
//             })
//         } else {
//             res.statusCode = 404;
//             res.setHeader('Content-Type', 'text/html');
//             res.end(`<html><body><h1>Error 404. File ${fileUrl} Not Found.<h1></body></html>`);
//             return;
//         }

//     } else {
//         res.statusCode = 404;
//         res.setHeader('Content-Type', 'text/html');
//         res.end(`<html><body><h1>Request method ${req.method} is not supported.<h1></body></html>`);
//         return;
//     }
// });

// server.listen(port, hostname, () => {
//     console.log(`Port is listening on port ${port}`);
// });
