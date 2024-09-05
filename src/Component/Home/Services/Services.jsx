import React from 'react'
import './Services.css'
import {MdOutlineAttachMoney} from 'react-icons/md';
import {BsTruck ,BsHeadset} from 'react-icons/bs'
import {RiSecurePaymentLine} from 'react-icons/ri'

function Services() {
  return (
    <div className='services'>
      <p className="servicestext">Xidmətlərimiz</p>
      <div className="servicescontainer">
        <div className="servicescart">
            <MdOutlineAttachMoney className='servicesboxicon'/>
            <p className="servicesboxtitle">Ödənişin geri qaytarılması qarantisi</p>
        </div>
        <div className="servicescart">
            <BsTruck className='servicesboxicon'/>
            <p className="servicesboxtitle">Pulsuz çatdırılma</p>
        </div>
        <div className="servicescart">
            <BsHeadset className='servicesboxicon'/>
            <p className="servicesboxtitle">Canlı dəstək</p>
        </div>
        <div className="servicescart">
            <RiSecurePaymentLine className='servicesboxicon'/>
            <p className="servicesboxtitle">Təhlükəsiz ödəniş</p>
        </div>
      </div>
    </div>
  )
}

export default Services