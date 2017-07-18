const express = require('express');
const next = require('next');
const apiProxyManager = require('./apiProxyManager');

var session = require('express-session');
var bodyParser = require('body-parser');



//server configuration
const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3000;

//next configuration
const app = next({dev});
const handle = app.getRequestHandler();


//filters
const securityFilter = require("./securityFilter");
const loginRouter   = require("./loginRouter");

app.prepare()
    .then(() => {
        const server = express();

        server.use(bodyParser.urlencoded({ extended: false }));
        server.use(bodyParser.json());
        server.use(session({
            secret: 'keyboard cat',
            resave: true,
            saveUninitialized: true,
            cookie: { secure: false }
        }));

        server.use("/secured/*", securityFilter);
        server.all("/api/*", apiProxyManager.getApiProxy());
        server.use("/login", loginRouter);
        server.all('*', (req, res) => {
            return handle(req, res)
        });

        server.listen(port, (err) => {
            if (err) throw err;
            console.log('> Ready on http://localhost:' + port);
        })
    });