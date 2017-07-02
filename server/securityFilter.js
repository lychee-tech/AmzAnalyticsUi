
function securityFilter (req, res, next) {
    if (!req.session.credential) {
        res.redirect("/login");
    } else {
        next()
    }
}


module.exports= securityFilter;