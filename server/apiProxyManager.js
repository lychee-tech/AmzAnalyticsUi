const proxy = require('express-http-proxy');
const url = require("url");

const apiUrl="http://amzanalyticsapi.herokuapp.com:80/";


function pathResolver(req) {
    var path = url.parse(req.url).path;
    //strip api
    return path.substr("/api".length);
}


function proxyReqOptDecorator(proxyReqOpts, srcReq){
    proxyReqOpts.headers['Content-Type'] = 'application/json';
    proxyReqOpts.headers['Accept'] = 'application/json';

    return proxyReqOpts;
}


function getApiProxy(){
    return  proxy(apiUrl, {
        proxyReqPathResolver:  pathResolver,
        proxyReqOptDecorator: proxyReqOptDecorator
    })
}


module.exports = {
    getApiProxy: getApiProxy
};