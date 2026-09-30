// CONTROLLER : GET / — demande au model, répond. Jamais de données en dur ici.
const { getDonneesAccueil } = require("../models/userMock");

function accueil(req, res) {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(getDonneesAccueil()));
}

module.exports = { accueil };
