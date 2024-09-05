import React from 'react'
import './Məhsuləlavə.css'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios'

const addSchema = Yup.object().shape({
    title: Yup.string().required('Required'),
    price:Yup.number().required('Required'),
    About:Yup.string().required('Required'),
    imageurl:Yup.string().required('Required'),
    keyforSearch:Yup.string().required("Required"),
    brend:Yup.string().required("Required"),
    color:Yup.string().required("Required"),
  });

function Məhsuləlavə() {
    // const RootUrl = 'https://eiserwebserver.757jn1b.repl.co'
    const RootUrl = 'https://eiserwebserver.onrender.com'

  return (
    <div className="useraddproducts">
        <p className="useraddproductshead">Məhsul əlavə et</p>
        <div className="useraddproductscontainer">
            <Formik
                initialValues={{
                    title:'',
                    price:'',
                    About:'',
                    imageurl:'',
                    category:1,
                    kind:[],
                    keyforSearch:'',
                    brend:'',
                    color:''
                }}
                validationSchema={addSchema}
                onSubmit={values => {
                    alert("Succesfully added!");
                    const obj = {
                        title:values.title,
                        price:values.price,
                        off:"false",
                        price_off:null,
                        About:values.About,
                        imageurl:values.imageurl,
                        category:values.category,
                        kind:values.kind,
                        moresell:"false",
                        new:"false",
                        keyforSearch:values.keyforSearch,
                        user:JSON.parse(localStorage.getItem('id')),
                        brend:values.brend,
                        color:values.color
                    }
                    // console.log(obj)
                    axios.post(`${RootUrl}/API/products`,obj)
                    window.location.reload(true)
                }}
            >
            {({ errors, touched }) => (
            <Form>
                <div className="dflex">
                    <div className="dflexinfo">
                        <Field className="field" name="title" placeholder="title:"/>
                        {errors.title && touched.title ? (
                            <div>{errors.title}</div>
                        ) : null}
                    </div>
                     <br/>

                    <div className="dflexinfo">
                        <Field type="number" className="field" name="price" placeholder="price"/>
                        {errors.price && touched.price ? (
                            <div>{errors.price}</div>
                        ) : null}
                        <br/>     
                    </div>
                </div>
                
                <div className="dflex">
                    <div className="dflexinfo">
                        <Field className="field" name="About" placeholder="about"/>
                        {errors.About && touched.About ? (
                                <div>{errors.About}</div>
                            ) : null}
                        <br/>
                    </div>
                    <div className="dflexinfo">
                        <Field className="field" name="color" placeholder="color"/>
                        {errors.color && touched.color ? (
                            <div>{errors.color}</div>
                        ) : null}
                    </div>
                </div>

                <div className="dflex">
                    <Field  component="select" className="field" name="category" placeholder="category : Texniki/Geyim">
                        <option value={1}>Texniki</option>
                        <option value={2}>Geyim</option>
                    </Field>
                        <br/> <br/>
                    <Field  component="select" className="field" name="kind" placeholder="kind">
                        <option value="Kompüterlər">Kompüterlər</option>
                        <option value="Smartfonlar">Smartfonlar</option>
                        <option value="Planşetlər">Planşetlər</option>
                        <option value="Ağıllı saatlar">Ağıllı saatlar</option>
                        <option value="Ayaqqabılar">Ayaqqabılar</option>
                        <option value="Saatlar">Saatlar</option>
                    </Field>
                    
                        <br/> <br/>
                </div>

                <div className="dflex">
                    <div className="dflexinfo">
                        <Field className="field" name="imageurl" placeholder="image url"/>
                        {errors.imageurl && touched.imageurl ? (
                            <div>{errors.imageurl}</div>
                        ) : null}
                    </div>
                    <div className="dflexinfo">
                        <Field className="field" name="keyforSearch" placeholder="etiketlər"/>
                        {errors.keyforSearch && touched.keyforSearch ? (
                            <div>{errors.keyforSearch}</div>
                        ) : null}
                    </div>
                </div>

                <div className="dflex">
                    <div className="dflexinfo">
                        <Field className="field" name="brend" placeholder="brend"/>
                        {errors.brend && touched.brend ? (
                            <div>{errors.brend}</div>
                        ) : null}
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

export default Məhsuləlavə