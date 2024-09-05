import React, { useEffect, useState } from 'react'
import './Products.css'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios'
import {FaTrash} from 'react-icons/fa'
import {AiFillEdit} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';

function Products() {
  // const RootUrl = 'https://eiserwebserver.757jn1b.repl.co'
  const RootUrl = 'https://eiserwebserver.onrender.com'

  const [data,setdata] = useState([])
  const [table,settable] = useState("none")
  const [datatext,setdatatext] = useState("")
  const navigate = useNavigate()
  const getdata  = async()=>{
    const res = await axios.get(`${RootUrl}/API/products`)
    setdata(res.data)
  }

  useEffect(()=>{
      getdata()
  },[])

  function handledelete(id){
    axios.delete(`${RootUrl}/API/products/${id}`)
    setdata(data.filter(x=>x._id !== id))
  }
  function edit(index,id){
    navigate(`/adminpanel/editproduct/${id}`)
    // settable("")
    // setdatatext("none")
  }
  return (
    <div className="products">
        <p className="productshead">Products</p>
        <div className="productscontainer">
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow className='tablehead'>
                  <TableCell>ID</TableCell>
                  <TableCell>title</TableCell>
                  <TableCell>price</TableCell>
                  <TableCell>off</TableCell>
                  <TableCell>price_off</TableCell>
                  <TableCell>stars</TableCell>
                  <TableCell>About</TableCell>
                  <TableCell>imageurl</TableCell>
                  <TableCell>category</TableCell>
                  <TableCell>kind</TableCell>
                  <TableCell>moresell</TableCell>
                  <TableCell>new</TableCell>
                  <TableCell>keyforsearch</TableCell>
                  <TableCell>user</TableCell>
                  <TableCell>brend</TableCell>
                  <TableCell>color</TableCell>
                  <TableCell>createdAt</TableCell>
                  <TableCell>uptadedAt</TableCell>
                  <TableCell>Function</TableCell>      
                </TableRow>
              </TableHead> 
              <TableBody>
                {data.map((item,index) => (
                  <TableRow key={item._id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                      <TableCell>
                        <span style={{display:datatext}}>{item._id}</span>
                      </TableCell>

                      <TableCell>
                        <span style={{display:datatext}}>{item.title}</span>
                      </TableCell>

                      <TableCell>
                        <span style={{display:datatext}}>{item.price}</span>
                      </TableCell>

                      <TableCell>
                        <span style={{display:datatext}}>
                          {
                            item.off  ? ("true"):
                            ("false")
                          }
                        </span>
                      </TableCell>

                      <TableCell>
                        <span style={{display:datatext}}>
                          {
                            item.price_off  ? (item.price_off):"null"
                          }
                          </span>
                      </TableCell>

                      <TableCell>
                        <span style={{display:datatext}}>{item.stars}</span>
                      </TableCell>

                      <TableCell>
                        <span style={{display:datatext}}>{item.About}</span>
                      </TableCell>

                      <TableCell>
                        <img className='tableimg' style={{display:datatext}} src={item.imageurl}/>
                      </TableCell>

                      <TableCell>
                        <span style={{display:datatext}}>{item.category}</span>
                      </TableCell>

                      <TableCell>
                        <span style={{display:datatext}}>{item.kind}</span>
                      </TableCell>

                      <TableCell>
                        <span style={{display:datatext}}>{item.moresell}</span>
                      </TableCell>

                      <TableCell>
                        <span style={{display:datatext}}>{item.new}</span>
                      </TableCell>

                      <TableCell>
                        <span style={{display:datatext}}>{item.keyforSearch}</span>
                      </TableCell>

                      <TableCell>
                        <span style={{display:datatext}}>{item.user}</span>
                      </TableCell>

                      <TableCell>
                        <span style={{display:datatext}}>{item.brend}</span>
                      </TableCell>

                      <TableCell>
                        <span style={{display:datatext}}>{item.color}</span>
                      </TableCell>

                      <TableCell>
                        <span style={{display:datatext}}>{item.updatedAt}</span>
                      </TableCell>

                      <TableCell>
                        <span style={{display:datatext}}>{item.createdAt}</span>
                      </TableCell>

                      <TableCell>
                        <AiFillEdit onClick={()=>edit(index,item._id)} className='editicon'/>
                        <FaTrash onClick={()=>{handledelete(item._id)}} className='trash'/>
                      </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
    </div>
  )
}

export default Products