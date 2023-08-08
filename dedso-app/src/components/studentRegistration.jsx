import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function StudentRegistration() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    studentName: "",
    degree: "",
    yearofStudy: "",
    collegeEmail: "",
    mobile: "",
    altMobile: "",
    clubName: "",
    password: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/api/student/register", formData)
      .then((response) => {
        setSuccessMessage("Account created successfully!");
        setErrorMessage("");
        navigate("/CollegeRegistration");
      })
      .catch((error) => {
        if (error.response && error.response.data && error.response.data.error) {
          setErrorMessage(error.response.data.error);
        } else {
          setErrorMessage("An error occurred while processing your request.");
        }
        setSuccessMessage("");
      });
  };

    return <div className="studentLogin">
    <div className="imgDiv">
        <img src={require("../images/login.png")} alt="" />
    </div>

    
    <form className="studentInfo" onSubmit={handleSubmit} method="post">
        <h1 className="loginText" style={{ "fontSize": "45px", "width": "80%", "textAlign": "center", "marginLeft": "10%" }}>Complete Your Registration Student Details</h1>
        {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        <label htmlFor="">Student Name</label>
        <input className="textbox-2" name="studentName" type="text" placeholder="Enter name of your college" onChange={handleChange}/>
        <label htmlFor="">Degree</label>
        <input className="textbox-2" name="degree" type="text" placeholder="Info" onChange={handleChange}/>
        <label htmlFor="">Year of Study</label>
        <input className="textbox-2" name="yearofStudy" type="text" placeholder="info" />
        <label htmlFor="">Student Email</label>
        <input className="textbox-2" name="studentEmail" type="email" placeholder="student Email"  />
        <label htmlFor="">Mobile No.</label>
        <input className="textbox-2" name="mobile" type="tel" placeholder="Contact info"  onChange={handleChange}/>
        <label htmlFor="">Alternate Mobile No.</label>
        <input className="textbox-2" name="altMobile" type="tel" placeholder="contact info" onChange={handleChange}/>
        <label htmlFor="">Club/Department/Team Name</label>
        <input className="textbox-2" name="clubName" type="text" placeholder="Club/Department/Team Name" onChange={handleChange}/>
        <label htmlFor="">Password</label>
        <input name="password" type="password" placeholder="password" onChange={handleChange}/>
        <button className="submit" type="submit">
          SUBMIT
        </button>
    </form>
    </div>
}

export default StudentRegistration;