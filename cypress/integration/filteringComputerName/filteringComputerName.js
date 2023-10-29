
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';


Given('I am on the computer database page', function () {
  cy.visit('https://computer-database.gatling.io/computers')
})

When('I enter {string} in the search field', (searchTerm) => {
    cy.get('#searchbox').type(searchTerm);
  });
  
  When('I click on the "Filter by name" button', () => {
    cy.get('#searchsubmit').click();
  });
  
  Then('I should see a computer with the name {string} in the search results', (computerName) => {
    cy.contains('table.computers tbody tr', computerName).should('be.visible');
  });
  
  Then('I should see no computer in the search results', () => {
    cy.get('table.computers tbody tr').should('not.exist');
  });