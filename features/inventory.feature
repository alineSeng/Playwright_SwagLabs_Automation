
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

Scenario: As a user, I want to remove items (SauceLabsBackpack) once from the cart
    Given Log in as user
    When the user click on SauceLabsBackpack "ADD TO CART" button 
    And the user click on the cart icon
    And the user click on the "REMOVE" button once from the detail cart page
    Then the cart should be empty once from the detail cart page

Scenario: As a user, I want to sorting products from highest to lowest price
    Given Log in as user 
    When the user select the filter on the "Price high to low" option 
    Then the product list should be sorted in descending order of the price
    

Scenario: As a user, I want to sorting products from lowest to highest price
    Given Log in as user 
    When the user select the filter on the "Price low to high" option 
    Then the product list should be sorted in ascending order of the price



    
