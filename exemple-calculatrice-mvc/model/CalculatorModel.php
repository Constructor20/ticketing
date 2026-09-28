<?php
// MODEL : le seul qui touche aux données.
// Règle : jamais de $_POST, jamais de HTML ici.
// En auth : findUser() + verifyPassword().
class CalculatorModel
{
    // $bdd = la "connexion" (en vrai : objet PDO). Ici un tableau.
    private array $bdd;

    public function __construct(array $bdd)
    {
        $this->bdd = $bdd;
    }

    // Métier : addition. Puis sauvegarde (= INSERT).
    public function calculer(float $a, float $b): float
    {
        $resultat = $a + $b;
        $this->bdd[] = "$a + $b = $resultat";
        return $resultat;
    }

    // Lecture (= SELECT * FROM historique).
    public function getHistorique(): array
    {
        return $this->bdd;
    }
}
