import React, { useState } from "react";
import axios from "axios";


function SLogin() {
  const [formData, setFormData] = useState({
    fullName: "",
    college: "",
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
    if (!formData.fullName || !formData.college || !formData.email || !formData.password) {
      alert("Please fill in all the required fields.");
      return;
    }

    // Make the POST request to the backend API
    axios
      .post("http://localhost:5000/api/student/register", formData)
      .then((response) => {
        // Show success message and reset form data
        setSuccessMessage("Account created successfully!");
        setErrorMessage(""); // Clear any previous error message
        setFormData({
          fullName: "",
          college: "",
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
        <label htmlFor="fullName">Full Name</label>
        <input
          className="textbox"
          name="fullName"
          type="text"
          placeholder="John Doe"
          value={formData.fullName}
          onChange={handleChange}
        />
        <label htmlFor="college">College</label>
        <input
          className="textbox"
          name="college"
          type="text"
          placeholder="Info"
          value={formData.college}
          onChange={handleChange}
        />
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
          className="textbox"
          name="password"
          type="password"
          placeholder="password"
          value={formData.password}
          onChange={handleChange}
        />
        <div className="buttonDiv">
          <div>
            <button className="createBtn" type="submit">
              Create Account
            </button>
            <p>
              Already have an account?<a href="">Log in</a>
            </p>
          </div>
          <h1>OR</h1>
          <button className="googleBtn">
            <img className="icon" src={require("../images/google.jpeg")} alt="" />
            Sign up with Google
          </button>
        </div>
      </form>
    </div>
  );
}

export default SLogin;
