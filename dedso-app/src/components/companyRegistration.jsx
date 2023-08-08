import React from "react";
import { Link } from "react-router-dom";
function College(){
    return <div className="collegeLogin">
    <div className="imgDiv">
<img src={require("../images/building.png")} alt="" />
    </div>
    
    <form className="collegeInfo" action="/" method="post">
        <h1 className="loginText" style={{"fontSize":"45px","width":"80%","textAlign":"center","marginLeft":"10%"}}>Complete Your Registration College Details</h1>
    <label htmlFor="">Company Name</label>
    <input className="textbox-2" name="Company Name" type="text" placeholder="Enter name of your Company"/>
    <label htmlFor="">Industry</label>
    <input className="textbox-2" name="industry" type="text" placeholder="Info" />
    <label htmlFor="">Your Post</label>
    <input className="textbox-2" name="post" type="text" placeholder="info"/>
    <label htmlFor="">Your Department</label>
    <input className="textbox-2" name="department" type="text" placeholder="Enter your Department"/>
    <label htmlFor="">Contact No.</label>
    <input className="textbox-2" name="PocMobile" type="tel" placeholder="Contact info"/>
    <label htmlFor="">Contact Mobile No.</label>
    <input className="textbox-2" name="AltMobile" type="tel" placeholder="contact info"/>
    <label htmlFor="">Company LinkedIn</label>
    <input className="textbox-2" name="companyLinkedIn" type="text" placeholder="Company LinkedIn"/>
    <button className="submit">SUBMIT</button>
</form>
    
    
</div>
}

export default College;