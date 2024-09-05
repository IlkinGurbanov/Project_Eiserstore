import React from 'react'
import { Link } from 'react-router-dom'
import './Adminsidebar.css'
import {FaUsers , FaEdit ,FaUserEdit} from 'react-icons/fa'
import {MdProductionQuantityLimits,MdOutlineSettings ,MdPersonAddAlt1} from 'react-icons/md'
import {BiImageAdd} from 'react-icons/bi'

function Adminsidebar() {
  return (
    <div className="adminsidebar">
        <div className="adminconfig">
          <MdOutlineSettings className='config'/>
          <p className="adminsidebarhead">Admin Configuration</p>
        </div>
        <div className="adminsidebarcontainer">
          <Link to="/adminpanel/" className='adminsidebaritem'>
            <FaUsers/>Users
          </Link>
          <Link to="/adminpanel/adduser" className='adminsidebaritem'>
            <MdPersonAddAlt1/>Add user
          </Link>
          {/* <Link to="/adminpanel/edituser" className='adminsidebaritem'>
            <FaUserEdit/>Edit User
          </Link> */}
          <Link to="/adminpanel/products" className='adminsidebaritem'>
            <MdProductionQuantityLimits/>Products
          </Link>
          <Link to="/adminpanel/addproduct" className='adminsidebaritem'>
            <BiImageAdd/>Add product
          </Link>
          <Link to="/adminpanel/changeadminpassword" className='adminsidebaritem'>
            <MdOutlineSettings/>Change admin password
          </Link>
        </div>
    </div>
  )
}

export default Adminsidebar