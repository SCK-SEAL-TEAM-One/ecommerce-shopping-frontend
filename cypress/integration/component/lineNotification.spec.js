/// <reference types="Cypress" />

context('Actions', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/linenotification')
    })

    it('shipping result', () => {
        cy.get('#lbl_order')
            .should('contain', '276478095367221')
        cy.get('#lbl_amount')
            .should('contain', '2399.44')
    })
})
