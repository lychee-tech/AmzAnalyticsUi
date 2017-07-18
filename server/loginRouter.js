var express = require("express");
var router = express.Router();
import fetch from "unfetch";


router.post("/", function login(req, res) {
        fetch("/api/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": req.header("Authorization")
            }
        }).then(function (response) {
            console.log(respone.text());

            if (response.ok) {
                req.session.authentication = {
                    token: response.headers["Authorization"],
                    principle: response.json()
                };
                res.send(JSON.stringify({}));
            } else {
                req.session.authentication = null;
                res.send(response.text());
            }
        });
    }
);

router.delete("/", function (req, res) {
    req.session.authentication = null;
    res.send(JSON.stringify({}));
});


module.exports = router;