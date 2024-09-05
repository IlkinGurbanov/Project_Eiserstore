import React, { useEffect, useState } from 'react'
import './Editusers.css'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios'
import { useParams } from 'react-router-dom';


const editSchema = Yup.object().shape({
  id: Yup.string().required('Required'),
  name: Yup.string().required('Required'),
  surname: Yup.string().required('Required'),
  number: Yup.number().required('Required'),
  email: Yup.string().matches(/^(?:\d{10}|\w+@\w+\.\w{2,3})$/,"Emaili düzgün daxil edin").required('Required'),
  password: Yup.string().required('Required')
  });

function Edituser() {
    const {id} = useParams()
    const [data,setdata] = useState([])
    // const RootUrl = 'https://eiserwebserver.757jn1b.repl.co'
    const RootUrl = 'https://eiserwebserver.onrender.com'

    const getdata  = async()=>{
        const res = await axios.get(`${RootUrl}/API/users`)
        setdata(res.data.filter(x=>x._id === id))
      }
      useEffect(()=>{
          getdata()
      },[])
  return (
    <div className="editusers">
        <p className="editusershead">Edit users</p>
        <div className="edituserscontainer">
           {data.map((item)=>(
            <Formik
                initialValues={{
                    id:item._id,
                    name:item.name,
                    surname:item.surname,
                    number:item.number,
                    email:item.email,
                    password:item.password
                }} 
                validationSchema={editSchema}
                onSubmit={values => {
                    alert("Succesfully updated!");
                    const obj = {
                        name:values.name,
                        surname:values.surname,
                        number:values.number,
                        email:values.email,
                        password:values.password
                    }
                    // console.log(obj)
                    axios.put(`${RootUrl}/API/users/${values.id}`,obj)
                }}
            >
            {({ errors, touched }) => (
            <Form>
                <div className="dflex">
                    <div className="dflexinfo">
                        <Field className="field" name="name" placeholder="name:"/>
                        {errors.name && touched.name ? (
                            <div className='errorcontent'>{errors.name}</div>
                        ) : null}
                    </div>
                     <br/>

                    <div className="dflexinfo">
                        <Field type="text" className="field" name="surname" placeholder="surname"/>
                        {errors.surname && touched.surname ? (
                            <div className='errorcontent'>{errors.surname}</div>
                        ) : null}
                        <br/>     
                    </div>
                </div>
                
                <div className="dflex">
                    <div className="dflexinfo">
                        <Field type="text" className="field" name="number" placeholder="number"/>
                        {errors.number && touched.number ? (
                                <div className='errorcontent'>{errors.number}</div>
                            ) : null}
                        <br/>
                    </div>
                    <div className="dflexinfo">
                        <Field type="email" className="field" name="email" placeholder="email"/>
                        {errors.email && touched.email ? (
                                <div className='errorcontent'>{errors.email}</div>
                            ) : null}
                        <br/>
                    </div>
                </div>

                <div className="dflex">
                    <div className="dflexinfo">
                        <Field type="password" className="field" name="password" placeholder="password"/>
                            {errors.password && touched.password ? (
                                <div className='errorcontent'>{errors.password}</div>
                            ) : null}
                        <br/>
                    </div>
                </div>
                
                <br/>
                <button type="submit" className='sbmtbtn'>Send</button>
            </Form>
            )}
            </Formik>
            ))}
        </div>
    </div>
  )
}

export default Edituser