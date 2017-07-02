
function checkSecurity(path, res) {
    path =  path || "";
    if (path.startsWith("/secure")) {
        res.redirect("/");
    }
}

const securityFilter = {
    checkSecurity: checkSecurity
};

export default securityFilter;