import './Endirim.css'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { FaShoppingCart , FaSearch , FaEye} from 'react-icons/fa';
import { AiFillHeart , AiFillStar} from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import PulseLoader from "react-spinners/PulseLoader";
import Aos from 'aos'
import "aos/dist/aos.css"
import {Helmet} from "react-helmet";


function Endirim() {  
  // const RootUrl = 'https://eiserwebserver.757jn1b.repl.co'
  const RootUrl = 'https://eiserwebserver.onrender.com'

  const [data,setdata] = useState([])
  const [favdata,setfavdata] = useState([])
  const [basketdata,setbasketdata] = useState([])
  const [id,setid] = useState([])
  const [loading,setloading] = useState(false)

  const [items, setItems] = useState([]);
  const navigate = useNavigate()
  const [Search,setSearch] = useState("")

  const getdata  = async()=>{
    const res = await axios.get(`${RootUrl}/API/products`)
    
    const result = await axios.get(`${RootUrl}/API/favorite`)
    result.data.filter(x=>x.userid === JSON.parse(localStorage.getItem('id')))
    .forEach(element => {
      res.data.forEach(elem => {
        if(element.productID == elem._id){
          axios.put(`${RootUrl}/API/products/${elem._id}`,{colorforfav:"red"})
        }
      });
    });

    const resultbasket = await axios.get(`${RootUrl}/API/basket`)
    resultbasket.data.filter(x=>x.userid === JSON.parse(localStorage.getItem('id')))
    .forEach(element => {
      res.data.forEach(elem => {
        if(element.productID == elem._id){
          axios.put(`${RootUrl}/API/products/${elem._id}`,{colorforbasket:"green"})
        }
      });
    });

    setdata(res.data) 
  }
  useEffect(()=>{
      getdata()
  },[])


  useEffect(()=>{
    axios.get(`${RootUrl}/API/favorite`)
    .then(res=>{
      setfavdata(res.data.filter(x=>x.userid === JSON.parse(localStorage.getItem('id'))))
    })
    
    axios.get(`${RootUrl}/API/basket`)
    .then(res=>{
      setbasketdata(res.data.filter(x=>x.userid === JSON.parse(localStorage.getItem('id'))))
    })

  },[])

  useEffect(()=>{
    setloading(true)
    setTimeout(()=>{
      setloading(false)
    },1000) 
  },[])
  
  function fav(fill,ID,title,price,off,offprice,stars,about,img,category,kind,moresell,newproduct,keyforSearch,user,brend,color){
    const id = JSON.parse(localStorage.getItem('id'));
      if (id) {
        setid(id);
      }
    const items = JSON.parse(localStorage.getItem('account'));
    if (items) {
      setItems(items);
    }
    if(items === null || items === "false"){
      navigate("/Giris")
    }
    else if(items === "true"){
      const favorite = {
        userid:id,
        productID:ID,
        title:title,
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
        color:color,
      }
      if(fill === "red"){
        axios.post(`${RootUrl}/API/favorite`,favorite)  
        axios.put(`${RootUrl}/API/products/${ID}`,{colorforfav:"red"})
      }
      else{
        axios.get(`${RootUrl}/API/favorite`)  
        .then(res=>{
          res.data.forEach(element => {
            if(element.productID === ID){
              axios.delete(`${RootUrl}/API/favorite/${element._id}`) 
            }
          });
        })
      }
    } 
  }

  function basket(fill,ID,title,price,off,offprice,stars,about,img,category,kind,moresell,newproduct,keyforSearch,user,brend,color){
    const id = JSON.parse(localStorage.getItem('id'));
      if (id) {
        setid(id);
      }
    const items = JSON.parse(localStorage.getItem('account'));
    if (items) {
      setItems(items);
    }
    if(items === null || items === "false"){
      navigate("/Giris")
    }
    else if(items === "true"){
      const basket = {
        userid:id,
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
            if(element.productID === ID){
              axios.delete(`${RootUrl}/API/basket/${element._id}`) 
              axios.put(`${RootUrl}/API/products/${ID}`,{colorforbasket:"black"}) 
            }
          });
        })
      }
  }
} 
  
function detail(id){
  localStorage.setItem('detailsproductid',JSON.stringify(id))
  navigate(`/Details/${id}`)
}
useEffect(() => {
  Aos.init({duration:2000}) 
},[])
  return (
    <>
    <Helmet>
      <meta charSet="utf-8" /> 
      <title>Endirimli məhsullar</title>
      <link rel="shortcut icon" href="data:image/jpeg;base64,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" />
  </Helmet>
    { 
      loading ?
      <PulseLoader className='loader' style={{width:'100%',height:'100vh',zIndex:'100',backgroundColor:'white',position:'fixed',display:'flex',justifyContent:'center',paddingTop:'300px'}} color={'green'}  size={25}/>:
      <div className="Endirim">
          <div className="Kategoriyahead">
            <p className="Kategoriyaheadtext">Endirimli məhsullar</p>
            <div className="Kategoriyasearch">
                <input onChange={(e)=>{setSearch(e.target.value)}} type="text" className="Kategoriyasearchinput" placeholder='Search'/>
                <FaSearch className='Kategoriyasearchicon'/>
            </div>
          </div>
          <div className="Endirimheadcontainer">
            <div className="Endirimcontainer" data-aos="fade-up">
            {(data.filter(x=>x.off === true)
            .filter(element=> element.keyforSearch.toLowerCase().includes(Search.toLowerCase()))
            ).map((item)=>(
              <div key={item._id} className="Endirimcart">
                <div className="Endirimcartimage">
                  {
                    (item.new === true) ? (
                      <div className="moreselloff">Yeni</div>
                    ):null
                  }
                  <img src={item.imageurl} alt="" className="Endirimcartimg" />
                </div>
                <div className="Endirimcarttext">
                  <p className="Endirimcarttitletext">{item.title}</p>
                  <p className="Endirimcartabouttext">{item.About}</p>
                  {
                    (item.price_off !== null)? (
                      <div className="moreselldivprice">
                        <del className="moresellcartprice" >{item?.price}</del>
                        <p className="moresellcartpriceoff">{item?.price_off}</p>
                        manat
                      </div>
                    ):(
                      <div className="moreselldivprice">
                        <p className="moresellcartprice" >{item?.price}</p>
                        manat
                      </div>
                    )

                  }
                </div>
                <div className="Endirimcarticon">
                  <FaEye onClick={() => detail(item._id)} className="Endirimcarticoneye" />
                  <AiFillHeart style={{fill:item.colorforfav}}  onClick={(e)=>{
                      if(e.target.style.fill == 'red'){
                        e.target.style.fill = 'white'
                      }
                      else{
                        e.target.style.fill = 'red'
                      };
                      fav(e.target.style.fill,item._id,item.title,item.price,item.off,item.price_off,item.stars,item.About,item.imageurl,item.category,item.kind,item.moresell,item.new,item.keyforSearch,item.user,item.brend,item.color)}} className='Endirimcarticonheart'/>
                  <FaShoppingCart style={{fill:item.colorforbasket}} onClick={(e)=>{
                      if(e.target.style.fill == 'green'){
                        e.target.style.fill = 'black'
                      }
                      else{
                        e.target.style.fill = 'green'
                      };
                      basket(e.target.style.fill,item._id,item.title,item.price,item.off,item.price_off,item.stars,item.About,item.imageurl,item.category,item.kind,item.moresell,item.new,item.keyforSearch,item.user,item.brend,item.color)}} className='Endirimcarticonbasket'/>
                </div>
              </div>
              ))}
            </div> 
          </div>
      </div>
    }
    </>
  )
}
 
export default Endirim