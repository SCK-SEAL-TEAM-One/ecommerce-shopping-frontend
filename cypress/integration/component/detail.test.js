describe('Propduct Details', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/detail?id=30')
    })
  
    it('name', () => {
        cy.get('.form-control')
          .type("#lbl_product_name")
          .should('Fisher-Price stroller', input)
    })
})