import React, { useEffect, useState } from 'react'
import './Details.css'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import PulseLoader from "react-spinners/PulseLoader";
import { useNavigate } from 'react-router-dom';

function Details() {
    // const RootUrl = 'https://eiserwebserver.757jn1b.repl.co'
    const RootUrl = 'https://eiserwebserver.onrender.com'

    const {id} = useParams();
    const [data,setdata] = useState([])
    const [loading,setloading] = useState(false)
    const [btntext,setbtntext] = useState("Səbət")

    const [items, setItems] = useState([])

    const navigate = useNavigate()
    useEffect(()=>{
        setloading(true)
        setTimeout(()=>{
          setloading(false)
        },1000) 
      },[])

    const getdata  = async()=>{
        const res = await axios.get(`${RootUrl}/API/products`)
        setdata(res.data.filter(x=>x._id === id))
      }
      useEffect(()=>{
          getdata()
      },[])
      function basket(fill,ID,title,price,off,offprice,stars,about,img,category,kind,moresell,newproduct,keyforSearch,user,brend,color){


        const items = JSON.parse(localStorage.getItem('account'));

        if(items == null || items == "false"){
          navigate("/Giris")
        }
        else if(items === "true"){
          const basket = {
            userid:JSON.parse(localStorage.getItem('id')),
            productID:ID,
            title:title,
            quantity:1,
            price:price,
            off:off,
            price_off:offprice,
            stars:stars,
            About:about,
            imageurl:img,
            category:category,
            kind:kind,
            moresell:moresell,
            new:newproduct,
            keyforSearch:keyforSearch,
            user:user,
            brend:brend,
            color:color
          }
          if(fill === "green"){
            axios.post(`${RootUrl}/API/basket`,basket)  
            axios.put(`${RootUrl}/API/products/${ID}`,{colorforbasket:"green"})
          }
          else{
            axios.get(`${RootUrl}/API/basket`)  
            .then(res=>{
              res.data.forEach(element => {
                if(element.productID == ID){
                  axios.delete(`${RootUrl}/API/basket/${element._id}`) 
                  axios.put(`${RootUrl}/API/products/${ID}`,{colorforbasket:"black"}) 
                }
              });
            })
          }
      
      }
    } 
    
  return (
    <>
    {
        loading ? 
        <PulseLoader className='loader' style={{width:'100%',height:'100vh',zIndex:'100',backgroundColor:'white',position:'fixed',display:'flex',justifyContent:'center',paddingTop:'300px'}} color={'green'}  size={25}/>:
        <div className="details">
        {
            data.map((item)=>(
                <div className='detailscontainer'>
                <div className="detailsimgside">
                    <img src={item.imageurl} alt="" className="detailsimage" />
                </div>
                <div className="detailstextside">
                    <p className="detailstitle"><span className="rowtitle">Məhsulun  adı : </span>{item.title}</p>
                    <div className="detailsdivprice">
                    {
                    (item.price_off !== null)? (
                      <div className="Favorilerdivprice">
                        <span className="rowtitle">
                            Qiymət : 
                        </span>
                        <del className="Favorilercartprice" >{item?.price}</del>
                        <p className="Favorilercartpriceoff">{item?.price_off}</p>
                        manat
                      </div>
                    ):(
                      <div className="Favorilerdivprice">
                        <p className="Favorilercartprice" ><span className="rowtitle">Qiymət : </span>{item?.price}</p>
                        manat
                      </div>
                    )

                  }
                  </div>
                    <p className="detailsabout"><span className="rowtitle">Məhsul haqqında : </span> {item.About}</p>
                    <p className="detailscategory"><span className="rowtitle">Məhsul kategoriyası : </span>{item.category}</p>
                    <p className="detailskind"><span className="rowtitle">Məhsulun növü : </span>{item.kind}</p>
                    <p className="detailsbrend"><span className="rowtitle">Məhsulun brendi : </span>{item.brend}</p>
                    <p className="detailscolor"><span className="rowtitle">Məhsulun rəngi : </span>{item.color}</p><br/><br/><br/>
                    <button className='detailsaddtobasket' style={{backgroundColor:item.colorforbasket}}  onClick={(e)=>{
                      if(e.target.style.backgroundColor == 'green'){
                        e.target.style.backgroundColor = 'black' 
                        setbtntext("Səbətə at")
                      }
                      else{
                        e.target.style.backgroundColor = 'green'
                        setbtntext("Səbətdən sil")
                      };
                      basket(e.target.style.backgroundColor,item._id,item.title,item.price,item.off,item.price_off,item.stars,item.About,item.imageurl,item.category,item.kind,item.moresell,item.new,item.keyforSearch,item.user,item.brend,item.color)}}>{btntext}</button>
                </div>
                </div>
            ))
        }
        </div>
    }
    </>
    
  )
}

export default Details



