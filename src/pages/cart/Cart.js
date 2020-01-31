import React, {Component} from 'react';
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import { Link } from 'react-router-dom'
import productImage30 from '../../30.jpg'

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

    qtyOptions = [
        { value: "1", label: '1' },
        { value: "2", label: '2' },
        { value: "3", label: '3' },
        { value: "4", label: '4' },
        { value: "5", label: '5' }
    ]

    selectQty(id, v){
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
        <h1 id="txt_result">Cart Item</h1>
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
                  <td><img id={`img_product_${product.id}`} src={productImage30} alt='Product Image' /></td>
                  <td id={`lbl_product_name_${product.id}`}>{product.name}</td>
                  <td>
                  <Dropdown id={`ddl_product_qty_${product.id}`} options={this.qtyOptions}
                    onChange={this.selectQty.bind(this, product.id)} value={String(product.qty)}/>
                    </td>
                  <td id={`lbl_unit_price_${product.id}`}>{product.price}</td>
                  <td id={`lbl_product_total_amount_${product.id}`}>{product.qty * product.price}</td>

                  <td>
                    <button id={`btn_product_remove_${product.id}`} onClick={this.removeProduct.bind(this, product.id)}>Remove</button>
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