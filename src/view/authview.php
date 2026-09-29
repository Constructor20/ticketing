<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ticketing - Connexion</title>
</head>
<body>
    <div class="container">
    <h1>Connexion</h1>
    <form action="?action=login" method="POST">
        <label for="email">Email :</label>
        <input type="text" id="email" name="email" required><?php htmlspecialchars($_POST['email'] ?? '') ?>
        <br>
        <label for="password">Mot de passe :</label>
        <input type="password" id="password" name="password" required><?php htmlspecialchars($_POST['password'] ?? '') ?>
        <br>
        <button type="submit">Se connecter</button>
    </form>
</div>
</body>
</html>