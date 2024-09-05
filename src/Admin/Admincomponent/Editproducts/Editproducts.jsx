import React, { useEffect, useState } from 'react'
import './Editproducts.css'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios'
import { useParams } from 'react-router-dom';


const editSchema = Yup.object().shape({
    id:Yup.string().required('Required'),
    title: Yup.string().required('Required'),
    price:Yup.number().required('Required'),
    off:Yup.string().required('Required'),
    // price_off:Yup.number(),
    About:Yup.string().required('Required'),
    imageurl:Yup.string().required('Required'),
    keyforSearch:Yup.string().required("Required"),
    brend:Yup.string().required("Required"),
    color:Yup.string().required("Required"),
  });

function Editproducts() {
    // const RootUrl = 'https://eiserwebserver.757jn1b.repl.co'
    const RootUrl = 'https://eiserwebserver.onrender.com'

    const {id} = useParams()
    const [data,setdata] = useState([])

    const getdata  = async()=>{
        const res = await axios.get(`${RootUrl}/API/products`)
        setdata(res.data.filter(x=>x._id === id))
      }
      useEffect(()=>{
          getdata()
      },[])
  return (
    <div className="editproducts">
        <p className="editproductshead">Edit products</p>
        <div className="editproductscontainer">
           {data.map((item)=>(
            <Formik
                initialValues={{
                    id:item._id,
                    title:item.title,
                    price:item.price,
                    off:item.off,
                    new:item.new,
                    moresell:item.moresell,
                    price_off:item.price_off,
                    About:item.About,
                    imageurl:item.imageurl,
                    category:item.category,
                    kind:item.kind,
                    keyforSearch:item.keyforSearch,
                    brend:item.brend,
                    color:item.color
                }} 
                validationSchema={editSchema}
                onSubmit={values => {
                    alert("Succesfully updated!");
                    const obj = {
                        title:values.title,
                        price:values.price,
                        off:values.off,
                        moresell:values.moresell,
                        price_off:values.price_off,
                        About:values.About,
                        imageurl:values.imageurl,
                        category:values.category,
                        kind:values.kind,
                        new:values.new,
                        keyforSearch:values.keyforSearch,
                        user:"false",
                        brend:values.brend,
                        color:values.color,
                        colorforfav:values.colorforfav,
                        colorforbasket:values.colorforbasket
                    }
                    // console.log(obj)
                    axios.put(`${RootUrl}/API/products/${item._id}`,obj)
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
                        <Field className="field" name="About" placeholder="about"/>
                        {errors.About && touched.About ? (
                                <div>{errors.About}</div>
                            ) : null}
                        <br/>
                    </div>
                </div>
                
                <div className="dflex">
                    <div className="dflexinfo">
                        <Field type="number" className="field" name="price" placeholder="price"/>
                        {errors.price && touched.price ? (
                            <div>{errors.price}</div>
                        ) : null}
                        <br/>     
                    </div>
                    <div className="dflexinfo">
                         <Field  component="select" className="field" name="moresell" placehlder="mooresell">
                            <option value="true">Ən çox satılandır</option>
                            <option value="false">Çox satılan deyil</option>
                        </Field>
                    </div>
                </div>
                
                <div className="dflex">
                    <div className="dflexinfo">
                        <Field  component="select" className="field" name="off" placeholder="off">
                            <option value="true">Endirim var</option>
                            <option value="false">Endirim yoxdur</option>
                        </Field>
                        </div>
                    <br/>
                    <div className="dflexinfo">
                        <Field type="number" className="field" name="price_off" placeholder="price off"/>
                        
                        <br/>     
                    </div>
                </div>

                <div className="dflex">
                    <Field  component="select" className="field" name="category" placeholder="category : Texniki/Geyim">
                        <option value="Texniki">Texniki</option>
                        <option value="Geyim">Geyim</option>
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
                        <Field className="field" name="keyforSearch" placeholder="keyforsearch"/>
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
                    <div className="dflexinfo">
                        <Field className="field" name="color" placeholder="color"/>
                        {errors.color && touched.color ? (
                            <div>{errors.color}</div>
                        ) : null}
                    </div>
                    
                </div>
                <br/>
                <div className="dflex">
                    <div className="dflexinfo">
                        <Field  component="select" className="field" name="new" placehlder="Yeni">
                            <option value="true">Yeni</option>
                            <option value="false">Yeni deyil</option>
                        </Field>
                    </div>
                </div><br/><br/>
                    <button type="submit" className='sbmtbtn'>Send</button>
            </Form>
            )}
            </Formik>
            ))}
        </div>
    </div>
  )
}

export default Editproducts