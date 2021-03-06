import React, { useState } from 'react'
import './App.css'
import Result from './pages/result'
import 'bootstrap/dist/css/bootstrap.min.css'

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import Filter from './pages/filter/Filter'
import Detail from './pages/detail/Detail'
import Cart from './pages/cart/Cart'
import Verify from './pages/verify'
import Shipping from './pages/shipping/Shipping'
import Payment from './pages/payment/Payment'
import LineNotification from './pages/notification/LineNotification'

function App() {
  const [gender, setGender] = useState(0)
  const [age, setAge] = useState()


  function onChangeGender(params) {
    setGender({ value: params.target.value })
  }
  function onChangeAge(params) {
    setAge({ value: params.target.value })
  }

  return (

    <Router>
      <Route exact path='/' render={props => (
        <div>
          <h1>Shopping</h1>
          <Filter gender={gender} age={age} callOnChangeGender={onChangeGender} callOnChangeAge={onChangeAge} {...props}></Filter>
        </div>
      )} />
      <Route path='/result' render={props => (
        <div>
          <Result {...props} />
        </div>
      )} />
      <Route path='/detail' render={props => (
        <div>
          <Detail {...props} />
        </div>
      )} />
      <Route path='/cart' render={props => (
        <div>
          <Cart {...props} />
        </div>
      )} />
      <Route exact path='/verify' render={props => (
        <div>
          <Verify {...props} />
        </div>
      )} />
      <Route path='/shipping' render={props => (
        <div>
          <Shipping {...props} />
        </div>
      )} />
        <Route path='/payment' render={props => (
          <div>
            <Payment {...props} />
          </div>
        )} />
      <Route path='/linenotification' render={props => (
        <div>
          <LineNotification />
        </div>
      )} />
    </Router>

  )
}

export default App
