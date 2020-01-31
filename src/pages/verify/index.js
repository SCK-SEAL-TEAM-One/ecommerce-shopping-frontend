import React, { Component } from 'react'

class Verify extends Component {
    constructor (props) {
        super(props)
      }
    render () {
        return (
            <div>
                <div id="lbl_payment_status">Success</div>
                <button id='btn_payment_ok' onClick={e => this.props.history.push('/notification')}>OK</button>
            </div>
        )
    }
}

export default Verify