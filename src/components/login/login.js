import React from 'react';
import logo from '../../assets/images/facebook.svg';
import './login.css';
import Register from '../register/register';
import Footer from '../footer/footer';
import { useFormik } from 'formik';

const validate = values => {
    const errors = {};
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

const Login = ()=>{

    const formik = useFormik({
        initialValues: {
          email: '',
          password: '',
        },
        validate,
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
      });

    return(
        <div className="container-fluid px-0">
            

            <div className="card content">
                <div className="card-body">

            <div className="row">
                <div className="col-md-6">
                    <img src={logo} className="img-fluid" alt="Responsive logo brand"/>
                    <p className="brand-pr d-none d-lg-block d-xl-block">Facebook helps you connect and share with the people in your life</p>
                </div>

                {/* LOGIN FORM */}
                <div className="col-md-6 form-card">
                    <div className="card" style={{width: "25rem"}}>
                        <div className="card-body pb-0">

                            <form onSubmit={formik.handleSubmit}>

                                <div className="form-group">

                                <input
                                className="form-control rounded"
                                id="email"
                                name="email"
                                type="email"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                                placeholder="email address"
                                />
                                {formik.touched.email && formik.errors.email ? <div className="alert alert-danger mt-1" role="alert">
                            {formik.errors.email}
                        </div> : null}
                        </div>
                        

                        <div className="form-group">
                            <input
                            className="form-control rounded"
                            id="password"
                            name="password"
                            type="password"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.password}
                            placeholder="password"
                            />

                        {formik.touched.password && formik.errors.password ? <div className="alert alert-danger mt-1" role="alert">
                            {formik.errors.password}
                        </div> : null}
       
                        </div>
                        
       
                                <button type="submit" className="btn btn-primary btn-lg btn-block rounded">Log In</button>

                            </form>

                            <p className="text-center mt-2">Forgotten password?</p>
                        </div>
                        <hr className="horizontal-line"/>
                        
                        <button type="button" className="btn btn-success btn-lg" data-toggle="modal" data-target="#exampleModal">Create New Account</button>

                        {/* MODAL OPENING */}
                        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog-centered modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Sign Up</h5>
                                        <p>It's quick and easy</p>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                        
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        
                                        {/* Register component Import */}
                                        < Register />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* MODAL CLOSING */}
                    </div>
                </div>
            </div>

            </div>
            </div>

            {/* Footer Import */}
            <Footer />

        </div>
    )
};


export default Login;