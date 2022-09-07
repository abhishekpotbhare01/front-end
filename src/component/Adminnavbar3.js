import React from "react";
import { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import axios from 'axios';
//import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function Adminnavbar3() {
  const ROOT_URL = "https://abhishekpotbhare.us-east-1.elasticbeanstalk.com";

  useEffect(() => {
    if (localStorage.getItem("role") === "null" || localStorage.getItem("role") != "admin") {
      window.location.href = "/Adminlogincomponent";
    } else {
      adminDetails();
    }
  }, {});
  const logout = () => {
    localStorage.setItem("role", null);
    window.location.href = "/Adminlogincomponent";
  };

  const adminId = localStorage.getItem("userId");
  const [adminInfo, setAdminInfo] = useState({});

  const adminDetails = async () => {
    const admin = { adminId: adminId }
    const resp = await axios.post(ROOT_URL+"/findAdmin", admin);
    setAdminInfo(resp.data);
  }

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (

    <>
      <nav class="navbar navbar-dark bg-dark">

        <div className="nav-container">

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li>
              <a class="navbar-brand" href="AdminHome" style={{ color: "orange" }}>Freelance Portal</a>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/AdminHome"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink
                exact
                to="/Adminprofilecomponent"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Profile
              </NavLink>
            </li> */}

            <li className="nav-item">
              <NavLink
                exact
                to="/FreelancerListComp"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >View Freelancers
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/UserListComponent"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >View Users
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/AdminComplain"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >View Complaint
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Adminlogincomponent"
                activeClassName="active"
                className="nav-links"
                onClick={logout}
              >
                Logout
              </NavLink>
            </li>
            <li className="nav-links">Total Balance:{adminInfo.totalAmount}
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Adminnavbar3;
