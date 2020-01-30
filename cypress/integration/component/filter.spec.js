/// <reference types="Cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('filter product', () => {
    cy.get('#ddl_gender')
      .select('F')
    

      
  })
})
