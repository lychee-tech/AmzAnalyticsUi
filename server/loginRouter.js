var express= require("express");
var router = express.Router();

router.post("/", function login(req, res) {
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
);

router.delete("/", function (req, res) {
    //do authentication
    var response ={
        code:0,
        error:""
    };

    //if successful
    req.session.credential = null;
    res.send(JSON.stringify(response));
});



module.exports = router;