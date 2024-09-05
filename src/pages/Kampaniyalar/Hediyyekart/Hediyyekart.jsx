import React from 'react'
import './Hediyyekart.css'

function Hediyyekart() {
  return (
    <div className="giftcard">
      <p className="giftcardhead">Hədiyyə kartları</p>
      <div className="giftcarts">
        <div className="goldcart">
            <p className="goldcarthead">Qızıl kart</p>
            <div className="goldcartitem">
              <p className="carttitle">GOLD</p>
              <img src="https://preview.colorlib.com/theme/eiser/img/logo.png" alt="" className="cartlogo" />
              <img src="" alt="" className="chip" />
            </div>
        </div>
        <div className="silvercart">
            <p className="silvercarthead">Gümüş kart</p>
        </div>
        <div className="bronzecart">
            <p className="bronzecarthead">Bürünc kart</p>
        </div>
      </div>
    </div>
  )
} 

export default Hediyyekart