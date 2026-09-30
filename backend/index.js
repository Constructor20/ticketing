const http = require("http");
const router = require("./routes");

const server = http.createServer((req, res) => {

    // CORS
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    // Réponse au preflight
    if (req.method === "OPTIONS") {
        res.writeHead(204);
        return res.end();
    }

    // Aiguillage : chaque chemin va à sa méthode controller.
    router(req, res);
});

server.listen(3000, () => {
    console.log("API démarrée sur le port 3000");
});
