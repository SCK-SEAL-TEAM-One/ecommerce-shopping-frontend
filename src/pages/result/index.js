import React from 'react';
import ResultRow from './row';

function Result(props) {
  console.log(props)
  return (
    <div id="result" className="table">
      <h1 id="txt_result">Search Result</h1>
          {/* {props.match.params.gender}
            {props.match.params.age} */}
      <table>
          <thead>
              
              <tr>
                  <th>No</th>
                  <th>Toy Name</th>
                  <th>Price</th>
                  <th>Brand</th>
                  <th>View Detail</th>
              </tr>
          </thead>
          <tbody>
            
            
            {/* {props.result.map((item, key) =>
              <ResultRow item={item}></ResultRow>
            )} */}
          </tbody>
      </table>
    </div>
  );
}

export default Result;
