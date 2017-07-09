const proxy = require('express-http-proxy');
const url = require("url");

const apiUrl="http://amzanalyticsapi.herokuapp.com:80/";


function proxyReqOptDecorator(proxyReqOpts, srcReq){
    proxyReqOpts.headers['Content-Type'] = 'application/json';
    proxyReqOpts.headers['Accept'] = 'application/json';

    return proxyReqOpts;
}


function getApiProxy(){
    return  proxy(apiUrl, {
        proxyReqOptDecorator: proxyReqOptDecorator
    })
}


module.exports = {
    getApiProxy: getApiProxy
};