import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function UserNav() {
  const logout = () => {
    localStorage.setItem("role", null);
    window.location.href = "/Adminlogincomponent";
  };
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (


    <>

<nav className="navbar navbar-dark bg-dark">

        <div className="nav-container">
        
         <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li>
          <a class="navbar-brand" href="/UserHome" style={{color:"orange"}}>Freelance Portal</a>
            </li>
            {/* <li className="nav-item">
              <NavLink
                exact
                to="/UserHome"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li> */}
            <li className="nav-item">
              <NavLink
                exact
                to="/UserProfile"
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
                to="/Searchbycities"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
               Search By City
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/SearchByProfession"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
               Search By Profession
              </NavLink>
            </li>
            
            <li className="nav-item">
              <NavLink
                exact
                to="/BookedList"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                View Booking
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/ViewComplaints"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                View Complaint
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
                logout
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
export default UserNav;
