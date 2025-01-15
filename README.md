# SwagLabs_TestAuto1

// repo vers ton ordi
git pull

git status

//ordi vers repo
git add .
git commit -m "test: blabla"
git push

// lancement playwright tests
npx playwright test


# User Story

**User Story 1 : Connexion à l'application**

En tant qu'utilisateur, je souhaite me connecter à l'application afin d'accéder à mon compte personnel.

**Exigences :**

1. L'utilisateur doit pouvoir saisir un nom d'utilisateur et un mot de passe.
2. Si les informations d'identification sont correctes, l'utilisateur est redirigé vers la page d'accueil.
3. Si les informations d'identification sont incorrectes, un message d'erreur approprié est affiché.

**User Story 2 : Visualisation des produits**

En tant qu'utilisateur connecté, je souhaite voir une liste de produits disponibles afin de choisir ceux que je souhaite acheter.

**Exigences :**

1. La page d'inventaire doit afficher une liste de produits avec leur nom, description, prix et image.
2. Chaque produit doit avoir un bouton "Ajouter au panier".

**User Story 3 : Gestion du panier**

En tant qu'utilisateur, je souhaite ajouter ou retirer des produits de mon panier afin de préparer ma commande.

**Exigences :**

1. L'utilisateur doit pouvoir ajouter un produit au panier en cliquant sur le bouton "Ajouter au panier".
2. Une fois le produit ajouté, le bouton doit changer pour "Retirer du panier".
3. L'utilisateur doit pouvoir retirer un produit du panier en cliquant sur "Retirer du panier".
4. Le nombre de produits dans le panier doit se mettre à jour en conséquence.

**User Story 4 : Finalisation de la commande**

En tant qu'utilisateur, je souhaite finaliser ma commande afin d'acheter les produits dans mon panier.

**Exigences :**

1. L'utilisateur doit pouvoir accéder à la page du panier pour voir les produits sélectionnés.
2. L'utilisateur doit pouvoir cliquer sur le bouton "Checkout" pour commencer le processus de paiement.
3. L'utilisateur doit fournir les informations requises (prénom, nom, code postal) pour finaliser la commande.
4. Une fois les informations fournies, l'utilisateur doit pouvoir confirmer la commande et voir une page de confirmation.

**User Story 5 : Déconnexion de l'application**

En tant qu'utilisateur, je souhaite me déconnecter de l'application afin de sécuriser mon compte.

**Exigences :**

1. L'utilisateur doit pouvoir accéder au menu de navigation.
2. Une option "Logout" doit être disponible dans le menu.
3. En cliquant sur "Logout", l'utilisateur doit être déconnecté et redirigé vers la page de connexion.
