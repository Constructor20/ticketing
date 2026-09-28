<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Calculatrice MVC</title>
</head>
<body>
    <h1>Calculatrice</h1>

    <!-- VIEW : affichage seul. Reçoit $resultat, $erreur, $historique du Controller. -->
    <?php if ($erreur !== null): ?>
        <p style="color:red;"><?= htmlspecialchars($erreur) ?></p>
    <?php endif; ?>

    <?php if ($resultat !== null): ?>
        <p><strong>Résultat : <?= htmlspecialchars((string) $resultat) ?></strong></p>
    <?php endif; ?>

    <form action="index.php" method="POST">
        <label>A : <input type="text" name="a"></label>
        <label>B : <input type="text" name="b"></label>
        <button type="submit">Additionner</button>
    </form>

    <h2>Historique (fausse BDD)</h2>
    <?php if (empty($historique)): ?>
        <p>Rien pour l'instant.</p>
    <?php else: ?>
        <ul>
            <?php foreach ($historique as $ligne): ?>
                <li><?= htmlspecialchars($ligne) ?></li>
            <?php endforeach; ?>
        </ul>
    <?php endif; ?>
</body>
</html>
