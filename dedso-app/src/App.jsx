import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import HomePage from "./components/Homepage";
import SLogin from "./components/studentLogin";
import College from "./components/collegeRegistration";
import Fest from "./components/festRegistration";
import CompanyLogin from "./components/companyLogin";
import CompanyRegistration from "./components/companyRegistration";
import StudentRegistration from "./components/studentRegistration";
function App(){
  return (
     <>
  <Router>
  <div>

  
   <Routes>
        <Route path="/" element={<HomePage />} />
    
        <Route path="/CollegeRegistration" element={<College />}>

        </Route>
        <Route path="/festRegistration" element={<Fest/>}>
        </Route>
        <Route path="/CompanyLogin" element={<CompanyLogin />}>
        </Route>
        <Route path="/CompanyRegistration" element={<CompanyRegistration />}>
        </Route>
        <Route path="/StudentRegistration" element={<StudentRegistration />}>
        </Route>
   </Routes>
  </div>
  </Router>
  </>
  )
}



export default App;
