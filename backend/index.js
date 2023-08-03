const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const app = express();
const port = 5000;


// Database related code
require('./Db_connection/Db_conn');
const Student = require('./model/StudentLogin');
const College = require('./model/collegeRegistration');
const Company = require('./model/CompanyRegistration')


// Add necessary middleware to parse request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors()); // Enable CORS for all routes

// API route to handle student login form submission
app.post('/api/student/register', async (req, res) => {
  const formData = req.body;

  try {
    // Hash the password before saving it to the database
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(formData.password, saltRounds);

    // Create a new student record with the hashed password
    const newStudent = new Student({
      ...formData,
      password: hashedPassword,
    });

    // Save the student record to the database
    const savedStudent = await newStudent.save();
    res.status(201).json(savedStudent); // Return the saved student record as the response
  } catch (error) {
    console.error('Error saving student record:', error);
    if (error.code === 11000 && error.keyPattern && error.keyPattern.email === 1) {
      res.status(400).json({ error: 'Duplicate email. Please use a different email.' });
    } else {
      res.status(500).json({ error: 'An error occurred while saving the student record.' });
    }
  }
});

// API route to handle college registration form submission
app.post("/api/college/register", async (req, res) => {
  const formData = req.body;

  try {
    // Create a new college record
    const newCollege = new College(formData);

    // Save the college record to the database
    const savedCollege = await newCollege.save();
    res.status(201).json(savedCollege); // Return the saved college record as the response
  } catch (error) {
    console.error("Error saving college record:", error);
    res.status(500).json({ error: "An error occurred while saving the college record." });
  }
});

// API route to handle company registration form submission
app.post("/api/company/register", async (req, res) => {
  const formData = req.body;

  try {
    // Save the company data to the database
    const newCompany = new Company(formData);
    await newCompany.save();

    // company registration successful
    res.status(200).json({ message: "company registration successful!" });
  } catch (error) {
    console.error("Error during company registration:", error);
    res.status(500).json({ error: "An error occurred while processing your request." });
  }
});

app.post("/api/company/login", async (req, res) => {
  const formData = req.body;

  try {
    // Check if the company with the provided email exists
    const existingCompany = await Company.findOne({ email: formData.email });
    if (!existingCompany) {
      return res.status(404).json({ error: "Company not found. Please register first." });
    }

    // Check if the provided password matches the stored password
    if (formData.password !== existingCompany.password) {
      return res.status(401).json({ error: "Invalid password. Please try again." });
    }

    // Company login successful
    res.status(200).json({ message: "Company login successful!" });
  } catch (error) {
    console.error("Error during company login:", error);
    res.status(500).json({ error: "An error occurred while processing your request." });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
