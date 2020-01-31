import React, { Component } from "react";

function Payment (props)  {



  return (
      <table>
        <tr>
          <th style={{width: "250px"}}>Description</th>
          <th style={{width: "50px"}}>Quantity</th>
          <th style={{width: "80px"}}>Price</th>
          <th style={{width: "150px"}}>Total</th>
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
            <td>Total Purchase (THB)</td>
            <td></td>
            <td></td>
            <td>฿2,349.45</td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>1 USD = 30.54 THB</td>
        </tr>


        <tr>
            <td colspan="4">
                <input type="radio" id="rdb" value="credit" /> Credit Card <br />
                <input type="radio" id="rdb" value="debit" checked="true" /> Debit Card <br />
                <input type="radio" id="rdb" value="ecomm" /> E-Commerce <br />
            </td>
        </tr>

        <tr>
            <td colspan="4">
                Card Number : <input id="txt_payment_cardno" type="text" style={{width: "250px"}} />
            </td>
        </tr>
        <tr>
            <td colspan="4">
                Card Expired date : <input id="txt_payment_expyear" type="text" style={{width: "50px"}}  /> / <input id="txt_payment_expmonth" type="text" style={{width: "50px"}} />(yy/mm)
            </td>
        </tr>
        <tr>
            <td colspan="4">
                CCV : <input id="txt_payment_cvv" type="password" style={{width: "50px"}}  />
            </td>
        </tr>
        <tr>
            <td colspan="4">
                Card Holder Name : <input id="txt_payment_cardholdername" type="text" style={{width: "250px"}}  />
            </td>
        </tr>

        <tr>
            <td colspan="4">
                Card Holder Name : <input id="txt_payment_cardholdername" type="text" style={{width: "250px"}}  />
            </td>
        </tr>
        <tr>
            <td colspan="4">
                <button id='btn_payment_ok' style={{width: "80px"}} onClick={e => props.history.push(`/shipping`)}>OK</button>
                <button id='btn_payment_cancel' style={{width: "80px"}} onClick={e => props.history.push(`/verify`)}>Cancel</button>
            </td>
        </tr>
    </table>




    )
}

export default Payment;




