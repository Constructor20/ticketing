const http = require("http");
const router = require("./routes");

const server = http.createServer((req, res) => {
    router(req, res); // TODO : rien à ajouter, le routeur décide déjà.
});

// Port 3002 : pour ne pas toucher au 3000 de ton vrai backend.
server.listen(3000, () => {
    console.log("port 3067, path login must be work, http://localhost:3067/login");
});