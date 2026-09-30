// FAUSSE BDD toute bête — COPIE ce fichier tel quel dans un autre projet.
// Même signature que mysql2/promise :
//   const [lignes] = await db.query("SELECT * FROM users WHERE email = ?", [email]);
// Pour passer en VRAI : remplace juste le require par ton pool mysql2.
//   (avant) const db = require("./fakeDb");
//   (après)  const db = require("./db");   // pool mysql2, zéro autre changement.
// Gère UNIQUEMENT (le reste lève une erreur claire) :
//   SELECT * FROM table
//   SELECT * FROM table WHERE champ = ?
//   INSERT INTO table (col1, col2) VALUES (?, ?)
const tables = {
    // Table d'exemple (même forme qu'une table user).
    users: [
        { id: 1, email: "test@exemple.fr", password: "password123" },
    ],
};

async function query(sql, params = []) {
    const texte = sql.trim().replace(/\s+/g, " ");

    // SELECT * FROM users [WHERE email = ?]
    let m = texte.match(/^SELECT \* FROM (\w+)(?: WHERE (\w+) = \?)?$/i);
    if (m) {
        const lignes = tables[m[1]] || [];
        if (!m[2]) return [lignes];
        const valeur = params[0];
        return [lignes.filter((ligne) => String(ligne[m[2]]) === String(valeur))];
    }

    // INSERT INTO users (email, password) VALUES (?, ?)
    m = texte.match(/^INSERT INTO (\w+) \(([\w, ]+)\) VALUES \(([\?, ]+)\)$/i);
    if (m) {
        const table = tables[m[1]] || (tables[m[1]] = []);
        const colonnes = m[2].split(",").map((c) => c.trim());
        const ligne = { id: table.length + 1 };
        colonnes.forEach((col, i) => { ligne[col] = params[i]; });
        table.push(ligne);
        return [{ insertId: ligne.id }];
    }

    throw new Error("Requête non gérée par la fausse BDD : " + sql);
}

module.exports = { query };
