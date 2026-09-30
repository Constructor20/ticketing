// CONTROLLER : chef d'orchestre. Toujours les 3 mêmes pas :
//   1) lire/valider la requête (req, params)
//   2) appeler le Model (jamais de SQL ici)
//   3) répondre (jamais de HTML en dur ici : une vue ou du JSON)
// À remplir : remplace le 501 par tes 3 pas, en copiant ce plan.
// Exemple d'appel Model (voir models/dataModel.js) :
//   const user = await dataModel.trouverParEmail(email);
//   if (!user) { /* erreur générique */ } else { /* suite (session...) */ }
function pasEncorePret(req, res) {
    res.writeHead(501, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ todo: "branche un controller ici (voir routes.js)" }));
}

module.exports = { pasEncorePret };
