/// <reference types="Cypress" />

context('Actions', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/shipping')
    })

    it('shipping result', () => {
        cy.get('#shipping_selected_rdb')
            .should('have.value', '1')
        cy.get('#shipping_price_rdb')
            .should('contain', '50.00')
        cy.get('#shipping_vender_rdb')
            .should('contain', 'Kerry')
        cy.get('#shipping_name_txt')
            .should('contain', 'ติณณ์ นันทวิจิตร')
        cy.get('#shipping_telephone_txt')
            .should('contain', '0863979317')
        cy.get('#shipping_address_txt')
            .should('contain', '123 ถนนรัชาฯ ดินแดง กรุงเทพฯ 10400')
        cy.get('#shipping_province_selected')
            .should('contain', 'กรุงเทพฯ')
        cy.get('#shipping_city_selected')
            .should('contain', 'ดินแดง')
        cy.get('#shipping_district_selected')
            .should('contain', 'ดินแดง')
        cy.get('#shipping_postcode_txt')
            .should('contain', '10400')
    })
})
