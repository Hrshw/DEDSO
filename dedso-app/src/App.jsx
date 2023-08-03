import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import SLogin from "./components/studentLogin";
import College from "./components/collegeRegistration";
import Fest from "./components/festRegistration";
import CompanyLogin from "./components/companyLogin";
import CompanyRegistration from "./components/companyRegistration";
function App(){
  return (
     <>
  <Router>
  <div>

  
   <Routes>
        <Route path="/" element={<SLogin />} />
    
        <Route path="/CollegeLogIn" element={<College />}>

        </Route>
        <Route path="/festRegistration" element={<Fest/>}>
        </Route>
        <Route path="/CompanyLogin" element={<CompanyLogin />}>
        </Route>
        <Route path="/CompanyRegistration" element={<CompanyRegistration />}>
        </Route>
   </Routes>
  </div>
  </Router>
  </>
  )
}



export default App;
