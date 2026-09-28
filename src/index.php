<?php
// /var/www/html = tout ticketing/ (montage racine), Apache sert src/
session_start();

require_once dirname(__DIR__) . '/vendor/autoload.php';
require_once dirname(__DIR__) . '/src/controller/AuthController.php';
use Dotenv\Dotenv;

$dotenv = Dotenv::createImmutable(dirname(__DIR__));
$dotenv->load();

if (($_SERVER['REQUEST_METHOD'] !== 'POST') && (!isset($_GET['action']) || $_GET['action'] !== 'login')) {
    echo"fonctionne pas";
} else {
    echo"fonctionne";
}


require_once __DIR__ . '/view/authview.php'; 
 
?>
