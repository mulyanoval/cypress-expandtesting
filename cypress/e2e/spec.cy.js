describe("Nav Menus", () => {
  context("720p resolution", () => {
    beforeEach(() => {
      // run these tests as if in a desktop
      // browser with a 720p monitor
      cy.viewport('macbook-15');
    });

    it("Visits the website", () => {
      cy.visit("https://magento.softwaretestingboard.com/");
      cy.get(".logo > img");

      cy.get('#search').type('Hoodie{enter}')
      cy.contains('Abominable Hoodie')

      cy.get(':nth-child(4) > .product-item-info > .photo > .product-image-container > .product-image-wrapper > .product-image-photo').click()
      cy.get('#product-addtocart-button').should('be.visible').should('be.enabled')

      cy.get('#option-label-size-143-item-170').click()
      cy.get('#option-label-color-93-item-53').click()
      cy.get('#product-addtocart-button').click().wait(1000)
      cy.get('.message-success > div').should('include.text', 'You added Abominable Hoodie to your shopping cart').wait(2000)

      cy.get('.showcart').click()
      cy.get('#top-cart-btn-checkout').should('be.visible').should('be.enabled').click()
      cy.get('#shipping > .step-title').should('include.text', 'Shipping Address')

      cy.get('#customer-email-fieldset > .required > .control > #customer-email').type('mulyanoval@gmail.com')
      cy.get('[name="shippingAddress.firstname"]').type('Mulya')
      cy.get('[name="shippingAddress.lastname"]').type('Noval')
      cy.get('.street').type('Baker Street')
      cy.get('[name="shippingAddress.city"]').type('California')
      cy.get('select[name="region_id"]').select('California')
      cy.get('[name="shippingAddress.postcode"]').type('12930')
      cy.get('select[name="country_id"]').select('United States')
      cy.get('[name="shippingAddress.telephone"]').type('081222334411')
      cy.get(':nth-child(2) > :nth-child(1) > .radio').click().wait(2000)
      cy.get('.button').should('be.visible').should('be.enabled').click()

    });
  });
});
