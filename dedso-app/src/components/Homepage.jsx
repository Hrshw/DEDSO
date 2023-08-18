import React from "react";

function HomePage(){
    return (
        <div className="homePage">
            <div className="navbar">
                <div className="navLeft">
                    <img src={require("../images/Frame.png")} alt="" />
                    <h1 style={{"color":"#fff","fontSize":"62px","fontWeight":"100"}}>DEDSO</h1>
                </div>
                <div className="navMid">
                     <a href="">ABOUT</a>
                     <a href="">SERVICES</a>
                     <a href="">TECHNOLOGIES</a>
                     <a href="">HOW TO</a>
                </div>
                <div style={{"color":"#fff"}} className="navRight">
                   <a href="">CONTACT US</a>
                   <a className="loginButton" href="">LOGIN DEDSO</a>
                </div>
            </div>

            <div className="textArea">
                <div>
                    <h1><span className="clrTxt">Dive</span> Into The Depths Of <span>Sponsored Fests</span></h1>
                     <p>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
sed do eiusmod tempor incididunt ut labore et dolore 
nisl tincidunt eget. Lectus mauris eros in vitae .
                     </p>
                     <div style={{"display":"flex","flexDirection":"row","alignItems":"center","marginTop":"40px"}}>
                     <a className="sponsBtn" href="">Find Sponsors </a>
                     <img  className="arrow" src={require("../images/arrow-small-right.png")} alt="" />
                     </div>
                    
                </div>
                <img src={require("../images/faceMask.png")} alt="" />
            </div>
            <div id="introDiv">
                <div style={{"paddingTop":"20px"}}>
                <h1>INTRODUCTION</h1>
                <div style={{"display":"flex","flexDirection":"row","alignItems":"center"}}>
                <h1 style={{"fontWeight":"100"}}>TO DEDSO</h1>
                <img src={require("../images/arrow-small-right.png")} alt="" />
                </div>
                
                </div>
                <p>
                Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat 
nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo 
quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare 
lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.
                </p>

             </div>
             <div id="aboutUs">
                <img src={require("../images/Maskgroup.png")} alt="" />
                <div>
                    <h1 style={{"fontSize":"36px","fontWeight":"700"}}>ABOUT</h1>
                    <h1 style={{"fontWeight":"100","fontSize":"36px"}}>DEDSO</h1>
                    <p>
                    Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus mattis rhoncus 
urna neque viverra justo. Vivamus at augue eget arcu dictum. Ultrices gravida 
dictum fusce ut placerat orci. Aenean et tortor at risus viverra adipiscing at in. 
Mattis aliquam faucibus purus in massa. Est placerat in egestas erat imperdiet 
sed. Consequat semper viverra nam libero justo laoreet sit amet. Aliquam 
etiam erat velit scelerisque in dictum non consectetur a. Laoreet sit amet 
cursus sit amet. Vel eros donec ac odio tempor orci dapibus. Sem nulla pha
retra diam sit amet nisl suscipit adipiscing bibendum. Leo a diam sollicitudi
n tempor.
                    </p>
                    <a className="sponsBtn" style={{"width":"30%","marginTop":"20px"}} href="">LET'S GET IN TOUCH</a>
                </div>
             </div>
             <div id="cardSection">
                <div id="cardDiv">
                <div style={{"width":"100%"}}>
                    <h1 style={{"fontSize":"36px","fontWeight":"700"}}>WHY CHOOSE</h1>
                    <div style={{"display":"flex","flexDirection":"row","alignItems":"center"}}>
                    <h1 style={{"fontWeight":"100","fontSize":"36px","alignItems":"center"}}>DEDSO </h1>
                    <img style={{"marginLeft":"100px"}}src={require("../images/arrow-small-right.png")} alt="" />
                    </div>
                   
                  </div>
                  <p>
                  Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat 
nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo 
quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare 
lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.
                  </p>
                </div>
                  <div className="cards">
                     <div>
                        <img src={require("../images/unity.png")} alt="" />
                        <h2 style={{"marginTop":"17px"}}>Trusted Sponsors</h2>
                        <p>Vitae sapien pellentesque habitant morbi
nunc. Viverra aliquet  porttitor rhoncus 
libero justo laoreet sit amet vitae.</p>
                        <a className="sponsBtn"  href="">Try It Now</a>
                     </div>
                     <div>
                        <img src={require("../images/merger.png")} alt="" />
                        <h2>Transparency</h2>
                        <p>Vitae sapien pellentesque habitant morbi
nunc. Viverra aliquet  porttitor rhoncus 
libero justo laoreet sit amet vitae.</p>
                      <a  className="sponsBtn" href="">Try It Now</a> 
                     </div>
                     <div>
                        <img src={require("../images/network.png")} alt="" />
                        <h2>Self-Curated Network</h2>
                        <p>Vitae sapien pellentesque habitant morbi
nunc. Viverra aliquet  porttitor rhoncus 
libero justo laoreet sit amet vitae.</p>
                      <a className="sponsBtn" href="">Try It Now</a>
                     </div>
                     <div>
                        <img src={require("../images/vr.png")} alt="" />
                        <h2>100+ Users</h2>
                        <p>Vitae sapien pellentesque habitant morbi
nunc. Viverra aliquet  porttitor rhoncus 
libero justo laoreet sit amet vitae.</p>
                      <a  className="sponsBtn" href="">Try It Now</a>
                     </div>
                  </div>
             </div>
             <div id="companyLogin">
                <div className="companyBtn">
                <h1>COMPANY LOGIN</h1>
                <img src={require("../images/whiteArrow.png")}alt="" />
                </div>
                 <div className="logoDiv">
                      <img src={require("../images/unreal.png")} alt="" />
                      <img src={require("../images/unity.png")} alt="" />
                      <img src={require("../images/oculus.png")} alt="" />
                      <img src={require("../images/vive.png")} alt="" />
                 </div>
             </div>
             <div className="howToDiv">
                <div style={{"display":"flex","flexDirection":"row","justifyContent":"space-between","alignItems":"center"}}>
                <div>
                    <h1 style={{"fontWeight":"700","fontSize":"40px"}}>HOW WE WORK</h1>
                    <div style={{"display":"flex","flexDirection":"row","alignItems":"center"}}>
                        <h1 style={{"fontWeight":"200","fontSize":"40px","marginRight":"50px"}} >AT DEDSO?</h1>
                        <img src={require("../images/arrow-small-right.png")} alt="" />
                    </div>
                </div>
                <p>Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat 
nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo 
quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare 
lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.</p>
                </div>
                <div></div>
             </div>
        </div>
    )
}
export default HomePage;