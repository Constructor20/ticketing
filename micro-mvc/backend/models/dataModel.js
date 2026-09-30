// MODEL : le seul qui touche aux données. Jamais de req/res ici.
// Règle : il CONSTATE (rend des données ou rien), c'est le controller
// qui DÉCIDE ce que ça veut dire (message, redirect, erreur).
// À remplir : remplace le tableau vide par ta source (tableau, puis SELECT BDD).
// Exemple : function findByEmail(email) { /* SELECT ... WHERE email = ? */ }
function fausseDonnee() {
    // TODO : retourne tes données ici (puis un jour : la ligne venue de la BDD).
    return [];
}

module.exports = { fausseDonnee };
