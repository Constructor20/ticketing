// ROUTEUR : une URL = une méthode de controller.
// Règle : ici on AIGUILLE seulement (if sur le chemin), on ne calcule rien,
// on ne touche ni à la BDD ni au HTML.
// À remplir : ajoute un "if (url.pathname === ...)" par page/action,
// en copiant le modèle ci-dessous.
const pageController = require("./controllers/pageController");

function router(req, res) {
    const url = new URL(req.url, "http://localhost");

    // TODO : ajoute tes routes ici, une par une, sur ce modèle :
    // if (url.pathname === "/login") {
    //     return pageController.login(req, res, url.searchParams);
    // }

    return pageController.pasEncorePret(req, res);
}

module.exports = router;
