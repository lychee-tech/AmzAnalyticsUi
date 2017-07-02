
function login(req, res) {
    //console.log(req.body);
    //console.log(req.session);

    console.log(req.sessionID);
    console.log(req.session.greeting);
    req.session.greeting = "hello";
    res.end("{}");
}


module.exports = login;