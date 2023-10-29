Feature: Filtering computers by name

    Scenario: Filter computers by name
        Given I am on the computer database page
        When I enter "ChipTest" in the search field
        When I click on the "Filter by name" button
        Then I should see a computer with the name "ChipTest" in the search results

    Scenario: Filter computers by non-existent name
        Given I am on the computer database page
        When I enter "Test Computer_Burak" in the search field
        When I click on the "Filter by name" button
        Then I should see no computer in the search results