
Feature: Connexion à l'application

  Scenario: Je veux me connecter en tant qu'utilisateur
    Given Log in as user

  Scenario: Je veux me connecter avec des faux identifiants
    Given Login Fail
