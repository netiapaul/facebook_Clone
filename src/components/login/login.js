import React from 'react';
import logo from '../../assets/images/facebook.svg';
import './login.css';

const Login = ()=>{
    return(
        <div className="container-fluid">
            
            <div className="row">
                <div className="col">
                    <img src={logo} className="img-fluid" alt="Responsive logo brand"/>
                    <p>Facebook helps you connect and share <br/> with the people in yur life</p>
                </div>

                {/* LOGIN FORM */}
                <div className="col">
                    <div className="card" style={{width: "25rem"}}>
                        <div className="card-body">
                        <form>
                            <div className="form-group">
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                            </div>

                            <div className="form-group">
                                <input type="password" className="form-control" id="exampleInputPassword1"/>
                            </div>

                            <button type="button" className="btn btn-primary btn-lg btn-block">Log In</button>
                        </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
};


export default Login;