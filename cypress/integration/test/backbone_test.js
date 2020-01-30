describe('filter', function() {
    it('should successfully loads', function() {
        cy.visit('http://localhost:3000')
    })

//    it('Validate gender option', function() {
//    	cy.get('[id="ddl_gender"]').click()
//        cy.get('[id="ddl_gender"]').contains(‘F’)
//        cy.get('[id="ddl_gender"]').contains(’M’)
//        cy.get('[id="ddl_gender"]').contains(’N’)
//        //cy.get('[id="ddl_gender"]').contains(’E’)
//    })

    it('Get Gender', function() {
	cy.get('[id="ddl_gender"]').click()
        cy.get('[id="ddl_gender"]').contains('F').click()
    })

    it('Get Age', function() {
        cy.get('[id="ddl_age"]').click()
        cy.get('[id="ddl_age"]').contains('3').click()
    })

    it('Search', function() {
      cy.get('[id="btn_filter"]').click()
      cy.contains('Search').click()
    })

    it('Wait filter page', function() {
          cy.wait(2000)
    })

    it('Search Result Page', function() {
          cy.get('[id="btn_product_detail_30"]').contains('View Details')
          cy.get('[id="btn_product_detail_30"]').click()

    })


//    it('Select Product Quantity', function() {
//          cy.get('[id="ddl_qty"]').contains('Select Quantity')
//          cy.get('[id="ddl_qty"]').click()
//
//    })
//
//    it('Add Product to Cart', function() {
//           cy.get('[id="btn_add_cart"]').click()
//           cy.get('[id="btn_add_cart"]').contains('Add To Cart').click()
//    })






})

