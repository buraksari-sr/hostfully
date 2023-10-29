
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';


Given('I am on the computer database page', function () {
  cy.visit('https://computer-database.gatling.io/computers')
})

When('I click on "Add a new computer"', function () {
  cy.get('#add').click();
});

When('I fill in the computer name as {string}', (computerName) => {
  cy.get('#name').type(computerName);
});

When('I fill in the introduced date as {string}', (introducedDate) => {
  cy.get('#introduced').type(introducedDate);
});

When('I fill in the discontinued date as {string}', (discontinuedDate) => {
  cy.get('#discontinued').type(discontinuedDate);
});

When('I select the company as {string}', (company) => {
  cy.get('#company').select(company);
});

When('I click on the {string} button', (buttonText) => {
  cy.contains('input', buttonText).click();
});

Then('I should see a success message {string}', (successMessage) => {
  cy.contains('.alert-message', successMessage).should('be.visible');
});

Then('I should see an error message {string}', (errorMessage) => {
  cy.contains('.clearfix .help-inline', errorMessage).should('be.visible');
});
