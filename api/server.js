const http = require('http');

const server = http.createServer((request, response) => {

    let html = '';
    if (request.url == '/') {
        html = `Home`;
    } else if (request.url == '/costs') {
        html = `Costs`;
    }
    response.end(html);
});
server.listen('3000');
