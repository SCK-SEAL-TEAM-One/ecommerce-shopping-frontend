import React from 'react';

function ResultRow(props) {
  return (
      
    <tr>
                  <td>{this.props.item.id}</td>
                  <td>{this.props.item.name}</td>
                  <td>{this.props.item.price}</td>
                  <td>{this.props.item.brand}</td>
                  <td></td>
              </tr>
  );
}

export default ResultRow;
