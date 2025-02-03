gherkin

Feature: Connexion à l'application

  Scenario: Connexion réussie avec des identifiants valides
    Given l'utilisateur est sur la page de connexion
    When il saisit le nom d'utilisateur "standard_user"
    And il saisit le mot de passe "secret_sauce"
    And il clique sur le bouton de connexion
    Then il est redirigé vers la page d'accueil

  Scenario: Échec de connexion avec des identifiants invalides
    Given l'utilisateur est sur la page de connexion
    When il saisit le nom d'utilisateur "faux_username"
    And il saisit le mot de passe "faux_password"
    And il clique sur le bouton de connexion
    Then un message d'erreur "Epic sadface: Username and password do not match" apparaît
