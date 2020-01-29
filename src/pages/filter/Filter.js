import React, { useState } from 'react'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'

function Filter(props) {

    const genderOptions = [
        { value: 'M', label: 'Male' },
        { value: 'F', label: 'Female' },
        { value: 'N', label: 'Neutral' },
    ]

    const ageOptions = [
        { value: 1, label: 'Baby' },
        { value: 2, label: 'Todler' },
        { value: 3, label: '3-5' },
        { value: 4, label: '6-8' },
        { value: 5, label: 'Over 8' }
    ]
    const [gender, setGender] = useState(genderOptions[0])
    const [age, setAge] = useState(ageOptions[0])

    function onChangeGender(params) {
        setGender(params)
    }
    function onChangeAge(params) {
        setAge(params)
    }

    return (
        <div id='filter'>
            <div id='ddl-gender'>
                <Dropdown options={genderOptions}
                    onChange={onChangeGender} value={gender}
                    placeholder="Select an option" />
            </div>
            <div id='ddl-age'>
                <Dropdown options={ageOptions}
                    onChange={onChangeAge} value={age}
                    placeholder="Select an option" />
            </div>
        </div>
    )
}

export default Filter