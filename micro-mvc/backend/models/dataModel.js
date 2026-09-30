// MODEL : le seul qui touche aux données. Jamais de req/res ici.
// Règle : il CONSTATE (rend des données ou rien), c'est le controller
// qui DÉCIDE ce que ça veut dire (message, redirect, erreur).
// Aujourd'hui : fausse BDD (fakeDb). Demain : pool mysql2 — MÊME code,
// change juste la ligne require (même signature : await query(sql, params)).
const db = require("./fakeDb"); // en vrai : require("./db") avec mysql2

// Exemple type "login" : retrouve un user par email (ligne ou rien).
// Le controller décidera ensuite (message générique, session...).
async function trouverParEmail(email) {
    const [lignes] = await db.query("SELECT * FROM users WHERE email = ?", [email]);
    return lignes[0] || null;
}

// Exemple lecture simple : toutes les lignes (= SELECT * FROM users).
async function listerTous() {
    const [lignes] = await db.query("SELECT * FROM users");
    return lignes;
}

module.exports = { trouverParEmail, listerTous };
