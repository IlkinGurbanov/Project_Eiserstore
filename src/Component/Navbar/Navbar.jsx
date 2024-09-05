import React, { useState } from 'react'
import './Navbar.css'
import { FaSearch } from 'react-icons/fa';
import { FaShoppingCart , FaUser } from 'react-icons/fa';
import { AiFillHeart } from 'react-icons/ai';
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi"
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Navbar() {
  // const RootUrl = 'https://eiserwebserver.757jn1b.repl.co'
  const RootUrl = 'https://eiserwebserver.onrender.com'

  const [displaymob,setdisplaymob] = useState("none")
  const [displaycase,setdisplaycase] = useState(false)
  const [hover1,sethover1] = useState("Daxil ol");
  const [hover2,sethover2] = useState("Qeydiyyat");

  const [items, setItems] = useState([]);
  const navigate = useNavigate()

  function handleDisplay(){
    if(displaycase === false){
      setdisplaymob("block")
      setdisplaycase(true)
    }
    else{
      setdisplaymob("none")
      setdisplaycase(false)
    }
  }
  function basket(){
      const items = JSON.parse(localStorage.getItem('account'));
      if (items) {
        setItems(items);
      }
      if(items === null || items === "false"){
        navigate("/Giris")
      }
      else if(items === "true"){
        navigate("/Basket")
      }
  }
  function signin(){
    const items = JSON.parse(localStorage.getItem('account'));
      if (items) {
        setItems(items);
      }
      if(items === null || items === "false"){
        navigate("/Giris")
      }
      else if(items === "true"){
        navigate("/Profile")
      }  }
  function register(){
    const items = JSON.parse(localStorage.getItem('account'));
    if (items) {
      setItems(items);
    }
    if(items === null || items === "false"){
      navigate("/Qeydiyyat")
    }
    else if(items === "true"){
      localStorage.setItem('account', JSON.stringify("false"));
      localStorage.setItem('id',JSON.stringify("null"))
      axios.get(`${RootUrl}/API/products`) 
      .then(res=>{
        res.data.forEach(element => {
          if(element.colorforfav === "red"){
            axios.put(`${RootUrl}/API/products/${element._id}`,{colorforfav:"white"})
            navigate("/")
            window.location.reload(true)
          }
          if(element.colorforbasket === "green"){
            axios.put(`${RootUrl}/API/products/${element._id}`,{colorforbasket:"black"})
            navigate("/")
            window.location.reload(true)
          }
        });
      }).catch((err)=>{
        console.log(err);
      })
      
    }
  }
  function favori(){
    const items = JSON.parse(localStorage.getItem('account'));
      if (items) {
        setItems(items);
      }
      if(items === null || items === "false"){
        navigate("/Giris")
      }
      else if(items === "true"){
        navigate("/Favoriler")
      }
  }
  function user(){
    const items = JSON.parse(localStorage.getItem('account'));
      if (items) {
        setItems(items);
      }
      if(items === null || items === "false"){
        sethover1("Daxil ol")
        sethover2("Qeydiyyat")
      }
      else if(items === "true"){
        sethover1("Profil")
        sethover2("Logout")
      }
  }
  return (
    <div className="Navbar">
      <nav className="navbar">
            <div className="navstart">
              <Link to={"/"}>
                <img src="https://preview.colorlib.com/theme/eiser/img/logo.png" alt="" className="navlogo" />
              </Link>
            </div>
            <div className="navcenter">
              <Link to="/" className="navcenteritem">Ana səhifə</Link>
              <div className="dropdown2">
                <p className="dropdown1head2">
                  Məhsullar
                </p>
                <div className="category2">
                  <div className="dropdown1item2">
                    <div className="dropdown1item2element">
                      <p className="dropdown1itemhead2">Texniki</p>
                      <Link to="/Məhsullar/Texniki/Kompüterlər" className="dropdown1element2">Kompüterlər</Link>
                      <Link to="/Məhsullar/Texniki/Smartfonlar" className="dropdown1element2">Smartfonlar</Link>
                      <Link to="/Məhsullar/Texniki/Planşetlər" className="dropdown1element2">Planşetlər</Link>
                      <Link to="/Məhsullar/Texniki/Ağıllı saatlar" className="dropdown1element2">Ağıllı saatlar</Link>
                    </div>
                    <div className="dropdown1item2element">
                      <p className="dropdown1itemhead2">Geyim</p>
                      <Link to="/Məhsullar/Geyim/Ayaqqabılar" className="dropdown1element2">Ayaqqabılar</Link>
                      <Link to="/Məhsullar/Geyim/Saatlar" className="dropdown1element2">Saatlar</Link>
                    </div>
                    <div className="categoryimage1">
                      <img src="https://www.shutterstock.com/image-illustration/realistic-aluminum-laptop-smart-watch-260nw-2022031508.jpg" alt="" className="categoryimage1item" />
                      <img src="data:image/jpeg;base64,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" alt="" className="categoryimage1item"/>
                    </div>
                  </div>
                </div>
              </div>
              <div className="dropdown1">
                <p className="dropdown1head1">
                  <Link className='navcenteritem' to="/Endirim">Endirimli məhsullar</Link>
                </p> 
              </div>
              <Link to="/Contact" className="navcenteritem">Əlaqə</Link>
            </div>
            <div className="navend">
                <div className="navendicons">
                    <FaShoppingCart onClick={basket} className='navendiconsitem basket'/>
                </div>
                <div className="navendicons">
                    <FaUser onMouseEnter={user} className='navendiconsitem user'/>
                    <div className="navendiconsuser">
                        <p onClick={signin} className="navendiconsItem1">{hover1}</p>
                        <p onClick={register} className="navendiconsItem2">{hover2}</p>
                    </div> 
                </div>
                <div className="navendicons">
                    <AiFillHeart onClick={favori}  className='navendiconsitem heart'/>
                </div>
                <div className="navendicons">
                  <GiHamburgerMenu onClick={handleDisplay} className='navendiconsitem menu'/>
                </div>
            </div>
        </nav>
      <div className="Navbarmenubarformobile">
        <div style={{display:displaymob}} className="navcenterformobile">
        <Link to="/" className="navcenteritemformobile">Ana səhifə</Link>
        <div className="dropdown2formobile">
          <p className="dropdown1head2formobile">
            Məhsullar
          </p>
          <div className="category2formobile">
            <div className="dropdown1item2formobile">
              <div className="dropdown1item2elementformobile">
                <p className="dropdown1itemhead2formobile">Texniki</p>
                <Link to="/Məhsullar/Texniki/Kompüterlər" className="dropdown1element2formobile">Kompüterlər</Link>
                <Link to="/Məhsullar/Texniki/Smartfonlar" className="dropdown1element2formobile">Smartfonlar</Link>
                <Link to="/Məhsullar/Texniki/Planşetlər" className="dropdown1element2formobile">Planşetlər</Link>
                <Link to="/Məhsullar/Texniki/Ağıllı saatlar" className="dropdown1element2formobile">Ağıllı saatlar</Link>
              </div>
              <div className="dropdown1item2elementformobile">
                <p className="dropdown1itemhead2formobile">Geyim</p>
                <Link to="/Məhsullar/Geyim/Ayaqqabılar" className="dropdown1element2formobile">Ayaqqabılar</Link>
                <Link to="/Məhsullar/Geyim/Saatlar" className="dropdown1element2formobile">Saatlar</Link>
              </div>
              <div className="categoryimage1formobile">
                <img src="https://www.shutterstock.com/image-illustration/realistic-aluminum-laptop-smart-watch-260nw-2022031508.jpg" alt="" className="categoryimage1itemformobile" />
                <img src="data:image/jpeg;base64,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" alt="" className="categoryimage1itemformobile"/>
              </div>
            </div>
          </div>
        </div>
        <div className="dropdown1formobile">
          <p className="dropdown1head2formobile">
            <Link className='dropdown1head2formobileitem dropdown1head2formobileitem1' to="/Endirim">Endirimli məhsullar</Link>
          </p> 
          
        </div>
        <Link to="/Contact" className="navcenteritemformobile">Əlaqə</Link>
      </div>
      </div>
    </div>
    
  )
}

export default Navbar