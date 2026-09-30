// ROUTEUR (ex-?action= en PHP) : pathname → méthode controller.
// Le serveur ne sait plus quelles routes existent : c'est ici que ça se décide.
const mainController = require("./controllers/mainController");
const exempleController = require("./controllers/exempleController");

function router(req, res) {
    const url = new URL(req.url, "http://localhost");

    if (url.pathname === "/exemple") {
        return exempleController.exemple(req, res, url.searchParams);
    }

    return mainController.accueil(req, res);
}

module.exports = router;
