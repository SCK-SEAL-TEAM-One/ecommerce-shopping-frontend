/// <reference types="Cypress" />

context('Actions', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/verify')
    })

    it('verify success', () => {
        cy.get('#lbl_payment_status')
            .should('contain', 'Success')
        cy.get('#btn_payment_ok').click()
        cy.url().should('include', '/notification')
    })
})