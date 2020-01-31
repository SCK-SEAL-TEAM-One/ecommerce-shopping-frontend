context('Actions', () => {
    beforeEach(() => {
      let products = [];
      products.push({ 'id': '26', 'name': 'Les Dollie Toffe Apple', 'price': '24.95', 'qty': '1' });
      products.push({ 'id': '30', 'name': 'Fisher-Price stroller', 'price': '25.99', 'qty': '1' });  
      localStorage.setItem('cart', JSON.stringify({ 'products': products }));

      cy.visit('http://localhost:3000/cart')
    })

 
    it('cart result', () => {
      cy.get('#lbl_product_name_30')
      .should('contain', 'Fisher-Price stroller')
      cy.get('#lbl_unit_price_30')
        .should('contain', '25.99')
      cy.get('#lbl_product_total_amount_30')
        .should('contain', '25.99')  
      cy.get('#btn_product_remove_30')
        .should('contain', 'Remove')
    })
  })