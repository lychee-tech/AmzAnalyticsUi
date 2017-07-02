const express = require('express');
const next = require('next');

//server configuration
const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3000;

//next configuration
const app = next({dev});
const handle = app.getRequestHandler();

//filters
const securityFilter = require("./securityFilter");

app.prepare()
    .then(() => {
        const server = express();
        server.use("/secured/*", securityFilter);


        server.get('*', (req, res) => {
            return handle(req, res)
        });

        server.listen(port, (err) => {
            if (err) throw err;
            console.log('> Ready on http://localhost:' + port);
        })
    });