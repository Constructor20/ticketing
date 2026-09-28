<?php
// PORTE D'ENTRÉE : tout passe par ici.
// Il branche les pièces et choisit l'action selon la requête.
// En auth : pareil, avec ?action=login / ?action=logout.
session_start();

require_once __DIR__ . '/model/CalculatorModel.php';
require_once __DIR__ . '/controller/CalculatorController.php';

// Fausse connexion BDD : un simple tableau gardé en session.
// En auth : remplacé par ton objet Database (PDO), sans toucher au reste.
$model = new CalculatorModel($_SESSION['bdd'] ?? []);
$controller = new CalculatorController($model);

// Routeur : formulaire envoyé (POST) ou simple affichage (GET).
if (($_SERVER['REQUEST_METHOD'] ?? 'GET') === 'POST') {
    $controller->traiter();
} else {
    $controller->afficher();
}

// On re-sauvegarde la "BDD" (la vraie BDD le fait toute seule).
$_SESSION['bdd'] = $model->getHistorique();
