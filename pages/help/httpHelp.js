function buildHttpBasicCredential(login, password) {
    return "Basic " + new Buffer(login + ':' + password).toString('base64');
}


export default {
    buildHttpBasicCredential:buildHttpBasicCredential
}
