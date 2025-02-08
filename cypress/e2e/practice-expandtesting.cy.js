describe('Test Login Page', () => {

  beforeEach(function () {
    cy.viewport('macbook-16')
    cy.visit('https://practice.expandtesting.com/login')
    cy.contains('Test Login page for Automation Testing Practice')
});

  it('A user logins with valid credentials and is successfully navigated to the secure page with a success message', () => {
    cy.get('#username').type('practice')
    cy.get('#password').type('SuperSecretPassword!')
    cy.get('#login > .btn').click()
    cy.get('#flash').should('include.text', 'You logged into a secure area!')
  })

  it('A user logins with empty credentials and is failed with an error message', () => {
    cy.get('#login > .btn').click()
    cy.get('#flash').should('include.text', 'Your username is invalid!')
  })

  it('A user logins with incorrect username and is failed with an error message', () => {
    cy.get('#username').type('practice123')
    cy.get('#password').type('SuperSecretPassword!')
    cy.get('#login > .btn').click()
    cy.get('#flash').should('include.text', 'Your password is invalid!')
  })

  it('A user logins with incorrect password and is failed with an error message', () => {
    cy.get('#username').type('practice')
    cy.get('#password').type('SuperSecret')
    cy.get('#login > .btn').click()
    cy.get('#flash').should('include.text', 'Your password is invalid!')
  })

})

describe('Test Register Page', () => {

  beforeEach(function () {
    cy.viewport('macbook-16')
    cy.visit('https://practice.expandtesting.com/register')
    cy.contains('Test Register page for Automation Testing Practice')
});

  it('A user registers with a less than 3 characters username and is failed with an error message', () => {
    cy.get('#username').type('p')
    cy.get('#password').type('password')
    cy.get('#confirmPassword').type('password')
    cy.get('[data-testid="register"] > .btn').click()
    cy.get('#flash').should('include.text', 'Username must be at least 3 characters long.')
  })

})