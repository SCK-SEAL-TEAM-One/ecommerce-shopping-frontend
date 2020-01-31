import React, {Component} from 'react';
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import { Link } from 'react-router-dom'

class Cart extends Component {
    constructor(props) {
      super(props);
      this.state = {
          cart: this.getProduct()
        };

    }
    
    getProduct(){
      let products = [];
      if(localStorage.getItem('cart')){
          products = JSON.parse(localStorage.getItem('cart')).products;
      }
      return products;
    }

    amountOptions = [
        { value: "1", label: '1' },
        { value: "2", label: '2' },
        { value: "3", label: '3' },
        { value: "4", label: '4' },
        { value: "5", label: '5' }
    ]

    selectAmount(id, v){
      let productList = this.getProduct()
      for(var i = 0; i < productList.length; i++){
        if(productList[i].id === id){
          productList[i].qty = v.value;
          break;
        }
      }
      this.setState({
        cart: productList
      })
      localStorage.setItem('cart', JSON.stringify({ 'products': productList }));
    }

    removeProduct(id, v){
      let productList = this.getProduct()
      for(var i = 0; i < productList.length; i++){
        if(productList[i].id === id){
          productList.splice(i, 1)
        }
      }
      this.setState({
        cart: productList
      })
      localStorage.setItem('cart', JSON.stringify({ 'products': productList }));
    }

   

    render() {
      return (
        <div id="result" className="table">
        <h1 id="txt_result">Cart</h1>
        <table>
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Product</th>
                    <th>Qty</th>
                    <th>Price</th>
                    <th>Amount</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
              {this.state.cart.map((product) => 
                <tr>
                  <td><img id={`img_product_${product.id}`} src={product.id} alt='Product Image' /></td>
                  <td>{product.name}</td>
                  <td>{product.qty}</td>
                  <td>{product.price}</td>
                    <td>
                    <Dropdown options={this.amountOptions}
                    onChange={this.selectAmount.bind(this, product.id)} value={product.qty}/>
                    </td>

                  <td>
                    <button onClick={this.removeProduct.bind(this, product.id)}>Remove</button>
                      </td>
                </tr>
              )}
            </tbody>
        </table>
        <div>
            <Link to='/shipping'><button>Check Out</button></Link>
        </div>
      </div>
      );
    }

}

export default Cart;