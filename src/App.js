import React, { useState } from 'react'
import './App.css'
import Result from './pages/result'
import 'bootstrap/dist/css/bootstrap.min.css'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Filter from './pages/filter/Filter'
import Detail from './pages/detail/Detail'

function App () {
  const [gender, setGender] = useState()
  const [age, setAge] = useState()

  function onChangeGender (params) {
    setGender(params)
  }
  function onChangeAge (params) {
    setAge(params)
  }

  return (

    <Router>
      <Route exact path='/' render={props => (
        <div>
          <h1>Shopping</h1>
          <Filter gender={gender} age={age} callOnChangeGender={onChangeGender} callOnChangeAge={onChangeAge} {...props}></Filter>
        </div>
      )} />
      <Route exact path='/result' render={props => (
        <div>
          <Result {...props}/>
        </div>
      )} />
      <Route path='/detail'>
        <Detail></Detail>
      </Route>
    </Router>
  )
}

export default App
