
function securityFilter (req, res) {
    if (!req.session.userPassword) {
        res.redirect("/login");
    } else {
        next()
    }
}


module.exports= securityFilter;