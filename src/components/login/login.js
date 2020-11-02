import React from 'react';
import logo from '../../assets/images/facebook.svg';
import './login.css';
import Footer from '../footer/footer'

const Login = ()=>{
    return(
        <div className="container-fluid px-0">
            
            <div className="row">
                <div className="col">
                    <img src={logo} className="img-fluid" alt="Responsive logo brand"/>
                    <p className="brand-pr">Facebook helps you connect and share with the people in yur life</p>
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
                        <button type="button" className="btn btn-success btn-lg">Create New Account</button>
                    </div>
                </div>
            </div>

            {/* Footer Import */}
            <Footer />

        </div>
    )
};


export default Login;