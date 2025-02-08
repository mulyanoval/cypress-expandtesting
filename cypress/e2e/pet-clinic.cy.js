describe('Petclinic', () => {
  it('Create Form', () => {
    cy.visit('https://demo.jmix.io/petclinic/login')
    cy.get('[slot="submit"]', { timeout: 60000 })

    cy.get('#input-vaadin-text-field-12').clear()
    cy.get('#input-vaadin-text-field-12').type('joy')
    cy.get('#input-vaadin-password-field-13').clear()
    cy.get('#input-vaadin-password-field-13').type('joy')
    cy.get('[slot="submit"]').click()
    cy.get('#menu > :nth-child(1) > .jmix-menu-item-link > .link-text', { timeout: 60000 })

    cy.get('#content-vaadin-details-15 > .menubar-list > :nth-child(1) > .jmix-menu-item-link').click()
    cy.get('#createBtn', { timeout: 60000 }).click()

    cy.get('#nameField', { timeout: 60000 }).should('be.visible')
    
    cy.get('#nameField').type('Noval')
    cy.get('#identificationNumberField').type('12345678')
    cy.get('#birthdateField').type('01/01/1980{enter}')
    cy.get('#typeField').type('Ice{enter}{esc}')
    cy.get('#ownerField > [slot="actions"] > [aria-label="Open a lookup view to select a related entity"]').click()
    cy.contains('Jessie', { timeout: 60000 })
    
    cy.get('#ownersDataGrid > vaadin-grid-cell-content:nth-child(25)').click()
    cy.wait(5000)
    cy.get('#selectBtn').click()
    cy.wait(5000)
    cy.get('#saveAndCloseBtn').click()
    cy.wait(5000)
    cy.get('#logoutButton').click()
    
  })
})