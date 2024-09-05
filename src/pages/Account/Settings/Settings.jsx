import React, { useEffect, useState } from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios'
import './Settings.css'
import TextField from '@mui/material/TextField';
import {FaUser} from 'react-icons/fa'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'
import {RiLockPasswordFill} from 'react-icons/ri'

const addSchema = Yup.object().shape({
    name:Yup.string().required('Required'),
    surname:Yup.string().required('Required'),
    number:Yup.number().required('Required'),
    email: Yup.string().required('Required').matches(/^(?:\d{10}|\w+@\w+\.\w{2,3})$/,"Düzgün email daxil edin"),
    password:Yup.string().required('Required')
  });

function Settings() {
  // const RootUrl = 'https://eiserwebserver.757jn1b.repl.co'
  const RootUrl = 'https://eiserwebserver.onrender.com'

  const userid = JSON.parse(localStorage.getItem('id'))

  const [data,setdata] = useState([])
  const getdata  = async()=>{
    const res = await axios.get(`${RootUrl}/API/users`)
    setdata(res.data.filter(x=>x._id === JSON.parse(localStorage.getItem('id'))))
  }
  useEffect(()=>{
      getdata()
  },[])

  return (
    <div className="settings">
        <div className="settingscontainer">
          {
            data.map((item)=>(
              <Formik key={item._id}
                  initialValues={{
                      name:item.name,
                      surname:item.surname,
                      number:item.number,
                      email:item.email,
                      password:item.password,
                  }}
                  validationSchema={addSchema}
                  onSubmit={(values,{resetForm})=>{
                      const obj = {
                          name:values.name,
                          surname:values.surname,
                          number:values.number,
                          email:values.email,
                          password:values.password,
                      }
                      axios.put(`${RootUrl}/API/users/${userid}`,obj)
                      window.location.reload(true)
                  }}
              >
              {({ errors, touched }) => (
              <Form className='form'>
                  <div style={{ display: 'flex', alignItems: 'flex-end' ,gap:'10px' }}>
                      <FaUser/>
                      <Field as={TextField} className="input"  name="name" id="input-with-sx" label="Name" variant="standard" />
                  </div>
                  {errors.surname && touched.surname ? (
                    <span>{errors.surnamme}</span>
                  ) : null}<br/><br/>
                  <div style={{ display: 'flex', alignItems: 'flex-end' ,gap:'10px' }}>
                      <FaUser/>
                      <Field as={TextField} className="input"  name="surname" id="input-with-sx" label="Surname" variant="standard" />
                  </div>
                  {errors.surname && touched.surname ? (
                    <span>{errors.surnamme}</span>
                  ) : null}<br/><br/>
                  <div style={{ display: 'flex', alignItems: 'flex-end',gap:'10px' }}>
                      <BsFillTelephoneFill/>
                      <Field as={TextField} className="input"  name="number" id="input-with-sx" label="Number" variant="standard" />
                  </div>
                  {errors.number && touched.number ? (
                    <span>{errors.number}</span>
                  ) : null}<br/><br/>
                  <div style={{ display: 'flex', alignItems: 'flex-end',gap:'10px' }}>
                      <MdEmail/>
                      <Field as={TextField} className="input"  name="email" id="input-with-sx" label="Email" variant="standard" />
                  </div>
                  {errors.email && touched.email ? (
                    <span>{errors.email}</span>
                  ) : null}<br/><br/>
                    <div style={{ display: 'flex', alignItems: 'flex-end',gap:'10px' }}>
                      <RiLockPasswordFill/>
                      <Field as={TextField} type="password" className="input"  name="password" id="input-with-sx" label="Password" variant="standard" />
                    </div>
                  {errors.password && touched.password ? (
                      <span>{errors.password}</span>
                  ) : null}<br/><br/>
                  <button type="submit" className='btn'>Saxla</button>
              </Form>
              )}
              </Formik>
            ))
          }
        </div>
    </div>
  )
}

export default Settings