import React from 'react'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'

function Filter (props) {
  const genderOptions = [
    { value: 'F', label: 'Female' },
    { value: 'M', label: 'Male' },
    { value: 'N', label: 'Neutral' }
  ]

  const ageOptions = [
    { value: 3, label: '3-5' },
    { value: 4, label: '6-8' },
    { value: 1, label: 'Baby' },
    { value: 5, label: 'Over 8' },
    { value: 2, label: 'Todler' }
  ]

  return (
    <div id='filter'>
      <div id='ddl_gender'>
        <Dropdown options={genderOptions}
          onChange={props.callOnChangeGender} value={props.gender}
          placeholder="Select Gender" />
      </div>
      <div id='ddl_age'>
        <Dropdown options={ageOptions}
          onChange={props.callOnChangeAge} value={props.age}
          placeholder="Select Age" />
      </div>
      <button id='btn_filter' onClick={e => props.history.push(`/result?age=${props.age.value}&gender=${props.gender.value}`)}>Search</button>
    </div>

  )
}

export default Filter
