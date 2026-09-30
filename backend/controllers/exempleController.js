// CONTROLLER : GET /exemple — 1) lire/valider, 2) appeler le Model, 3) répondre.
// Jamais de SQL ici. En auth : même plan avec email/password.
const { calculer } = require("../models/calculModel");

function exemple(req, res, params) {
    const a = Number(params.get("a") ?? 3);
    const b = Number(params.get("b") ?? 4);

    if (Number.isNaN(a) || Number.isNaN(b)) {
        res.writeHead(422, { "Content-Type": "application/json" });
        return res.end(JSON.stringify({ erreur: "a et b doivent être des nombres." }));
    }

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ exemple: "addition", a, b, resultat: calculer(a, b) }));
}

module.exports = { exemple };
