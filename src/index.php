<?php
// /var/www/html = tout ticketing/ (montage racine), Apache sert src/
session_start();

require_once dirname(__DIR__) . '/vendor/autoload.php';
require_once dirname(__DIR__) . '/src/controller/AuthController.php';

use Dotenv\Dotenv;
$dotenv = Dotenv::createImmutable(dirname(__DIR__));
$dotenv->load();

$database = new Database($_ENV['host'], $_ENV['MARIADB_DATABASE'],$_ENV['MARIADB_USER'],$_ENV['MARIADB_PASSWORD']);
$authController = new AuthController();


if (($_SERVER['REQUEST_METHOD'] !== 'POST') && (!isset($_GET['action']) || $_GET['action'] !== 'login')) {
    echo"fonctionne pas"; //patch système erreur (créer une erreur plus générique)
} else {
    echo"fonctionne"; //patch système erreur (créer une erreur plus générique)
    $authController->login($_POST["email"], $_POST["password"]);
}


require_once __DIR__ . '/view/authview.php'; 
 
?>