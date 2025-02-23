import React from 'react'
import {Formik, Field, ErrorMessage,Form} from 'formik'
// import Yup 
import * as Yup from 'yup'

const Signuppage = () => {
    const handleSubmit=()=>{
        alert("Form submitted")
    }
  return (
    <Formik initialValues={{fname:'',lname:'',email:'',pwd:''}} 
    validationSchema={Yup.object({
        fname: Yup.string()
        .matches(/^[a-zA-Z]+$/,'Must be letters')
        .max(20,'Must be less than 20 letters')
        .min(3,'Must be greater than 3 letters')
        .required('First Name is mandatory'),

        lname: Yup.string()
        .max(20,'Must be less than 20 letters')
        .min(3,'Must be greater than 3 letters')
        .required('Last Name is mandatory'),

        email:Yup.string()
        // .email('Invalid email')
        .matches(/^([a-zA-Z])[a-zA-Z0-9\-\.\_]+\@+([a-zA-Z])+\.+([a-z])/,'invalid Email Format')
        .required('Email is mandatory'),

        pwd:Yup.string()
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$*!?]).{8,}$/,'Weak Password')
        .required('Password is mandatory')
        



    })}>
    <div className="container my-5">
      <div className="d-md-flex justify-content-evenly">
        <div className="col-md-5">
          <Form className="p-3 border shadow rounded-4" onSubmit={handleSubmit}>
            <h3 className="text-center text-primary">Register for Free</h3>
            <hr/>

            <div className="row row-cols-2">
            <div className="form-floating mb-3">
              <Field type="text" placeholder="" className="form-control" id="fname" name='fname' required />
              <label htmlFor="fname" className="ms-3">First Name</label>
              <ErrorMessage name='fname'>
                {msg => <span className='text-danger'>{msg}</span> }
              </ErrorMessage>
            </div>

            <div className="form-floating mb-3">
              <Field type="text" placeholder="" className="form-control" name='lname' id='lname' required />
              <label htmlFor="lname" className="ms-3">Last Name</label>
              <ErrorMessage name='lname'>
                {msg => <span className='text-danger'>{msg}</span> }
              </ErrorMessage>
            </div>
          </div>

          <div className="form-floating mb-3">
            <Field type="email" placeholder="" className="form-control" name='email' id='email' required />
            <label htmlFor="email">Email Address</label>
            <ErrorMessage name='email'>
                {msg => <span className='text-danger'>{msg}</span> }
              </ErrorMessage>
          </div>

          <div className="form-floating mb-3">
            <Field type="password" placeholder="" className="form-control" name='pwd' id='pwd' required />
            <label htmlFor="pwd">Password</label>
            <ErrorMessage name='pwd'>
                {msg => <span className='text-danger'>{msg}</span> }
              </ErrorMessage>
          </div>

          <hr/>
          <div className="mb-3 w-100 m-auto">
          <input type="submit" value="Register" className="btn btn-primary w-100"/>
        </div>

       
        <small>Already Have Account ? <a href="#">Login Here!</a></small>




          </Form>
        </div>

        <div className="col-md-4">
          <img src="images/signupimage.avif" alt="form" width="100%" height="100%"/>
        </div>
      </div>
    </div>

    </Formik>
  )
}

export default Signuppage
