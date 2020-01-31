import React from 'react'
import PropTypes from 'prop-types'
import {
  Link
}
  from 'react-router-dom'

function ResultRow (props) {
  return (
    <tr>
      <td id={`dld_product_result_no_${props.index}`}>{props.index}</td>
      <td id={`dld_product_result_name_${props.index}`}>{props.item.name}</td>
      <td id={`dld_product_result_price_${props.index}`}>{props.item.price}</td>
      <td id={`dld_product_result_brand_${props.index}`}>{props.item.brand}</td>
      <td>
        <Link to={`/detail?id=${props.item.id}`}>
          <button id={`btn_product_detail_${props.item.id}`}>View Details</button>
        </Link>
      </td>
    </tr>
  )
}

ResultRow.propTypes = {
  index: PropTypes.string,
  item: PropTypes.object
}

export default ResultRow
