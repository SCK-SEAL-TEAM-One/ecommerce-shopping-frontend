import React from 'react'
import {
  BrowserRouter as Link
} from 'react-router-dom'
import ShippingDetail from '../../pages/shipping/ShippingDetail'

function Shipping (props) {
  return (
    <div style={{ marginLeft: '10px' }}>
      <ShippingDetail />
      <table id='shipping_address'><br />
        <tbody>
          <tr>
            <th>
              <h2>Shiiping Method: </h2>
            </th>
            <td>
              <input type='hidden' id='shipping_selected_rdb' value='1' />
              <label id='shipping_vender_rdb'>Kerry</label> <label id='shipping_price_rdb'>50.00</label>
              <br />
            </td>
          </tr>
          <tr>
            <th>
              <h2>Shipping Address </h2>
            </th>
          </tr>
          <tr>
            <th>
              <h3>Name: </h3>
            </th>
            <td>
              <p id='shipping_name_txt'>ติณณ์ นันทวิจิตร</p>
            </td>
          </tr>
          <tr>
            <th>
              <h3>Telephone: </h3>
            </th>
            <td>
              <p id='shipping_telephone_txt'>0863979317</p>
            </td>
          </tr>
          <tr>
            <th>
              <h3>Address: </h3>
            </th>
            <td>
              <p id='shipping_address_txt'>123 ถนนรัชาฯ ดินแดง กรุงเทพฯ 10400</p>
            </td>
          </tr>
          <tr>
            <th>
              <h3>Province: </h3>
            </th>
            <td>
              <p id='shipping_province_selected'>กรุงเทพฯ</p>
            </td>
          </tr>
          <tr>
            <th>
              <h3>City: </h3>
            </th>
            <td>
              <p id='shipping_city_selected'>ดินแดง</p>
            </td>
          </tr>
          <tr>
            <th>
              <h3>District: </h3>
            </th>
            <td>
              <p id='shipping_district_selected'>ดินแดง</p>
            </td>
          </tr>
          <tr>
            <th>
              <h3>Post code: </h3>
            </th>
            <td>
              <p id='shipping_postcode_txt'>10400</p>
            </td>
          </tr>
          <tr>
            <th>
            </th>
            <td>
            <button id='btn_shipping_next' style={{width: "80px"}} onClick={e => props.history.push(`/payment`)}>Next</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Shipping
