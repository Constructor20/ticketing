<?php
// CONTROLLER : chef d'orchestre. Jamais de SQL, jamais de HTML.
// Chaque méthode fait 3 pas : 1) lire/valider, 2) appeler le Model, 3) charger la View.
// En auth : lire username/password -> AuthModel -> vue ou redirection.
require_once __DIR__ . '/../model/CalculatorModel.php';

class CalculatorController
{
    private CalculatorModel $model;

    public function __construct(CalculatorModel $model)
    {
        $this->model = $model;
    }

    // Affiche le formulaire vide (= afficher login en auth).
    public function afficher(): void
    {
        $resultat = null;
        $erreur = null;
        $historique = $this->model->getHistorique();
        require __DIR__ . '/../view/calculatrice.php';
    }

    // Traite le formulaire (= traiter login en auth).
    public function traiter(): void
    {
        $a = $_POST['a'] ?? '';
        $b = $_POST['b'] ?? '';

        if ($a === '' || $b === '') {
            $erreur = 'Remplis les deux nombres.';
            $resultat = null;
        } elseif (!is_numeric($a) || !is_numeric($b)) {
            $erreur = 'Que des nombres.';
            $resultat = null;
        } else {
            $erreur = null;
            $resultat = $this->model->calculer((float) $a, (float) $b);
        }

        $historique = $this->model->getHistorique();
        require __DIR__ . '/../view/calculatrice.php';
    }
}
