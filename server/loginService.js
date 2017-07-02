
function login(req, res) {
   var credential = {
       user: req.body.user,
       password: req.body.password
   };

   //do authentication
    var response ={
        code:0,
        error:""
    };

    //if successful
    req.session.credential = credential;
    res.send(JSON.stringify(response));
}


module.exports = login;