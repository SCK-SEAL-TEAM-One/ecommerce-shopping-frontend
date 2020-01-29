import React, {Component} from 'react';
import ResultRow from './row';
import queryString from 'query-string'

class Result extends Component {

  constructor(props){
    super(props)
    this.state ={
      products: [],
    }
    // this.fetchRow(props);
  }

  componentDidMount() {
    this.fetchRow(this.props)
 }
  fetchRow(params) {
    const values = queryString.parse(params.location.search)

    // fetch(`http://localhost/api/v1/products?age_id=${encodeURIComponent(values.age)}&gerder_id=${encodeURIComponent(values.gender)}`, {
    //   method: "GET", 
    // })

    this.setState({ products: [
      { 
        id: '30', 
        name: 'Fisher-Price stroller', 
        price: '25.99',
        brand: 'CoolKidz' 
      },
      { 
        id: '26', 
        name: 'Les Dollie Toffe Apple', 
        price: '24.95',
        brand: 'CoolKidz' 
      }
    ]})

  }

  render() {
    return (
      <div id="result" className="table">
        <h1 id="txt_result">Search Result</h1>
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
              
              {this.state.products.map((product) => <ResultRow item={product} />)}

            </tbody>
        </table>
      </div>
    );
  }
}

export default Result;
