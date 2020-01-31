describe('Propduct Details', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/detail?id=30')
    })
  
    it('cart result', () => {
      cy.get('#lbl_product_name')
      .should('contain', 'Fisher-Price stroller')
      cy.get('#lbl_product_detail')
        .should('contain', 'Fisher-Price stroller')
      cy.get('#lbl_product_price')
        .should('contain', '25.99')
      cy.get('#ddl_qty')
        .select('1')     
      cy.get('#btn_add_cart')
        .should('contain', 'Add To Cart')
        cy.get('#btn_buy_now')
        .should('contain', 'Buy Now')
    })
})