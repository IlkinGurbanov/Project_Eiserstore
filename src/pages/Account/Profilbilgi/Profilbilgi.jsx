import React, { useEffect, useState } from 'react'
import {FaUser} from 'react-icons/fa'
import axios from 'axios'


function Profilbilgi() {
  // const RootUrl = 'https://eiserwebserver.757jn1b.repl.co'
  const RootUrl = 'https://eiserwebserver.onrender.com'

    const [data,setdata] = useState([])
  const getdata  = async()=>{
    const res = await axios.get(`${RootUrl}/API/users`)
    setdata(res.data.filter(x=>x._id === JSON.parse(localStorage.getItem('id'))))
  }
  useEffect(()=>{
      getdata()
  },[])
  return (
    <div className="profileinfo">
        <FaUser className='usericon'/>
        {data.map((item)=>(
            <div key={item._id}>
                <p className="profilename">Ad : {item.name}</p>
                <p className="profilesurname">Soyad : {item.surname}</p>
                <p className="profilenumber">Əlaqə nömrəsi : {item.number}</p>
                <p className="profilemail">Email : {item.email}</p>
            </div>
        ))}
    </div>
  )
}

export default Profilbilgi