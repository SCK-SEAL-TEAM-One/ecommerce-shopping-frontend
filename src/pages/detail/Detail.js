import React, { useState, Component } from 'react'
import logo from '../../logo192.png'
import productImage30 from '../../30.jpg'
import productImage26 from '../../26.jpg'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import queryString from 'query-string'

class Detail extends Component {

    constructor(props) {
        super(props);
        let values = queryString.parse(this.props.location.search)
        let product = {}
        let product26 = {
            id: String(values.id),
            name: "Les Dollie Toffe Apple",
            img: String(values.id),
            detail: "Les Dollie Toffe Apple",
            price: "24.95",
            qty: "1",
            gender: "F",
            age: "2",
            brand: "CoolKidz",
        }

        let product30 = {
            id: String(values.id),
            name: "Fisher-Price stroller",
            img: String(values.id),
            detail: "Fisher-Price stroller",
            price: "25.99",
            qty: "1",
            gender: "F",
            age: "2",
            brand: "CoolKidz",
        }

        if(values.id == "26") product = product26
        if(values.id == "30") product = product30
        this.state = { 
            product: product,
            productId : "1",
        };
    }

    qtyOptions = [
            { value: 1, label: '1' },
            { value: 2, label: '2' },
            { value: 3, label: '3' },
            { value: 4, label: '4' },
            { value: 5, label: '5' }
    ]

    getProduct(){
        let products = [];
        if(localStorage.getItem('cart')){
            products = JSON.parse(localStorage.getItem('cart')).products;
        }
        return products;
    }

    componentDidMount() {

        fetch('http://localhost:8080/api/v1/products/' + this.state.product.id)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Something went wrong ...');
                }
            })
            .then(data => {
                this.setState({ product: data })
                console.log(data)
                let q = []
                for(var i = 1; i <= data.availability; i++){
                    q.push({value: i, label: String(i)}) 
                }
                this.qtyOptions = q
            })
            .catch(error => this.setState({ error, isLoading: false }));

        
    }



    // const [qty, setQty] = useState()

    addCart(props){
        let productList = this.getProduct()
        
        if(productList.length > 0){
            let c = false
            for(var i = 0; i < productList.length; i++){
                if(productList[i].id == this.state.product.id){
                    productList[i].qty = parseInt(productList[i].qty) + parseInt(this.state.product.qty);
                  c = true;
                  
                  break;
                }
            }
            if(!c){
                productList.push({ 'id': this.state.product.id, 'name': this.state.product.name, 'price': this.state.product.price, 'qty': String(this.state.product.qty) });
            }
        }else{
            productList.push({ 'id': this.state.product.id, 'name': this.state.product.name, 'price': this.state.product.price, 'qty': String(this.state.product.qty) });
            
        }
        localStorage.setItem('cart', JSON.stringify({ 'products': productList }));
        this.props.history.push(`/cart`)
    }

    onChangeQty(e){
        let {name, value} = e.target;
        this.state.product.qty = String(value)
    }

    buyNow(){
        //this.props.history.push(`/Cart`)
    }

    productImage(p, e){
        return this.productImage30
    }

    render() {
        return (
            <div>
            <h1>Product Detail</h1>
            <table>
            <tbody>
                <tr>
                <th>
                    <img id='img_product_no' src={productImage30} alt='Logo' />
                </th>
                </tr>
                <tr>
                <th>
                                Product Name:
                </th>
                <td>
                    <label id='lbl_product_name'>{this.state.product.name}</label>
                </td>
                </tr>
                <tr>
                <th>
                                Product Detail:
                </th>
                <td>
                    <label id='lbl_product_detail'>{this.state.product.detail}</label>
                </td>
                </tr>
                <tr>
                <th>
                    <br/>
                                Price:
                </th>
                <td>
                    <br/>
                    <label id='lbl_product_price'>{this.state.product.price}</label>
                </td>
                </tr>
                <tr>
                <th>
                                Quantity:
                </th>
                <td>
                    <br/>
                    <select id='ddl_qty' onChange={this.onChangeQty.bind(this)}>
                        {
                        this.qtyOptions.map((q) => {
                        return(<option value={q.value}>{q.label}</option>)
                        })
                        }
                    </select>
   
                </td>
                </tr>
                <tr>
                <th>
                </th>
                <td>
                    <br/>
                    <button id='btn_add_cart' onClick={this.addCart.bind(this)}>Add To Cart</button>
                </td>
                </tr>
                <tr>
                <th>
                </th>
                <td>
                    <br/>
                    <button id='btn_buy_now' onClick={this.buyNow}>Buy Now</button>
                </td>
                </tr>
            </tbody>
            </table>
        </div>
        )
    }
}

export default Detail