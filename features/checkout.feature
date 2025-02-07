Feature: Checkout process

Scenario: As a user, I want to succeed in my order process
    Given Log in as user
    And the user has added items selected to the cart
    And the user click on the cart icon
    When the user click on the "Checkout" button
    And the user enter his firstname "Line", his last name "Sg", and his postal code "59000"
    And the user click on "Continue"
    And the user click on "Finish"
    Then a confitmation message "Thank you for your order!" should be displayed 