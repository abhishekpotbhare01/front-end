import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
export function Navbar() {
  const ROOT_URL = "http://backend-env.eba-m3qra65j.us-east-1.elasticbeanstalk.com";

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (

  < >


<nav class="navbar navbar-dark bg-dark">

        <div className="nav-container ">
        
         <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li>
          <a class="navbar-brand" href="/Homepagecomponent" style={{color:"orange"}}>Freelance Port</a>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Homepagecomponent"
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
                to="/AboutUs"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About Us
              </NavLink>
            </li>
            
            <li className="nav-item">
              <NavLink
                exact
                to="/ContactUs"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contact Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Adminlogincomponent"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Login/Registered
              </NavLink>
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
