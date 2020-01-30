import React, { useState } from 'react'
import logo from '../../logo192.png'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'

function Detail () {
  const qtyOptions = [
    { value: 1, label: '1' },
    { value: 2, label: '2' },
    { value: 3, label: '3' },
    { value: 4, label: '4' },
    { value: 5, label: '5' }
  ]

  const [qty, setQty] = useState()

  function onChangeQty (params) {
    setQty(params)
  }

  return (
    <div>
      <h1>Product Detail</h1>
      <table>
        <tbody>
          <tr>
            <th>
              <img id='img_product_no' src={logo} alt='Logo' />
            </th>
          </tr>
          <tr>
            <th>
                            Product Name:
            </th>
            <td>
              <label id='lbl_product_name'>Name will display here..</label>
            </td>
          </tr>
          <tr>
            <th>
                            Product Detail:
            </th>
            <td>
              <label id='lbl_product_name'>Detail will display here..</label>
            </td>
          </tr>
          <tr>
            <th>
              <br/>
                            Price:
            </th>
            <td>
              <br/>
              <label id='lbl_product_name'>Price will display here..</label>
            </td>
          </tr>
          <tr>
            <th>
                            Quantity:
            </th>
            <td>
              <br/>
              <Dropdown options={qtyOptions}
                onChange={onChangeQty} value={qty}
                placeholder="Select Quantity" />
            </td>
          </tr>
          <tr>
            <th>
            </th>
            <td>
              <br/>
              <button>Add To Cart</button>
            </td>
          </tr>
          <tr>
            <th>
            </th>
            <td>
              <br/>
              <button>Buy Now</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Detail
