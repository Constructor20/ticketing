function login(req, res) {
    res.writeHead(501, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ todo: "branche un controller ici (voir routes.js)" }));
}

function logout(req, res) {
    res.writeHead(501, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ todo: "TADA" }));
}

module.exports = { logout, login};