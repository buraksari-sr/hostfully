Feature: Add new computer

    Through this feature user should be able to add new computer in the database

    Scenario: User should be able to add new computer
        Given I am on the computer database page
        When I click on "Add a new computer"
        When I fill in the computer name as "Test Computer_Burak"
        When I fill in the introduced date as "2023-10-27"
        And I fill in the discontinued date as "2023-10-30"
        And I select the company as "Sony"
        And I click on the "Create this computer" button
        Then I should see a success message "Computer Test Computer_Burak has been created"

    Scenario: User should not able to add a new computer with invalid dates
        Given I am on the computer database page
        When I click on "Add a new computer"
        And I fill in the computer name as "Test Computer_Burak"
        And I fill in the introduced date as "2023-10-30"
        And I fill in the discontinued date as "2023-10-27"
        And I select the company as "Sony"
        And I click on the "Create this computer" button
        Then I should see an error message "Discontinued date is before introduction date"