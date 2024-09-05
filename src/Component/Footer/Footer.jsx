import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import { BsInstagram , BsFacebook , BsTwitter , BsYoutube} from 'react-icons/bs';

function Footer() {
  return (
    <div className="Footer footpp">
      <div className="footer">
        <div className="upfooter">
          <div className="foothome">
              <p className="foothomehead">Ana səhifə</p>
              <p className="foothomeitem">Xidmətlər</p>
              <p className="foothomeitem">Ən çox satılanar</p>
              <p className="foothomeitem">Yeni məhsullar</p>
          </div>
          <div className="footproduct">
              <p className="footproducthead">Texniki məhsullar</p>
              <Link to="/Məhsullar/Texniki/Kompüterlər" className="footproductitem">Kompüterlər</Link>
              <Link to="/Məhsullar/Texniki/Smartfonlar" className="footproductitem">Smartfonlar</Link>
              <Link to="/Məhsullar/Texniki/Planşetlər" className="footproductitem">Planşetlər</Link>
              <Link to="/Məhsullar/Texniki/Ağıllı saatlar" className="footproductitem">Ağıllı saatlar</Link>
          </div>
          <div className="footproduct">
              <p className="footproducthead">Geyim məhsulları</p>
              <Link to="/Məhsullar/Geyim/Ayaqqabılar" className="footproductitem">Ayaqqabılar</Link>
              <Link to="/Məhsullar/Geyim/Saatlar" className="footproductitem">Saatlar</Link>
          </div>
          <div className="footcompany">
              <p className="footproducthead">Kampaniyalar</p>
              <Link to="/Endirim" className="footproductitem">Endirimli məhsullar</Link>
          </div>
          <div className="footcontact">
              <Link to="/Contact" className="footcontacthead">Bizimlə əlaqə</Link>
              <Link to="https://www.instagram.com/" className="footcontactitem">
                <BsInstagram className='contacticon'/>
                <span className='contacticontext'>Instagram/eiser</span> 
              </Link>
              <Link to="https://www.facebook.com/" className="footcontactitem">
                <BsFacebook className='contacticon'/>
                <span className='contacticontext'>Facebook/eiser</span> 
              </Link>
              <Link to="https://twitter.com/" className="footcontactitem">
                <BsTwitter className='contacticon'/>
                <span className='contacticontext'>Twitter/eiser</span> 
              </Link>
              <Link to="https://www.youtube.com/" className='footcontactitem'>
                <BsYoutube className='contacticon'/>
                <span className='contacticontext'>Youtube/eiser</span> 
              </Link>
          </div>
        </div>
        <div className="endfooter">
          <p className="endfooterstart">
            Copyright ©2023 All rights reserved
          </p>
          <p className="endfooterend">Privacy - Policy</p>
        </div>
      </div>
    </div>
  )
}

export default Footer