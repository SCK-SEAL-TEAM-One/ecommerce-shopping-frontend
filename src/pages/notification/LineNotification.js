import React from 'react'

function LineNotification () {
  return (
    <div style={{ marginLeft: '10px' }}>
      <h2>Line Notification</h2>
      <div style={{ border: '4px solid' }}>
        <p>ยืนยันการชำระสินค้า</p>
        <p>หมายเลขสั่งซื้อ <label id='lbl_order'>276478095367221</label></p>
        <p>ค่าบริการทั้งหมด <label id='lbl_amount'>2399.82</label> <label>THB</label></p>
      </div><br />

      <div style={{ border: '4px solid' }}>
        <p style={{ marginBottom: '-10px' }}>Del <label>1001422249</label> Order <label>276478095367221</label></p>
        <p>Ref</p>
        <p>ลูกค้า&nbsp;&nbsp;&nbsp;&nbsp;130076383</p>
        <p>คุณ ติณณ์ นันทวิจิตร</p>
        <p>123 ถนนรัชาฯ ดินแดง กรุงเทพมหานคร 10400</p>
      </div>
    </div>
  )
}

export default LineNotification
