import React from 'react'
import 
{
  // BrowserRouter as Router,
  //Switch,
  //Route,
  Link,
  //useRouteMatch,
  //useParams
}
from 'react-router-dom'

function ResultRow (props) {
  return (
    <tr>
      <td>{props.item.id}</td>
      <td>{props.item.name}</td>
      <td>{props.item.price}</td>
      <td>{props.item.brand}</td>
      <td>
        <Link to={`/detail?id=${props.item.id}`}>
          <button id={`btn_product_detail_${props.item.id}`}>View Details</button>
        </Link>
      </td>
    </tr>
  )
}

export default ResultRow
