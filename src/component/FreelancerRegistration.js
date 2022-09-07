import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./employee-profile.component.css";
import { useState } from "react";
import axios from "axios";
import "./employee-registration.component.css";
import { Navbar } from "./Navbar";
import swal from "sweetalert";

function FreelancerRegistration() {
  const ROOT_URL = "http://abhishekpotbhare.us-east-1.elasticbeanstalk.com";

  const [frlName, setFrlName] = useState("");
  
  const [frlAddress, setFrlAddress] = useState("");
  const [frlCity, setFrlCity] = useState("");
  const [frlProfession, setFrlProfession] = useState("");
  const [frlExperience, setFrlExperience] = useState("");
  const [frlRatePerHr, setFrlRatePerHr] = useState("");
  const [frlEmail, setFrlEmail] = useState("");
  const [frlPassword, setFrlPassword] = useState("");
  const [conPassword, setConPassword] = useState("");

  const [frlContact, setFrlContact] = useState("");
  const status = "active";

  const regex =
    /^([a-zA-Z0-9_\.\-\ ])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  const regex1 = /^([a-zA-Z\ ])+$/;
  const regex2 = /^[6-9]{1}[0-9]{9}$/;

  const handleForm = (e) => {
    e.preventDefault();
    if (
      frlName === "" ||
      
      frlAddress === "" ||
      frlCity === "" ||
      frlProfession === "" ||
      frlExperience === "" ||
      frlRatePerHr === "" ||
      frlEmail === "" ||
      frlPassword === ""
    ) {
      swal("error", "please enter details", "error");
    } else if (!regex1.test(frlName)) {
      swal("Error!", "Please Enter valid Name", "error");
    } else if (!regex.test(frlEmail)) {
      swal("Error!", "Please Enter Valid Email Address", "error");
    } else if (frlPassword.length < 6 || frlPassword.length > 20) {
      swal("Error!", "Password length is min 6 and max length is 20", "error");
  
    } else if (
      !regex2.test(frlContact) ||
      frlContact.length < 10 ||
      frlContact.length > 10
    ) {
      swal("Error!!", "Please Enter valid mobile number", "error");
    } else if (conPassword != frlPassword) {
      swal("Error!", "Password does not match", "error");
    } else {
      addFreelancer();
    }
  };

  const addFreelancer = async () => {
    console.log(frlProfession);
    const frl = {
      frlName: frlName,
     
      frlAddress: frlAddress,
      frlCity: frlCity,
      frlProfession: frlProfession,
      frlExperience: frlExperience,
      frlRatePerHr: frlRatePerHr,
      frlEmail: frlEmail,
      frlPassword: frlPassword,
      status: status,
      frlContact: frlContact,
    };
    
    try {
      const resp = await axios.post(ROOT_URL+":/AddFreelancer", frl);
    
    } catch (error) {
      swal("error", "please enter valid details", "error");
    }
    swal("success", " Your Registration Completed Successful", "success");
    window.location.href="/Adminlogincomponent";
  };

  return (
    <>
      <Navbar />

      <div class="container mt-4 mb-4" style={{border:"2px solid black"}}>
        <div class="row" >
          <div class="col-2 "></div>
          <div class="col-8" >
            <div class="row">
              <div class="col-2"></div>
              <div class="col-md-8">
                <div class="do">
                  <form class="form-group" onsubmit=" return  callvalidation()">
                    <div class="inside-form mt-3" style={{ color: "dark" }}>
                      <center>
                        <h2>
                          <b>Freelancer Registration</b>
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
                        name="freelancerName"
                        placeholder="enter your name"
                        onChange={(e) => {
                          setFrlName(e.target.value);
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
                        name="freelancerContact"
                        placeholder="enter your ContactNo"
                        onChange={(e) => {
                          setFrlContact(e.target.value);
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
                        name="FreelancerAddress"
                        placeholder="enter your Address"
                        onChange={(e) => {
                          setFrlAddress(e.target.value);
                        }}
                      ></textarea>
                    </div>
                    <br />

                    <div class="form-group ">
                      <label id="sty"
                        style={{ fontSize: "14px", backgroundColor: "#99ebff" }}
                      >
                        Work Info
                      </label>
                    </div>

                    <div class="form-group ">
                      <label for="" id="sty">
                        Profession<span>*</span>
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="profession"
                        name="professionId"
                        onChange={(e) => {
                          setFrlProfession(e.target.value);
                        }}
                        placeholder="enter your Profession"
                      />
                     
                    </div>

                    <div class="form-group ">
                      <label for="" id="sty">
                        Experiance<span>*</span>
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="experience"
                        name="freelancerExperiance"
                        onChange={(e) => {
                          setFrlExperience(e.target.value);
                        }}
                        placeholder="enter your Experiance"
                      />
                    </div>

                    <div class="form-group">
                      <label for="" id="sty">
                        Rate/Hour(Rs)<span>*</span>
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="rate"
                        name="freelancerRate"
                        placeholder="enter your charges"
                        onChange={(e) => {
                          setFrlRatePerHr(e.target.value);
                        }}
                      />
                    </div>

                    <div class="form-group ">
                      <label for="" id="sty">
                        City/Area<span>*</span>
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="city"
                        name="freelancerCity"
                        placeholder="enter your City"
                        onChange={(e) => {
                          setFrlCity(e.target.value);
                        }}
                      />
                    </div>

                    <div class="col info-row">
                      <label class="text" id="sty"
                        style={{ fontSize: "14px", backgroundColor: "#99ebff" }}
                      >
                        Registration Info
                      </label>
                    </div>

                    <div class="form-group ">
                      <label for="email" id="sty" style={{ fontSize: "15px" }}>
                        Email Id:<span>*</span>
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="email"
                        name="freelancerEmail"
                        style={{ fontSize: "15px" }}
                        placeholder="enter your Email"
                        onChange={(e) => {
                          setFrlEmail(e.target.value);
                        }}
                      />
                      <span id="errormsg3"></span>
                    </div>

                    <div class="form-group ">
                      <label for="password" id="sty" style={{ fontSize: "15px" }}>
                        Password:<span>*</span>
                      </label>
                      <input
                        type="password"
                        class="form-control"
                        id="password"
                        name="freelancerPassword"
                        style={{ fontSize: "15px" }}
                        placeholder="enter Password"
                        onChange={(e) => {
                          setFrlPassword(e.target.value);
                        }}
                      />
                      <span id="errormsg4"></span>
                      <span id="errormsg4"></span>
                    </div>
                    <div class="form-group ">
                      <label for="confirmPassword" id="sty"  style={{ fontSize: "15px" }}>
                        Confirm Password:<span>*</span>
                      </label>
                      <input
                        type="password"
                        class="form-control"
                        id="confirmPassword"
                        onChange={(e) => {
                          setConPassword(e.target.value);
                        }}
                        style={{ fontSize: "15px" }}
                        placeholder="confirm Password"
                      />
                      <span id="errormsg5"></span>
                    </div>

                    <div class="form-group ">
                      <button
                        class="btn btn-success mt-2"
                        type="submit"
                        onClick={handleForm}
                        style={{ fontSize: "15px" }}
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
          </div>
        </div>
      </div>
    </>

  );
}
export default FreelancerRegistration;
