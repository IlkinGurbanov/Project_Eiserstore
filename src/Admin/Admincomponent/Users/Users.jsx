import React, { useEffect, useState } from 'react'
import './Users.css'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios'
import {FaTrash , FaUserEdit} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';



function Users() {
  // const RootUrl = 'https://eiserwebserver.757jn1b.repl.co'
  const RootUrl = 'https://eiserwebserver.onrender.com'

  const [data,setdata] = useState([])

  const navigate = useNavigate()
  
  const getdata  = async()=>{
    const res = await axios.get(`${RootUrl}/API/users`)
    setdata(res.data)
  }

  useEffect(()=>{
      getdata()
  },[])

  function handledelete(id){
    axios.delete(`${RootUrl}/API/users/${id}`)
    setdata(data.filter(x=>x._id !== id))
  }
  function handleedit(id){
    navigate(`/adminpanel/edituser/${id}`)
  }
  return (
    <div className="users">
        <p className="usershead">Users</p>
        <div className="userscontainer">
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow className='tablehead'>
                  <TableCell>ID</TableCell>
                  <TableCell>name</TableCell>
                  <TableCell>surname</TableCell>
                  <TableCell>number</TableCell>
                  <TableCell>email</TableCell>
                  <TableCell>password</TableCell>
                  <TableCell>updatedAt</TableCell>
                  <TableCell>createdAt</TableCell>
                  <TableCell>Function</TableCell>      
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((item) => (
                  <TableRow key={item._id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                      <TableCell className='tablecell'>{item._id}</TableCell>
                      <TableCell className='tablecell'>{item.name}</TableCell>
                      <TableCell className='tablecell'>{item.surname}</TableCell>
                      <TableCell className='tablecell'>{item.number}</TableCell>
                      <TableCell className='tablecell'>{item.email}</TableCell>
                      <TableCell className='tablecell'>{item.password}</TableCell>
                      <TableCell className='tablecell'>{item.createdAt}</TableCell>
                      <TableCell className='tablecell'>{item.createdAt}</TableCell>
                      <TableCell className='tablecell func'>
                        <FaUserEdit onClick={() => {handleedit(item._id)}} className="editIcon"/>
                        <FaTrash onClick={()=>{handledelete(item._id)}} className='trashIcon'/>
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

export default Users