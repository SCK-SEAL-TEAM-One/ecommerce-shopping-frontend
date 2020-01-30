/// <reference types="Cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/result?age=3&gender=F')
  })

  it('product result', () => {
    cy.get('#dld_product_result_no_1')
    .should('contain', '1')
    cy.get('#dld_product_result_name_1')
      .should('contain', 'Fisher-Price stroller')
    cy.get('#dld_product_result_price_1')
      .should('contain', '25.99')
    cy.get('#dld_product_result_brand_1')
      .should('contain', 'CoolKidz')
  })
})
