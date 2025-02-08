
Feature: Inventory functions

Scenario: Check list of all products
    Given Log in as user
    When Verification de la liste des produits

Scenario: As a user, I want to add items (SauceLabsBackpack) on cart
    Given Log in as user
    When the user click on SauceLabsBackpack "ADD TO CART" button
    Then 1 quantity is adding to cart

Scenario: As a user, I want to remove items (SauceLabsBackpack) on cart
    Given Log in as user
    When the user click on SauceLabsBackpack "ADD TO CART" button 
    And the user click on SauceLabsBackpack "REMOVE" button 
    Then the cart should be empty

Scenario: As a user, I want to remove items (SauceLabsOnesie) once from the cart
    Given Log in as user
    When the user click on SauceLabsOnesie "ADD TO CART" button 
    And the user click on the cart icon
    And the user click on the "REMOVE" button for the product 
    Then the cart should be empty

Scenario: As a user, I want to sorting products from highest to lowest price
    Given Log in as user 
    When the user select the filter on the "Price (high to low)" option 
    Then the product list should be sorted in descending order of the price
    And we can see SauceLabsFleeceJacket in the top rank of the list
    And SauceLabsFleeceJacket price is = $49.99
    And we can see SauceLabsBackpack in the second rank of the list
    And SauceLabsBackpack price is = $29.99

Scenario: As a user, I want to sorting products from lowest to highest price
    Given Log in as user 
    When the user select the filter on the "Price (low to high)" option 
    Then the product list should be sorted in ascending order of the price
    And we can see SauceLabsBackpack in the top rank of the list
    And SauceLabsBackpack price is = $29.99
    And we can see SauceLabsFleeceJacket in the second rank of the list
    And SauceLabsFleeceJacket price is = $49.99
    


    
