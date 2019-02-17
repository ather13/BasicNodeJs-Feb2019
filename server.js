const http = require('http');

const server = http.createServer((req,res) => {
    console.log(req.url);

    if (req.url === '/')
    {
        res.write('my root web app');
    }

    if (req.url === '/api/users')
    {
        res.write('my users web app');
    }

    res.end();
});

server.listen(3000);

console.log('port listening on 3000');