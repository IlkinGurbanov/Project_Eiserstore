import React, { useEffect, useState } from 'react'
import './Məhsullar.css'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios'
import {FaTrash} from 'react-icons/fa'

function Məhsullarim() {
  // const RootUrl = 'https://eiserwebserver.757jn1b.repl.co'
  const RootUrl = 'https://eiserwebserver.onrender.com'

  const [data,setdata] = useState([])

  const getdata  = async()=>{
    const res = await axios.get(`${RootUrl}/API/products`)
    setdata(res.data.filter(x=>x.user === JSON.parse(localStorage.getItem('id'))))
  }

  useEffect(()=>{
      getdata()
  },[])

  function handledelete(id){
    axios.delete(`${RootUrl}/API/products/${id}`)
    setdata(data.filter(x=>x._id !== id))
  }
  return (
    <div className="məhsul">
        <p className="məhsulhead">Məhsullarım</p>
        <div className="məhsulcontainer">
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow className='Tablehead'>
                  <TableCell>ID</TableCell>
                  <TableCell>title</TableCell>
                  <TableCell>price</TableCell>
                  <TableCell>off</TableCell>
                  <TableCell>price_off</TableCell>
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
                  <TableCell>createdAt</TableCell>
                  <TableCell>Function</TableCell>      
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((item) => (
                  <TableRow key={item._id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                      <TableCell className='tablecell'>{item._id}</TableCell>
                      <TableCell className='tablecell'>{item.title}</TableCell>
                      <TableCell className='tablecell'>{item.price}</TableCell>
                      <TableCell className='tablecell'>{item.off}</TableCell>
                      <TableCell className='tablecell'>{item.price_off}</TableCell>
                      <TableCell className='tablecell'>{item.About}</TableCell>
                      <TableCell className='tablecell'>{item.imageurl}</TableCell>
                      <TableCell className='tablecell'>{item.category}</TableCell>
                      <TableCell className='tablecell'>{item.kind}</TableCell>
                      <TableCell className='tablecell'>{item.moresell}</TableCell>
                      <TableCell className='tablecell'>{item.new}</TableCell>
                      <TableCell className='tablecell'>{item.keyforSearch}</TableCell>
                      <TableCell className='tablecell'>{item.user}</TableCell>
                      <TableCell className='tablecell'>{item.brend}</TableCell>
                      <TableCell className='tablecell'>{item.color}</TableCell>
                      <TableCell className='tablecell'>{item.createdAt}</TableCell>
                      <TableCell className='tablecell'>{item.createdAt}</TableCell>
                      <TableCell className='tablecell'>
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

export default Məhsullarim