import React, { useState } from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios'
import './Giris.css'
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import {MdEmail} from 'react-icons/md'
import {RiLockPasswordFill} from 'react-icons/ri'
import { Link } from 'react-router-dom';

const addSchema = Yup.object().shape({
    email: Yup.string().required('Required').matches(/^(?:\d{10}|\w+@\w+\.\w{2,3})$/,"Emaili düzgün daxil edin"),
    password:Yup.string().required('Required')
  });

function Giris() {
  // const RootUrl = 'https://eiserwebserver.757jn1b.repl.co'
  const RootUrl = 'https://eiserwebserver.onrender.com'
  
  const navigate = useNavigate()
  const [validation,setvalidation] = useState("")
  return (
    <div className="register">
        <div className="registercontainer">
            <Formik
                initialValues={{
                    email:'',
                    password:'',
                }}
                validationSchema={addSchema}
                onSubmit={values => {
                    const obj = {
                        email:values.email,
                        password:values.password
                    }
                    axios.get(`${RootUrl}/API/users`)
                    .then(res => {
                        res.data.forEach(element => {
                          if(values.email === element.email && values.password === element.password){
                            localStorage.setItem('account', JSON.stringify("true"));
                            localStorage.setItem('id',JSON.stringify(element._id))
                            navigate("/")
                          }
                          else if(values.email !== element.email || values.password !== element.password){
                            setvalidation("Email yaxud parol səhvdir")
                          }
                        });
                    })
                    .catch((err)=>{
                      console.log(err)
                    })
                }}
            >
            {({ errors, touched }) => (
            <Form className='form'>
                    <div style={{ display: 'flex', alignItems: 'flex-end',gap:'10px' }}>
                        <MdEmail/>
                        <Field as={TextField} className="field"  name="email" id="input-with-sx" label="Email" variant="standard" />
                    </div>
                    {errors.email && touched.email ? (
                      <span>{errors.email}</span>
                    ) : null}<br/><br/>
                    <div style={{ display: 'flex', alignItems: 'flex-end',gap:'10px' }}>
                        <RiLockPasswordFill/>
                        <Field type="password" as={TextField} className="field"  name="password" id="input-with-sx" label="Password" variant="standard" />
                    </div>
                    {errors.password && touched.password ? (
                        <span>{errors.password}</span>
                    ) : null}<br/>
                    <div>{validation}</div>
                    <br/>
                    <button type="submit" className='btn'>Daxil ol</button>
                    <Link to="/resetpassword" className="pass">parolu unutmusuz?</Link>
            </Form> 
            )}
            </Formik>
        </div>
    </div>
  )
}

export default Giris