context('Actions', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/cart')
    })
  
    it('cart result', () => {
      cy.get('#lbl_product_name_30')
      .should('contain', 'Fisher-Price stroller')
      cy.get('#lbl_total_qty_30')
        .should('contain', '1')
      cy.get('#lbl_unit_price_30')
        .should('contain', '25.99')
      cy.get('#lbl_unit_amount_30')
        .should('contain', '25.99')      
      cy.get('#btn_product_remove_30')
        .should('contain', 'Remove')
    })
  })