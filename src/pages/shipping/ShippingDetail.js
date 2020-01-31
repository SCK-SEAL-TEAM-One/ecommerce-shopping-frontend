import React from 'react'

function ShippingDetail () {
  return (
      <table>
          <tr>
            <th>Description</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
          <tr>
              <td id="txt_description_1">Fisher-Price stroller</td>
              <td id="txt_quantity_1">2</td>
              <td id="txt_price_1">$25.99</td>
              <td id="txt_total_of_purchase_1">$51.98</td>
          </tr>
          <tr>
              <td id="txt_description_2">Les Dollie Toffe Apple</td>
              <td id="txt_quantity_2">1</td>
              <td id="txt_price_2">$24.95</td>
              <td id="txt_total_of_purchase_2">$24.95</td>
          </tr>
          <tr>
              <td>Total of Purchase</td>
              <td></td>
              <td></td>
              <td id="lbl_total_of_purchase">$76.93</td>
          </tr>
          <tr>
              <td></td>
              <td></td>
              <td></td>
              <td>====</td>
          </tr>
          <tr>
              <td>Total Charge</td>
              <td></td>
              <td></td>
              <td id="lbl_total_charge">$76.93</td>
          </tr>
          <tr>
              <td></td>
              <td></td>
              <td></td>
              <td>1 USD = 30.54 THB</td>
          </tr>
      </table>
    )
}

export default ShippingDetail
