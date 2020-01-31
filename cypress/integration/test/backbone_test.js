describe('filter', function() {


//Go to Filter Page
    it('Go to Shopping e-Commerce Website', function() {
        cy.visit('http://localhost:3000')
    })

//Verify Elements
    it('Verify Gender Option should be showed Female, Male, Neural', function() {
              cy.get('#ddl_gender > option').should(($lis) => {
              expect($lis.eq(0)).to.contain('Select Gender')
              expect($lis.eq(1)).to.contain('Female')
              expect($lis.eq(2)).to.contain('Male')
              expect($lis.eq(3)).to.contain('Neutral')
            })

    })

    it('Verify Age Option should be showed Female, Male, Neural', function() {
              cy.get('#ddl_age > option').should(($lis) => {

              expect($lis.eq(0)).to.contain('Select Age')
              expect($lis.eq(1)).to.contain('3-5')
              expect($lis.eq(2)).to.contain('6-8')
              expect($lis.eq(3)).to.contain('Baby')
              expect($lis.eq(4)).to.contain('Over 8')
              expect($lis.eq(5)).to.contain('Toddler')
            })

    })

    it('Can select Female as Gender ', function() {
        cy.get('#ddl_gender').select('F')
    })

    it('Can select Toddler as Aged', function() {
        cy.get('#ddl_age').select('3')
    })

    it('Can Click Search Button to display the result', function() {
        cy.get('#btn_filter').click()
    })

    it('Wait filter page', function() {
        cy.wait(2000)
    })

// Search Result Page
    it('Search Result Should be showed 2 toys', function() {
            cy.get('[id="lbl_product_result_no_1"]').contains('1')
            cy.get('[id="lbl_product_result_no_2"]').contains('2')

        })
    it('Search Result Should be showed Fisher-Prices stroller in product 1', function() {
            cy.get('[id="lbl_product_result_name_1"]').contains('Fisher-Prices stroller')
        })

    it('Search Result Should be showed Les Dollie Toffee Apple in product 2', function() {
            cy.get('[id="lbl_product_result_name_2"]').contains('Les Dollie Toffee Apple')
        })

    it('Search Result Should be showed 25.99 in product 1', function() {
            cy.get('[id="lbl_product_result_price_1"]').contains('25.99')
        })

    it('Search Result Should be showed 24.95 in product 2', function() {
            cy.get('[id="lbl_product_result_price_2"]').contains('24.95')
        })

   it('Search Result Should be showed CoolKidz in product 1', function() {
            cy.get('[id="lbl_product_result_brand_1"]').contains('CoolKidz')
        })

    it('Search Result Should be showed CoolKidz in product 2', function() {
            cy.get('[id="lbl_product_result_brand_2"]').contains('CoolKidz')
        })

    it('Search Result Page Should be showed View Details Button', function() {
        cy.get('[id="btn_product_detail_30"]').contains('View Details')
        cy.get('[id="btn_product_detail_26"]').contains('View Details')
    })

    it('Can Click View Details Button of Product Fisher-Prices stroller and changed page to product detail page', function() {
        cy.get('[id="btn_product_detail_30"]').click()
    })

//Product #1 Product Details

    it('Product Details Page Should be showed detail of Product Fisher-Prices stroller', function() {
        cy.get('[id="lbl_product_name"]').contains('Fisher-Prices stroller')
        cy.get('[id="lbl_product_detail"]').contains('Fisher-Prices stroller')
        cy.get('[id="lbl_product_price"]').contains('25.99')
        cy.get('#ddl_qty > option').should(($lis) => {

                      expect($lis.eq(0)).to.contain('1')
                      expect($lis.eq(1)).to.contain('2')
                      expect($lis.eq(2)).to.contain('3')
                      expect($lis.eq(3)).to.contain('4')
                      expect($lis.eq(4)).to.contain('5')

                    })
        cy.get('[id="btn_add_cart"]').contains('Add To Cart')
        cy.get('[id="btn_buy_now"]').contains('Buy Now')
    })

    it('Can Select Product Quantity as 2', function() {
        cy.get('[id="ddl_qty"]').click()
        cy.get('[id="ddl_qty"]').contains('2').click()
    })

    it('Can Click Add To Cart Button and changed page to Shopping Cart', function() {
        cy.get('[id="btn_add_cart"]').click()

    })

//Shopping Cart Page
    // TODO validate Shopping cart Page
    it('Shopping Cart Page Should be showed Selected Product', function() {
        cy.get('[id="lbl_product_name_1"]').contains('Fisher-Prices stroller')
        cy.get('[id="lbl_product_detail_1"]').contains('Fisher-Prices stroller')
        cy.get('[id="lbl_product_price_1"]').contains('25.99')
        cy.get('#ddl_qty > option').should(($lis) => {

                      expect($lis.eq(0)).to.contain('1')
                      expect($lis.eq(1)).to.contain('2')
                      expect($lis.eq(2)).to.contain('3')
                      expect($lis.eq(3)).to.contain('4')
                      expect($lis.eq(4)).to.contain('5')

                    })
        cy.get('[id="lbl_total_qty"]').contains('2')
        cy.get('[id="lbl_total_amount"]').contains('58.98')
        cy.get('[id="btn_continue_shopping"]').contains('Continue Shopping')
        cy.get('[id="btn_checkout"]').contains('Checkout')
    })

    it('Can Support Continue Shopping and change to Search Page', function() {
        cy.get('[id="btn_continue_shopping"]').click()

    })
// Continue Shopping
    it('Website Should be show Search Page', function() {
              cy.get('h1').to.contain('Shopping')
    })

    it('Can be select search criteria ', function() {
        cy.get('#ddl_gender').select('F')
        cy.get('#ddl_age').select('3')
    })

    it('Can Click Search Button to display the result', function() {
        cy.get('#btn_filter').click()
    })

// Search Result
    it('Can Click View Details Button of Product Les Dollie Toffee Apple and changed page to product detail page', function() {
        cy.get('[id="btn_product_detail_26"]').click()
    })


//Product #2 Product Details

    it('Product Details Page Should be showed detail of Product Les Dollie Toffee Apple', function() {
        cy.get('[id="lbl_product_name"]').contains('Les Dollie Toffee Apple')
        cy.get('[id="lbl_product_detail"]').contains('Les Dollie Toffee Apple')
        cy.get('[id="lbl_product_price"]').contains('24.95')
        cy.get('#ddl_qty > option').should(($lis) => {

                      expect($lis.eq(0)).to.contain('1')
                      expect($lis.eq(1)).to.contain('2')
                      expect($lis.eq(2)).to.contain('3')
                      expect($lis.eq(3)).to.contain('4')
                      expect($lis.eq(4)).to.contain('5')

                    })
        cy.get('[id="btn_add_cart"]').contains('Add To Cart')
        cy.get('[id="btn_buy_now"]').contains('Buy Now')
    })

    it('Can Select Product Quantity as 1', function() {
        cy.get('[id="ddl_qty"]').click()
        cy.get('[id="ddl_qty"]').contains('1').click()
    })

    it('Can Click Add To Cart Button and changed page to Shopping Cart', function() {
        cy.get('[id="btn_add_cart"]').click()

    })

//Shopping Cart Page
    it('Shopping Cart Page Should be showed 2 Products', function() {
        cy.get('[id="lbl_product_name_1"]').contains('Fisher-Prices stroller')
        cy.get('[id="lbl_product_name_2"]').contains('Les Dollie Toffee Apple')
        cy.get('[id="lbl_total_qty"]').contains('3')
        cy.get('[id="lbl_total_amount"]').contains('76.93')
    })

    it('Can Click Check Out and change to Shipping Order Page', function() {
        cy.get('[id="btn_check_out"]').click()
    })

// Shipping Page

  it('Shopping Cart Page Should be showed 2 Products and shipping information', function() {
        // validation shopping cart info
        cy.get('[id="lst_description_1"]').contains('Fisher-Prices stroller')
        cy.get('[id="lst_description_2"]').contains('Les Dollie Toffee Apple')
        cy.get('[id="lst_quantity_1"]').contains('2')
        cy.get('[id="lst_quantity_2"]').contains('1')
        cy.get('[id="lst_price_1"]').contains('25.99')
        cy.get('[id="lst_price_2"]').contains('24.95')
        cy.get('[id="lst_total_of_product_1"]').contains('51.98')
        cy.get('[id="lst_total_of_product_2"]').contains('24.95')
        cy.get('[id="lbl_total_of_purchase"]').contains('76.93')
        cy.get('[id="lbl_total_charge"]').contains('76.93')
        cy.get('[id="lbl_exchange_rate"]').contains('30.54')

        // validation shipping method

        cy.get('[type="radio"]').check('Kerry')
        cy.get('[type="radio"]').uncheck('Lineman')
        cy.get('[type="radio"]').uncheck('Thailand Post')

        cy.get('[id="btn_next"]').contains('Next')
    })

// Enter in shipping info
    it('Can input shipping information ', function() {
        cy.get('[id="txt_shipping_name"]').type("ติณณ์ นันทวิจิตร")
        cy.get('[id="txt_shipping_telephone"]').type("0863979317")
        cy.get('[id="txt_shipping_address"]').type("123 ถนนรัชดาฯ ดินแดง กรุงเทพฯ")
        cy.get('[id="txt_shipping_postcode"]').type("10400")

    })

   it('Can Click Next and change to Payment Method Page', function() {
        cy.get('[id="btn_next"]').click()
    })

// Payment Method
    it('Payment Method Page Should be showed 2 Products and payment information', function() {
        // validation shopping cart info
        cy.get('[id="lst_description_1"]').contains('Fisher-Prices stroller')
        cy.get('[id="lst_description_2"]').contains('Les Dollie Toffee Apple')
        cy.get('[id="lst_quantity_1"]').contains('2')
        cy.get('[id="lst_quantity_2"]').contains('1')
        cy.get('[id="lst_price_1"]').contains('793.74')
        cy.get('[id="lst_price_2"]').contains('761.98')
        cy.get('[id="lst_total_of_product_1"]').contains('1,587.84')
        cy.get('[id="lst_total_of_product_2"]').contains('761.98')
        cy.get('[id="lbl_total_of_purchase"]').contains('2,349.82')
        cy.get('[id="lbl_shipping_charge"]').contains('50.00')
        cy.get('[id="lbl_total_charge"]').contains('2,399.82')
        cy.get('[id="lbl_exchange_rate"]').contains('30.54')

        // validation shipping method
        cy.get('[type="radio"]').check('Credit')
        cy.get('[type="radio"]').uncheck('Debit')
        cy.get('[type="radio"]').uncheck('E-commerce')
        cy.get('[id="btn_ok"]').contains('OK')
        cy.get('[id="btn_cancel"]').contains('Cancel')
    })

// Enter in Card info
    it('Can input card information', function() {
        cy.get('[id="txt_payment_cardnumber"]').type("4162020007343123")
        cy.get('[id="txt_payment_cvv"]').type("222")
        cy.get('[id="txt_payment_cardholdername"]').type("")
        cy.get('[id="txt_payment_expyear"]').type("21")
        cy.get('[id="txt_payment_expmonth"]').type("06")

    })

    it('Can redirect to payment gateway page and payment success', function() {
        cy.get('[id="btn_ok"]').click()
    })

    it('Can Display Success Message', function() {
        cy.get('[id="lbl_payment_status"]').contains('Success')
    })

    it('Can redirect to Notification Page', function() {
        cy.get('[id="lbl_order"]').contains('276478095367221')
        cy.get('[id="lbl_amount"]').contains('Success')
        cy.get('#p').contains('123 ถนนรัชดาฯ ดินแดง กรุงเทพฯ 10400')
        cy.get('#p').contains('1001422249')
        cy.get('#p').contains('ติณณ์ นันทวิจิตร')
    })













///

    it('Check Out', function() {
        cy.get('[id="btn_checkout"]').contains('Checkout')
        cy.get('[id="btn_checkout"]').click()

    })

    it('Wait filter page', function() {
        cy.wait(3000)
    })

    it('Next to Payment', function() {
        cy.get('[id="btn_payment_next"]').contains('Next')
        cy.get('[id="btn_payment_next"]').click()

    })

    it('Wait Payment Page', function() {
        cy.wait(2000)
    })

    it('Confirm Payment', function() {
        cy.get('[id="btn_payment_ok"]').contains('OK')
        cy.get('[id="btn_payment_ok"]').click()

    })

    it('Wait Authen Page', function() {
        cy.wait(3000)
    })

    it('Payment Success', function() {
        cy.get('[id="btn_payment_ok"]').contains('OK')
        cy.get('[id="btn_payment_ok"]').click()

    })

})