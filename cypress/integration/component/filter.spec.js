/// <reference types="Cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('filter product', () => {
    cy.get('#ddl_gender')
      .select('F')
    cy.get('#ddl_age')
      .select('3')
    cy.get('#btn_filter').click()
    cy.url().should('include', '/result?age=3&gender=F')
  })
})
