import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function SLogin() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Form validation
    // if (!formData.fullName || !formData.college || !formData.email || !formData.password) {
    //   alert("Please fill in all the required fields.");
    //   return;
    // }

    // Make the POST request to the backend API
    axios
      .post("http://localhost:5000/api/student/register", formData)
      .then((response) => {
        // Show success message and reset form data
        setSuccessMessage("Account created successfully!");
        setErrorMessage(""); // Clear any previous error message
        setFormData({
          email: "",
          password: "",
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

  return (
    <div className="studentLogin">
      <div className="imgDiv">
        <img src={require("../images/login.png")} alt="" />
      </div>
      <form className="studentInfo" onSubmit={handleSubmit} method="post">
        <h1 className="loginText">Welcome to DEDSO Student Login</h1>
        {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
       
        
        
        <label htmlFor="email">Email</label>
        <input
          className="textbox"
          name="email"
          type="email"
          placeholder="info"
          value={formData.email}
          onChange={handleChange}
        />
        <label htmlFor="password">Password</label>
        <input
       
          name="password"
          type="password"
          placeholder="password"
          value={formData.password}
          onChange={handleChange}
        />
        <div className="buttonDiv">
          <div style={{"display":"flex","flexDirection":"row","justifyContent":"space-between","marginBottom":"20px"}}>
            <button className="createBtn" style={{"marginRight":"15px"}}>
              <Link to="/CollegeRegistration">Log In</Link>
              </button>
            <button className="createBtn" type="submit">
              <Link to="/studentRegistration">Create Account</Link>
            </button>
            
          </div>
        
          <button className="googleBtn" >
            <img className="icon" src={require("../images/google.jpeg")} alt="" />
            Sign up with Google
          </button>
        </div>
      </form>
    </div>
  );
}

export default SLogin;
