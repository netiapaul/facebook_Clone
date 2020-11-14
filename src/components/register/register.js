import React from 'react';
import './register.css';

const Register = () =>{
    return(
        <form>
  <div className="form-row">
    <div className="form-group col-md-6">
      <input type="email" className="form-control" id="firstname" placeholder="First Name"/>
    </div>

    <div className="form-group col-md-6">
      <input type="password" className="form-control" id="surname" placeholder="Surname"/>
    </div>
  </div>

  <div className="form-group">
    <input type="email" className="form-control" id="regemail" placeholder="email address"/>
  </div>

  <div className="form-group">
    <input type="password" className="form-control" id="regpassword" placeholder="password"/>
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