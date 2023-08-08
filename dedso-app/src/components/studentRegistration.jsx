import React from "react";
import {Link} from "react-router-dom";

function studentRegistration(){
    return <div className="studentLogin">
    <div className="imgDiv">
        <img src={require("../images/login.png")} alt="" />
    </div>

    <form className="studentInfo"  method="post" action="/StudentRegistration">
        <h1 className="loginText" style={{ "fontSize": "45px", "width": "80%", "textAlign": "center", "marginLeft": "10%" }}>Complete Your Registration Student Details</h1>
       
        <label htmlFor="">Student Name</label>
        <input className="textbox-2" name="studentName" type="text" placeholder="Enter name of your college" />
        <label htmlFor="">Degree</label>
        <input className="textbox-2" name="degree" type="text" placeholder="Info"/>
        <label htmlFor="">Year of Study</label>
        <input className="textbox-2" name="yearofStudy" type="text" placeholder="info" />
        <label htmlFor="">Student Email</label>
        <input className="textbox-2" name="studentEmail" type="email" placeholder="Student Email"  />
        <label htmlFor="">Mobile No.</label>
        <input className="textbox-2" name="mobile" type="tel" placeholder="Contact info"  />
        <label htmlFor="">Alternate Mobile No.</label>
        <input className="textbox-2" name="altMobile" type="tel" placeholder="contact info" />
        <label htmlFor="">Club/Department/Team Name</label>
       
        <input className="textbox-2" name="clubName" type="text" placeholder="Club/Department/Team Name" />
        <label htmlFor="">Password</label>
        <input name="password" type="password" placeholder="password" />
        <button className="submit" type="submit">
            <Link to="/CollegeRegistration" style={{"color":"#fff","textDecoration":"none"}}>SUBMIT</Link>
            </button>
    </form>
    </div>
}

export default studentRegistration;