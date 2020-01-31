import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Verify extends Component {
  render () {
    return (
      <div>
        <div id="lbl_payment_status">Success</div>
        <button id='btn_payment_ok' onClick={e => this.props.history.push('/linenotification')}>OK</button>
      </div>
    )
  }
}

Verify.propTypes = {
  history: PropTypes.object
}

export default Verify
