const http = require("http");

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

    res.writeHead(200, {
        "Content-Type": "application/json"
    });

    res.end(JSON.stringify({
        sys_id: "46f8bfc31b234510aabbccddeeff0011",

        "Prénom Nom": "Christophe Aleixo",
        "Login Windows": "A123456",
        "Email": "christophe.aleixo@klesia.fr",
        "Compagnie": "KLESIA",
        "VIP ?": "Oui",
        "Téléphone": "+33123456789",
        "Téléphone Mobile": "+33612345678",

        "Matériel": [
            {
                asset_tag: "PC001234",
                install_status: "En service",
                serial_number: "ABC123456",
                model: "Dell Latitude 7450"
            }
        ],

        "Incidents généraux": [
            {
                number: "INC0001001",
                short_description: "Panne MFA Azure"
            }
        ],

        "Incidents de l'utilisateur": [
            {
                number: "INC0012345",
                short_description: "Outlook ne démarre plus",
                assignment_group: "SUPPORT/KIO/N1/BATIGNOLLES",
                state: "En cours"
            }
        ],

        "Tâche de demande": [
            {
                number: "SCTASK000987",
                short_description: "Commande écran supplémentaire",
                "request_item.cat_item": "Matériel",
                assignment_group: "SUPPORT/KIO/N1/BATIGNOLLES",
                request_item: "RITM0001234",
                state: "Ouvert"
            }
        ]
    }));
});

server.listen(3000, () => {
    console.log("API démarrée sur le port 3000");
});