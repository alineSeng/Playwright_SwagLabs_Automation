
Feature: Connexion on website

  Scenario: As a valid user, I want to connect to the website
    Given Log in as user

  Scenario: As a invalid user, my connection to the website is failed
    Given Login Fail
