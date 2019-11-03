const http = require('http');

const server = http.createServer((request, response) => {

    let html = '';
    if (request.url == '/') {
        html = `
            <html>
                <head>
                    <meta chartset="utf-8">
                </head>
                <body>
                    <h1>Moneytalks</h1>
                </body>
            </html>
        `;
    } else if (request.url == '/costs') {
        html = `
            <html>
                <head>
                    <meta chartset="utf-8">
                </head>
                <body>
                    <h1>Costs</h1>
                </body>
            </html>
        `;
    }
    response.end(html);
});
server.listen('3000');
