import React, { useEffect, useState } from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios'
import './Resetpass.css'
import TextField from '@mui/material/TextField';
import {FaUser} from 'react-icons/fa'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'
import {RiLockPasswordFill} from 'react-icons/ri'

const addSchema = Yup.object().shape({
    email: Yup.string().required('Required').matches(/^(?:\d{10}|\w+@\w+\.\w{2,3})$/,"Düzgün email daxil edin"),
    password:Yup.string().required('Required')
  });

function Resetpass() {
  // const RootUrl = 'https://eiserwebserver.757jn1b.repl.co'
  const RootUrl = 'https://eiserwebserver.onrender.com'

  const userid = JSON.parse(localStorage.getItem('id'))

  const [data,setdata] = useState([])
  const [emailcase,setemailcase] = useState("")
  const [ID,setID] = useState(null)

  const getdata  = async()=>{
    const res = await axios.get(`${RootUrl}/API/users`)
  }
  useEffect(()=>{
      getdata()
  },[])

  return (
    <div className="reset">
        <div className="resetcontainer">
          {
              <Formik
                  initialValues={{
                      email:'',
                      password:'',
                  }}
                  validationSchema={addSchema}
                  onSubmit={(values,{resetForm})=>{
                      const obj = {
                          email:values.email,
                          password:values.password,
                      }
                      axios.get("http://localhost:4000/API/users")
                      .then(res=>{
                        res.data.forEach(element => {
                            if(values.email !== element.email){
                                setemailcase("Email tapılmadı")
                            }
                            else{
                                axios.put(`http://localhost:4000/API/users/${element._id}`,obj)
                                alert("Şifrə bərpa olundu")
                                window.location.reload(true)
                            }
                        });
                      })
                  }}
              >
              {({ errors, touched }) => (
              <Form className='form'>
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
                  ) : null}<br/>
                  <span>{emailcase}</span><br/>
                  <br/>
                  <button type="submit" className='btn'>Saxla</button>
              </Form>
              )}
              </Formik>
          }
        </div>
    </div>
  )
}

export default Resetpass