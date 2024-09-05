import React from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios'
import './Qeydiyyat.css'
import { Link } from "react-router-dom";
import TextField from '@mui/material/TextField';
import {FaUser} from 'react-icons/fa'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'
import {RiLockPasswordFill} from 'react-icons/ri'
import { useNavigate } from 'react-router-dom';

const addSchema = Yup.object().shape({
    name:Yup.string().required('Required'),
    surname:Yup.string().required('Required'),
    number:Yup.number().required('Required'),
    email: Yup.string().required('Required').matches(/^(?:\d{10}|\w+@\w+\.\w{2,3})$/,"Düzgün email daxil edin"),
    password:Yup.string().min(8).required('Required').matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,"Güclu parol daxil edin")
  });

function Qeydiyyat() {
  // const RootUrl = 'https://eiserwebserver.757jn1b.repl.co'
  const RootUrl = 'https://eiserwebserver.onrender.com'

  const navigate = useNavigate()
  return (
    <div className="register">
        <div className="registercontainer">
            <Formik
                initialValues={{
                    name:'',
                    surname:'',
                    number:'',
                    email:'',
                    password:'',
                }}
                validationSchema={addSchema}
                onSubmit={(values,{resetForm})=>{
                    const obj = {
                        name:values.name,
                        surname:values.surname,
                        number:values.number,
                        email:values.email,
                        password:values.password,
                        role:'user'
                    }
                    axios.post(`${RootUrl}/API/users`,obj)
                    resetForm({values:''})
                    navigate('/Giris')
                }}
            >
            {({ errors, touched }) => (
            <Form className='form'>
                <div style={{ display: 'flex', alignItems: 'flex-end' ,gap:'10px' }}>
                    <FaUser/>
                    <Field as={TextField} className="field"  name="name" id="input-with-sx" label="Name" variant="standard" />
                </div>
                {errors.surname && touched.surname ? (
                  <span>{errors.surnamme}</span>
                ) : null}<br/><br/>
                <div style={{ display: 'flex', alignItems: 'flex-end' ,gap:'10px' }}>
                    <FaUser/>
                    <Field as={TextField} className="field"  name="surname" id="input-with-sx" label="Surname" variant="standard" />
                </div>
                {errors.surname && touched.surname ? (
                  <span>{errors.surnamme}</span>
                ) : null}<br/><br/>
                <div style={{ display: 'flex', alignItems: 'flex-end',gap:'10px' }}>
                    <BsFillTelephoneFill/>
                    <Field as={TextField} className="field"  name="number" id="input-with-sx" label="Number" variant="standard" />
                </div>
                {errors.number && touched.number ? (
                  <span>{errors.number}</span>
                ) : null}<br/><br/>
                <div style={{ display: 'flex', alignItems: 'flex-end',gap:'10px' }}>
                    <MdEmail/>
                    <Field as={TextField} className="field"  name="email" id="input-with-sx" label="Email" variant="standard" />
                </div>
                {errors.email && touched.email ? (
                  <span>{errors.email}</span>
                ) : null}<br/><br/>
                  <div style={{ display: 'flex', alignItems: 'flex-end',gap:'10px' }}>
                    <RiLockPasswordFill/>
                    <Field as={TextField} type="password" className="field"  name="password" id="input-with-sx" label="Password" variant="standard" />
                  </div>
                {errors.password && touched.password ? (
                    <span>{errors.password}</span>
                ) : null}<br/><br/>
                <button type="submit" className='btn'>Qeydiyyat</button>
                <Link to="/Giris" className="pass">Hesabınız var?</Link>
            </Form>
            )}
            </Formik>
        </div>
    </div>
  )
}

export default Qeydiyyat