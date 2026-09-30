// MODEL : logique métier pure (addition). Jamais de req/res ici.
// En auth : même rôle que findByEmail (données + retour, pas de décision).
function calculer(a, b) {
    return a + b;
}

module.exports = { calculer };
