const pageController = require("./controllers/pageController");

function router(req, res) {
    const url = new URL(req.url, "http://localhost");

    if (url.pathname === "/login") {
        return pageController.login(req, res, url.searchParams);
    }

    if (url.pathname === "/logout") {
        return pageController.logout(req, res, url.searchParams);
    }
}

module.exports = router;