import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import "./employee-profile.component.css";

import { useState } from "react";
import axios from "axios";
import "./employee-registration.component.css";

import { Navbar } from "./Navbar";
import swal from "sweetalert";

function UserReg() {
  const ROOT_URL = "http://backend-env.eba-m3qra65j.us-east-1.elasticbeanstalk.com";

  const [userName, setUserName] = useState("");
  // const [custGender, setCustGender] = useState("");
  const [userAddress, setUserAddress] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [conPassword, setConPassword] = useState("");    //password usr
  const [userContact, setUserContact] = useState("");
  const userStatus = "active";

  const regex =
    /^([a-zA-Z0-9_.\- ])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;
  const regex1 = /^([a-zA-Z ])+$/;
  const regex2 = /^[6-9]{1}[0-9]{9}$/;

  const handleForm = (e) => {
    e.preventDefault();
    if (
      userName === "" ||
      userAddress === "" ||
      userEmail === "" ||
      userPassword === "" ||
      userContact === ""
    ) {
      swal("error", "please enter details", "error");
    } else if (!regex1.test(userName)) {
      swal("Error!", "Please Enter valid Name", "error");
    } else if (!regex.test(userEmail)) {
      swal("Error!", "Please Enter Valid Email Address", "error");
    } else if (userPassword.length < 6 || userPassword.length > 20) {
      swal("Error!", "Password length is min 6 and max length is 20", "error");
    } else if (
      !regex2.test(userContact) ||
      userContact.length < 10 ||
      userContact.length > 10
    ) {
      swal("Error!!", "Please Enter valid mobile number", "error");
    } else if (userPassword !== conPassword) {
      swal("Error!", "Password does not match", "error");
    } else {
      addUser();
    }
  };

  const addUser = async () => {
    const usr = {
      userName: userName,
      
      userAddress: userAddress,
      userEmail: userEmail,
      userPassword: userPassword,
      userContact: userContact,
      userStatus: userStatus,
    };
    try{
    const resp = await axios.post(ROOT_URL+":/addUser", usr);
    throw new Error('myerror');
    } catch(myerror){
        swal("error", "please enter valid details", "error");
    }
    swal("success", " Your Registration Completed Successful", "success");
    window.location.href="/Adminlogincomponent";

    // const resp = await axios.post("http://localhost:/addUser", usr);
    // if(resp.status){
    //   swal("error", "please enter valid details", "error");
    // }
    // swal("success", " Your Registration Completed Successful", "success");
    // window.location.href="/Adminlogincomponent";
  };

  return (
    <>
      <Navbar />
      <div class="container mt-4 mb-4" style={{border:'2px solid black'}}>
        <div class="row" style={{ justifyContent: "left" }}>
          <div class="col-2 "></div>
          <div class="col-8" style={{ backgroundcolor: "black" }}>
            <div class="row">
              <div class="col-2"></div>
              <div class="col-md-8">
                <div class="do">
                  <form class="form-group" onsubmit=" return  callvalidation()">
                    <div class="inside-form mt-3" style={{ color: "dark" }}>
                      <center>
                        <h2>
                          <b>User Registration</b>
                        </h2>
                      </center>
                    </div>
                    <div class="form-group ">
                      <label id="sty"
                        style={{ fontSize: "14px", backgroundColor: "#99ebff" }}
                      >
                        Personal Details
                      </label>
                    </div>
                    <div class="form-group ">
                      <label for="" id="sty">
                        Full Name <span>*</span>
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="fullName"
                        name="setCustName"
                        placeholder="enter your name"
                        onChange={(e) => {
                          setUserName(e.target.value);
                        }}
                      />
                      <span id="errormsg"></span>
                    </div>
                    
                   
                    <div class="form-group ">
                      <label for="" id="sty">
                        Contact No<span>*</span>
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="contactNo"
                        name="userContact"
                        placeholder="enter your ContactNo"
                        onChange={(e) => {
                          setUserContact(e.target.value);
                        }}
                      />
                      <span id="errormsg1"></span>
                    </div>

                    <div class="form-group ">
                      <label for="" id="sty">
                        Address<span>*</span>
                      </label>
                      <textarea
                        class="form-control"
                        rows="1"
                        id="address"
                        name="userAddress"
                        placeholder="enter your Address"
                        onChange={(e) => {
                          setUserAddress(e.target.value);
                        }}
                      ></textarea>
                    </div>
                    <br />

                   
                    <div class="col info-row">
                      <label id="sty"
                        style={{ fontSize: "14px", backgroundColor: "#99ebff" }}
                      >
                        Registration Info
                      </label>
                    </div>

                    <div class="form-group ">
                      <label for="email" id="sty">
                        Email Id:<span>*</span>
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="email"
                        name="userEmail"
                       
                        placeholder="enter your Email"
                        onChange={(e) => {
                          setUserEmail(e.target.value);
                        }}
                      />
                     
                    </div>

                    <div class="form-group ">
                      <label for="password" id="sty">
                        Password:<span>*</span>
                      </label>
                      <input
                        type="password"
                        class="form-control"
                        id="password"
                        name="userPassword"
                       
                        placeholder="enter Password"
                        onChange={(e) => {
                          setUserPassword(e.target.value);
                        }}
                      />
                     
                    </div>
                    <div class="form-group ">
                      <label for="confirmPassword" id="sty">
                        Confirm Password:
                      </label>
                      <input
                        type="password"
                        class="form-control"
                        id="confirmPassword"
                        onChange={(e) => {
                          setConPassword(e.target.value);
                        }}
                       
                        placeholder="confirm Password"
                      />
                     
                    </div>

                    <div class="form-group ">
                      <button
                        class="btn btn-success mt-2"
                        type="submit"
                        onClick={handleForm}
                       
                      >
                        Submit
                      </button>
                      <div id="sty">
                        <label>already have account ? </label>
                        <a href="Adminlogincomponent" style={{color:"black"}}>Login Here</a>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div class="col-2"></div>
          </div>
        </div>
      </div>
    </>

  );
}
export default UserReg;
