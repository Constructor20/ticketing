// MICRO-MVC (aide-mémoire, NON fonctionnel) — ne fait rien de réel.
// Rôle de ce fichier : créer le serveur et confier chaque requête au routeur.
// À remplir : rien ici (tout est déjà en place). Le travail se fait dans :
//   routes.js      → quelles URLs existent
//   controllers/   → que faire pour chaque URL
//   models/        → d'où viennent les données
const http = require("http");
const router = require("./routes");

const server = http.createServer((req, res) => {
    router(req, res); // TODO : rien à ajouter, le routeur décide déjà.
});

// Port 3002 : pour ne pas toucher au 3000 de ton vrai backend.
server.listen(3002, () => {
    console.log("Micro-MVC (exemple) sur http://localhost:3002");
});
