
import React from 'react'
import './Adduser.css'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios'

const addSchema = Yup.object().shape({
    name: Yup.string().required('Required'),
    surname: Yup.string().required('Required'),
    number: Yup.number().required('Required'),
    email: Yup.string().matches(/^(?:\d{10}|\w+@\w+\.\w{2,3})$/,"Emaili düzgün daxil edin").required('Required'),
    password: Yup.string().required('Required')
  });

function Adduser() {
    // const RootUrl = 'https://eiserwebserver.757jn1b.repl.co'
    const RootUrl = 'https://eiserwebserver.onrender.com'

  return (
    <div className="adduser">
        <p className="adduserhead">Add users</p>
        <div className="addusercontainer">
            <Formik
                initialValues={{
                    name:'',
                    surname:'',
                    number:0,
                    email:'',
                    password:''
                }}
                validationSchema={addSchema}
                onSubmit={values => {
                    alert("Succesfully added!");
                    const obj = {
                        name:values.name,
                        surname:values.surname,
                        number:values.number,
                        email:values.email,
                        password:values.password
                    }
                    // console.log(obj)
                    axios.post(`${RootUrl}/API/users`,obj)
                }}
            >
            {({ errors, touched }) => (
            <Form>
                <div className="dflex">
                    <div className="dflexinfo">
                        <Field className="field" name="name" placeholder="name:"/>
                        {errors.name && touched.name ? (
                            <div>{errors.name}</div>
                        ) : null}
                    </div>
                     <br/>

                    <div className="dflexinfo">
                        <Field type="text" className="field" name="surname" placeholder="surname"/>
                        {errors.surname && touched.surname ? (
                            <div>{errors.surname}</div>
                        ) : null}
                        <br/>     
                    </div>
                </div>
                
                <div className="dflex">
                    <div className="dflexinfo">
                        <Field type="number" className="field" name="number" placeholder="number"/>
                        {errors.number && touched.number ? (
                                <div>{errors.number}</div>
                            ) : null}
                        <br/>
                    </div>
                    <div className="dflexinfo">
                        <Field type="email" className="field" name="email" placeholder="email"/>
                        {errors.email && touched.email ? (
                                <div>{errors.email}</div>
                            ) : null}
                        <br/>
                    </div>
                </div>

                <div className="dflex">
                  <div className="dflexinfo">
                      <Field type="password" className="field" name="password" placeholder="password"/>
                          {errors.password && touched.password ? (
                                  <div>{errors.password}</div>
                              ) : null}
                          <br/>
                      </div>
                  </div>
                <br/>
                <button type="submit" className='sbmtbtn'>Send</button>
            </Form>
            )}
            </Formik>
        </div>
    </div>
  )
}

export default Adduser