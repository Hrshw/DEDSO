import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
function College() {
   
    const navigate = useNavigate();

    const [filled,setFilled]=useState(false);
    const [formData, setFormData] = useState({
        collegeName: "",
        fieldOfEducation: "",
        collegeAddress: "",
        collegeEmail: "",
        pocMobile: "",
        altMobile: "",
        clubName: "",
    });

    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    
    for(let field in formData){
        if(formData[field]!==""){
            setFilled(true);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // Form validation
        
        // Make the POST request to the backend API
        axios
            .post("http://localhost:5000/api/college/register", formData)
            .then((response) => {
                // Show success message and reset form data
                setSuccessMessage("College registered successfully!");
                setErrorMessage(""); // Clear any previous error message
                setFormData({
                    collegeName: "",
                    fieldOfEducation: "",
                    collegeAddress: "",
                    collegeEmail: "",
                    pocMobile: "",
                    altMobile: "",
                    clubName: "",
                });
            })
            .catch((error) => {
                console.error("Error submitting form:", error);
                if (error.response && error.response.data && error.response.data.error) {
                    setErrorMessage(error.response.data.error);
                } else {
                    setErrorMessage("An error occurred while processing your request.");
                }
            });
    };

    return <div className="collegeLogin">
        <div className="imgDiv">
            <img src={require("../images/login.png")} alt="" />
        </div>

        <form className="collegeInfo" onSubmit={handleSubmit} method="post" action="/CollegeRegistration">
            <h1 className="loginText" style={{ "fontSize": "45px", "width": "80%", "textAlign": "center", "marginLeft": "10%" }}>Complete Your Registration College Details</h1>
            {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
            {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
            <label htmlFor="">College Name</label>
            <input className="textbox-2" name="collegeName" type="text" placeholder="Enter name of your college" value={formData.collegeName}
                onChange={handleChange} />
            <label htmlFor="">Field of Education</label>
            <input className="textbox-2" name="fieldOfEducation" type="text" placeholder="Info" value={formData.fieldOfEducation}
                onChange={handleChange} />
            <label htmlFor="">College Address</label>
            <input className="textbox-2" name="collegeAddress" type="text" placeholder="info" value={formData.collegeAddress}
                onChange={handleChange} />
            <label htmlFor="">Official Email</label>
            <input className="textbox-2" name="collegeEmail" type="email" placeholder="College Email" value={formData.collegeEmail}
                onChange={handleChange} />
            <label htmlFor="">POC mobile No.</label>
            <input className="textbox-2" name="pocMobile" type="tel" placeholder="Contact info" value={formData.pocMobile}
                onChange={handleChange} />
            <label htmlFor="">Alternate Mobile No.</label>
            <input className="textbox-2" name="altMobile" type="tel" placeholder="contact info" value={formData.altMobile}
                onChange={handleChange} />
            <label htmlFor="">Club/Department/Team Name</label>
            <input className="textbox-2" name="clubName" type="text" placeholder="Club/Department/Team Name" value={formData.clubName}
                onChange={handleChange} />
            <button className="submit" type="submit" onClick={()=>{
              if(filled){
                navigate("/festRegistration")
              }else{
                alert("Pls fill the required fields")
              }
            }}>
                SUBMIT
                </button>
        </form>


    </div>
}

export default College;