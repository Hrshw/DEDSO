import React from "react";

function festRegistration(){
    return <div className="festLogin">
    <div className="imgDiv">
<img style={{"height":"170vh"}} src={require("../images/fest.png")} alt="" />
    </div>
    
    <form className="festInfo" action="/" method="post">
        <h1 className="loginText" style={{"fontSize":"55px","width":"80%","textAlign":"center","marginLeft":"10%"}}>Complete Your Registration Fest Details</h1>
    <label htmlFor="">Fest Name</label>
    <input className="textbox-2" name="Fest Name" type="text" placeholder="Enter name of your Fest"/>
    <label htmlFor="">Type of fest</label>
    <input className="textbox-2" name="festType" type="text" placeholder="Info" />
    <label htmlFor="">Fest Date</label>
    <input className="textbox-2" name="festDate" type="date" placeholder="Enter Date of the fest"/>
    <label htmlFor="">Duration of Fest</label>
    <input className="textbox-2" name="festDuration" type="text" placeholder="Enter Duration of the Fest"/>
    <label htmlFor="">Location</label>
    <input className="textbox-2" name="festLocation" type="text" placeholder="Fest Location"/>
    <label htmlFor="">Brochure</label>
    <input className="textbox-2" name="festBrochure" type="file" placeholder="Fest Brochure"/>
    <label htmlFor="">Expected Footfall</label>
    <input className="textbox-2" name="footFall" type="text" placeholder="Expected Footfall of the fest"/>
    <label htmlFor="">Instagram Handle</label>
    <input className="textbox-2" name="instaHandle" type="text" placeholder="Instagram Handle"/>
    <label htmlFor="">LinkedIn Handle</label>
    <input className="textbox-2" name="clubName" type="text" placeholder="LinkedIn Handle"/>
    <label htmlFor="">Facebook Handle</label>
    <input className="textbox-2" name="clubName" type="text" placeholder="Facebook Handle"/>
    <label htmlFor="">Past Year's Pics of the Fest</label>
    <input className="textbox-2" name="clubName" type="file" placeholder="fest pics from past year"/>
    <button className="submit-2">Add Another Fest</button>
    <button className="submit-2">SUBMIT</button>
</form>
    
    
</div>
}
export default festRegistration;