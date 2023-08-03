import React from "react";
import {Link } from "react-router-dom";
function CompanyLogin(){
    return <div className="studentLogin">
        <div className="imgDiv">
<img src={require("../images/building.png")} alt="" />
        </div>
        
        <form className="studentInfo" action="/" method="post">
            <h1 className="loginText">Welcome to DEDSO Company Login</h1>
        <label htmlFor="">Full Name</label>
        <input className="textbox" name="Full Name" type="text" placeholder="John Doe"/>
        <label htmlFor="">Company Name</label>
        <input className="textbox" name="College" type="text" placeholder="Info" />
        <label htmlFor="">Email</label>
        <input className="textbox" name="Email" type="email" placeholder="info"/>
        <label htmlFor="">Password</label>
        <input className="textbox" name="Password" type="password" placeholder="password"/>
        <div className="buttonDiv">
            <div>
            <button className="createBtn"><Link to="/CompanyRegistration"></Link>Register</button>
            <p>Already have an account?</p>
            </div>
            <h1>OR</h1>
            <button className="googleBtn"><img className="icon" src={require("../images/google.jpeg")} alt="" />Sign up with Google</button>
        </div>
    </form>
        
        
    </div>
}
export default CompanyLogin;