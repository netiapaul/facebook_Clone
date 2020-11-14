import React from 'react';
import logo from '../../assets/images/facebook.svg';
import './login.css';
import Register from '../register/register';
import Footer from '../footer/footer';


const Login = ()=>{
    return(
        <div className="container-fluid px-0">
            

            <div className="card content">
                <div className="card-body">

            <div className="row">
                <div className="col">
                    <img src={logo} className="img-fluid" alt="Responsive logo brand"/>
                    <p className="brand-pr d-none d-lg-block d-xl-block">Facebook helps you connect and share with the people in your life</p>
                </div>

                {/* LOGIN FORM */}
                <div className="col form-card">
                    <div className="card" style={{width: "25rem"}}>
                        <div className="card-body pb-0">
                        <form>
                            <div className="form-group">
                                <input type="email" className="form-control rounded" placeholder="Email address"/>
                            </div>

                            <div className="form-group">
                                <input type="password" className="form-control rounded" placeholder="Password"/>
                            </div>

                            <button type="button" className="btn btn-primary btn-lg btn-block rounded">Log In</button>
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
                                        {/* <p>It's quick and easy</p> */}
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