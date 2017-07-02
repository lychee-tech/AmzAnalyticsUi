function securityFilter (req, res) {
    res.redirect("/login");
}


module.exports= securityFilter;