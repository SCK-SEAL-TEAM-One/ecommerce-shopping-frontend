import React from 'react'
import 'react-dropdown/style.css'
import PropTypes from 'prop-types'

function Filter (props) {
  const genderOptions = [
    { value: '', label: 'Select Gender' },
    { value: 'F', label: 'Female' },
    { value: 'M', label: 'Male' },
    { value: 'N', label: 'Neutral' },
    { value: 'E', label: ' ' }
  ]

  const ageOptions = [
    { value: '', label: 'Select Age' },
    { value: 3, label: '3-5' },
    { value: 4, label: '6-8' },
    { value: 1, label: 'Baby' },
    { value: 5, label: 'Over 8' },
    { value: 2, label: 'Todler' }
  ]

  return (
    <div id='filter'>
      <select id='ddl_gender' onChange={props.callOnChangeGender}>
        {
          genderOptions.map((gender, index) => {
            return (<option key={index} value={gender.value}>{gender.label}</option>)
          })
        }
      </select>
      <select id='ddl_age' onChange={props.callOnChangeAge}>
        {
          ageOptions.map((age, index) => {
            return (<option key={index} value={age.value}>{age.label}</option>)
          })
        }
      </select>
      <button id='btn_filter' onClick={e => props.history.push(`/result?age=${props.age.value}&gender=${props.gender.value}`)}>Search</button>
    </div>

  )
}

Filter.propTypes = {
  history: PropTypes.object,
  callOnChangeAge: PropTypes.func.isRequired,
  callOnChangeGender: PropTypes.func.isRequired,
  age: PropTypes.object,
  gender: PropTypes.object
}
export default Filter
