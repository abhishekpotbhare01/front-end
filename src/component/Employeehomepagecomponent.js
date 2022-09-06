import React from 'react';
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import { useState ,useEffect} from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";;



function Employeehomepagecomponent() {
  const  ROOT_URL = "http://freelancerbackend-env.eba-wzxumskd.us-east-1.elasticbeanstalk.com";

  const [balance, setBalance] = useState(0);
  const freelancerId = window.localStorage.getItem("userId");

  const freelancer = {
    freelancerId: freelancerId
  }




  useEffect(() => {

    axios.post(ROOT_URL+":8081/FindByFreelancerId", freelancer).then((res) => {
      setBalance(res.data.totalAmount);
      console.log(" balnce chebckloo ", res.data.totalAmount)
    })
  }, []);



  const logout = () => {
    localStorage.setItem("role", null);

    window.location.href = "/Adminlogincomponent";
  };

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (

    <>
      <nav class="navbar navbar-dark bg-dark">

        <div className="nav-container">

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li>
              <a class="navbar-brand" href="FreelancerHome" style={{ color: "orange" }}>Freelance Portal</a>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/FreelancerHome"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/FreelancerProfile"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Profile
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                exact
                to="/viewOrders"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >Booking Request
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

            <li className="nav-links">Total Balance:{balance}
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
export default Employeehomepagecomponent;