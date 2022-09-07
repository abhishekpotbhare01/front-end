import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./admin-login.component.css";
import { Button, ButtonGroup } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import { Navbar } from "./Navbar";
import swal from "sweetalert";

function Adminlogincomponent() {
  const ROOT_URL = "http://abhishekpotbhare.us-east-1.elasticbeanstalk.com";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  localStorage.setItem("role", role);

  const regex =
    /^([a-zA-Z0-9_\.\-\ ])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  const handleForm = (e) => {
    e.preventDefault();
    if (email === "") {
      swal("error", "please enter valid details", "error");
    } else if (!regex.test(email)) {
      swal("Error!", "Please Enter Valid Email Address", "error");
    } else if (password == "") {
      swal("error", "please enter password", "error");
    } else if (password.length < 6 || password.length > 20) {
      swal("Error!", "Password length is min 6 and max length is 20", "error");
    } else {
      checkUser();
    }
  };

  const checkUser = async () => {
    let user = null;
    // swal(role);
    console.log("inside function");
    if (role === "admin") {
      user = { adminEmail: email, adminPassword: password };
      const res = await axios.post(ROOT_URL+"/checkAdmin", user,{mode:'cors'});

      if (res.data.adminEmail=="admin@gmail.com" || res.data.adminPassword=="admin@123") {
        localStorage.setItem("userId", res.data.adminId)
        // alert(localStorage.getItem("userId"));
        swal("success", "Successfully Login Welcome Admin!!", "success");
        window.location.href = "/AdminHome";
      } else {
        swal("error", "Invalid Credintial please enter valid details", "error");
      }
    } else if (role === "user") {
      user = { userEmail: email, userPassword: password };
      const res = await axios.post(ROOT_URL+"/checkUser", user);
      console.log("inside check user role");
      if (res.data.userStatus === "active") {
        localStorage.setItem("userId", res.data.userId)
        // alert(localStorage.getItem("userId"));
        swal("success", "Successfully Login Welcome Customer!!", "success");
        window.location.href = "/UserHome";
      } else {
        swal("error", "Invalid Credintial please enter valid details", "error");
      }
    } else if (role === "freelancer") {
      user = { frlEmail: email, frlPassword: password };
      const res = await axios.post(ROOT_URL+"/CheckFreelancer", user);
      console.log("inside check freelancer role");
      if (res.data.status === "active") {
        localStorage.setItem("userId", res.data.freelancerId)
        //alert(localStorage.getItem("userId"));
        swal("success", "Successfully Login Welcome Freelancer!!", "success");
        window.location.href = "/FreelancerHome";
      } else {
        swal("error", "Invalid Credintial please enter valid details", "error");
      }
    } else {
      setRole("");
    }
  };

  return (
    <>
      <Navbar />
      <div class="main">
        <div>
        {/* <div
          class="container border-dark justify-content-center mt-4 mb-4 "
          style={{ display: "block", padding: "20", border: "2px solid black", backgroundColor: "" }}
        > */}
          <div class="row">
            <div class="col-2 mt-3 "></div>
            <div class="col-8 mt-3">
              <div class="row">
                {/* <div class="col-sm-12 col-md-8 col-lg-6">
                  <img
                    src={handyman}
                    style={{ width: "100%", height: "100%" }}
                  />
                </div> */}
                <div class="d-flex justify-content-center" >
                {/* <div class="col-sm-12 col-md-8 col-lg-6"> */}
                  <form
                    class="Registration-form"
                    onsubmit=" return callvalidation()"
                  >
                    <br />
                    <br />
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="50"
                        height="50"
                        fill="currentColor"
                        class="bi bi-person-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                      </svg>
                    </div>
                    <br />
                    <div class="inside-form mt-3" style={{ color: "black" }}>
                      {/* <center>
                        <h2>Login Here!!</h2>
                      </center> */}
                    </div>
                    <div class="row">
                      <div class="col-sm-4">
                        <input
                          type="radio"
                          class="btn-check"
                          name="options"
                          id="option1"
                          value="admin"
                          onChange={(e) => {
                            setRole(e.target.value);
                          }}
                        />
                        <label class="btn btn-warning" for="option1">
                          Admin
                        </label>
                      </div>
                      <div class="col-sm-4">
                        <input
                          type="radio"
                          class="btn-check"
                          name="options"
                          id="option2"
                          value="user"
                          onChange={(e) => {
                            setRole(e.target.value);
                          }}
                        />
                        <label class="btn btn-warning" for="option2">
                          User
                        </label>
                      </div>
                      <div class="col-sm-4">
                        <input
                          type="radio"
                          class="btn-check"
                          name="options"
                          id="option3"
                          value="freelancer"
                          onChange={(e) => {
                            setRole(e.target.value);
                          }}
                        />
                        <label class="btn btn-warning" for="option3">
                          Freelancer
                        </label>
                      </div>
                    </div>

                    <div class="form-group">
                      <div>
                        <lable
                          id="inputGroup-sizing-lg"
                          style={{ height: 5, position: "left" }}
                        >
                          Email
                        </lable>
                      </div>
                      <input
                        type="email"
                        class="form-control m-2"
                        aria-label="Email"
                        name="adminEmail"
                        id="adminEmail"
                        aria-describedby="inputGroup-sizing-sm"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div class="form-group">
                      <lable for="password" style={{ fontSize: "15px" }}>
                        Password
                      </lable>
                      <input
                        type="password"
                        class="form-control m-2"
                        aria-label="password"
                        name="adminPass"
                        id="adminPass"
                        size="8"
                        aria-describedby="inputGroup-sizing-sm"
                        required
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <div class="form-group">
                      <button
                        class="btn btn-danger m-2"
                        type="button"
                        onClick={(checkUser, handleForm)}
                      >
                        Login
                      </button>
                      {/* <br />
                      <a href="/ForgotPass" class="txt1 m-2" style={{ color: "black" }}>
                        Forgot Password?
                      </a>
                      <br />

                      <label> Don't have account ?</label>
                      <br /> */}
                      <br />
                      <a
                        class="btn btn-outline-primary m-2 "
                        href="FreelancerRegistration"
                        //style={{ color: "White" }}
                      >
                        {" "}
                        Sign-Up as Freelancer
                      </a>
                      <a
                        class="btn btn-outline-primary  m-2 "
                        href="UserReg"
                        //style={{ color: "White" }}
                      >
                        {" "}
                        &nbsp; &nbsp; Sign-Up as User &nbsp;  &nbsp; 
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-2 mt-2"></div>
      </div>


    </>
  );
}

export default Adminlogincomponent;
