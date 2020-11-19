import React from 'react';
import './register.css';
import { useFormik } from 'formik';
import axios from 'axios';

const validate = values => {

  const errors = {};

  if (!values.firstname) {
    errors.firstname = 'Required';
  } else if (values.firstname.length > 15) {
    errors.firstname = 'Must be 15 characters or less';
  }

  if (!values.surname) {
    errors.surname = 'Required';
  } else if (values.surname.length > 15) {
    errors.surname = 'Must be 15 characters or less';
  }

  if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }

  if (!values.password) {
    errors.password = 'Required';
  } else if (values.password.length < 8) {
    errors.password = 'Must be 8 characters or more';
  }

  return errors;
};

const Register = () =>{

  const formik = useFormik({
    initialValues: {
      firstname: '',
      surname: '',
      email: '',
      password:''
    },
    validate,
    onSubmit: (values,{ setSubmitting }) => {
      fetch('http://localhost:4400/api/v1/users',{
        method:'POST',
        mode:'cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values, null, 2)
        // body data type must match "Content-Type" header
      })
      .then(response => response.json())
      .then(data => console.log(data))
      // alert(JSON.stringify(values, null, 2));
    },
  });

    return(
        <form onSubmit={formik.handleSubmit}>
          <div className="form-row">
            <div className="form-group col-md-6">
            <input
            className="form-control rounded"
            id="firstname"
            name="firstname"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstname}
            placeholder="First Name"
            />
            {formik.touched.firstname && formik.errors.firstname ? <div className="alert alert-danger mt-1 py-1" role="alert">
              <small>{formik.errors.firstname}</small>  
            </div> : null}
            </div>
            
    <div className="form-group col-md-6">
      <input
            className="form-control rounded"
            id="surname"
            name="surname"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.surname}
            placeholder="Surname"
            />
            {formik.touched.surname && formik.errors.surname ? <div className="alert alert-danger mt-1 py-1" role="alert">
              <small>{formik.errors.surname}</small>  
            </div> : null}
    </div>
  </div>

  <div className="form-group">
    <input
    className="form-control rounded"
    id="regemail"
    name="email"
    type="email"
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
    value={formik.values.email}
    placeholder="email address"
    />
    {formik.touched.email && formik.errors.email ? <div className="alert alert-danger mt-1 py-1" role="alert">
      <small>{formik.errors.email}</small>        
    </div> : null}
  </div>

  <div className="form-group">
  <input
    className="form-control rounded"
    id="regpassword"
    name="password"
    type="password"
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
    value={formik.values.password}
    placeholder="password"
    />
    {formik.touched.password && formik.errors.password ? <div className="alert alert-danger mt-1 py-1" role="alert">
      <small>{formik.errors.password}</small>        
    </div> : null}
  </div>

  <p className="register_note">
  By clicking Sign Up, you agree to our Terms, Data Policy and Cookie Policy. You may receive SMS notifications from us and can opt out at any time.
  </p>

 <div className="text-center">
    <button type="submit" className="btn btn-success">Sign Up</button>
 </div>
  

</form>
    )
};

export default Register;