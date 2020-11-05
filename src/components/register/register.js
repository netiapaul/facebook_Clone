import React from 'react';
import './register.css';

const Register = () =>{
    return(
        <form>
  <div class="form-row">
    <div class="form-group col-md-6">
      <input type="email" class="form-control" id="firstname" placeholder="First Name"/>
    </div>

    <div class="form-group col-md-6">
      <input type="password" class="form-control" id="surname" placeholder="Surname"/>
    </div>
  </div>

  <div class="form-group">
    <input type="email" class="form-control" id="email" placeholder="email address"/>
  </div>

  <div class="form-group">
    <input type="password" class="form-control" id="password" placeholder="password"/>
  </div>

  <p className="register_note">
  By clicking Sign Up, you agree to our Terms, Data Policy and Cookie Policy. You may receive SMS notifications from us and can opt out at any time.
  </p>

 <div className="text-center">
    <button type="submit" class="btn btn-success">Sign Up</button>
 </div>
  

</form>
    )
};

export default Register;