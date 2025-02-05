
Feature: Inventory functions

Scenario: Verification de la liste des produits
    Given Log in as user
    When Verification de la liste des produits

Scenario: As a user, I want to add SauceLabsBackpack add SauceLabsOnesie on cart
    Given Log in as user
    When the user click on SauceLabsBackpack "ADD TO CART" button
    And the user click on SauceLabsOnesie "ADD TO CART" button 
    Then we can see 2 quantity on cart

Scenario: As a user, I want to add and remove items on cart
    Given Log in as user
    When the user click on SauceLabsBackpack "ADD TO CART" button
    And the user click on SauceLabsOnesie "ADD TO CART" button 
    And the user click on SauceLabsOnesie "REMOVE" button 
    Then we can see 1 quantity on cart

Scenario: As a user, I want to order items list by price(desc)
    Given Log in as user
    When the user click on "Price (high to low)
    Then we can see SauceLabsFleeceJacket in the top rank of the list
    And SauceLabsFleeceJacket price is = $49.99
    And we can see SauceLabsBackpack in the second rank of the list
    And SauceLabsBackpack price is = $29.99
    


    
