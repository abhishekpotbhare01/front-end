import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./employee-list.component.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Adminnavbar3 from "./Adminnavbar3";

function FreelancerListComp() {
  const [freelancerList, setFreelancerList] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("role") === "null" || localStorage.getItem("role") != "admin") {
      window.location.href = "/Adminlogincomponent";
    }
    getFreelancerList();
  }, []);

  const getFreelancerList = async () => {
    console.log("in list");
    const res = await axios.get("http://localhost:8081/FreelancerList");
    setFreelancerList(res.data);
  };

  const updateStatus = async (freelancerId) => {
    const freelancer = { freelancerId: freelancerId };
    const res = await axios.post("http://localhost:8081/updateFreelancerStatus", freelancer);
    window.location.href = "/FreelancerListComp";
  };

  return (
    <>
      <Adminnavbar3 />

      {/* <div class="m-5"> */}
      <br />
      <br />
      <br />
      <div class="row">

        {freelancerList.map((item) => {
          return (
            <div class="card m-auto mb-3 card-text d-flex" style={{ width: "400px", padding: "10px" }}>

              <th style={{ fontSize: '25px', color: '#000075' }}> {item.frlName}</th><hr />
              <th style={{ fontSize: '22px' }}>Profession :{item.frlProfession}</th>
              <th style={{ fontSize: '15px' }}>City :{item.frlCity}</th>
              <th style={{ fontSize: '15px' }}>Contact :{item.frlContact}</th>

              <th style={{ fontSize: '15px' }}>Exp(Yrs) : {item.frlExperience}</th>
              <th style={{ fontSize: '15px' }}>Rate/hr :{item.frlRatePerHr}</th>
              <th style={{ fontSize: '15px' }}>Email : {item.frlEmail}</th>

              <th style={{ fontSize: '15px' }}>Status : {item.status}</th>
              <center class="card-footer">
                <button
                  class=" btn btn-primary"
                  onClick={() => {
                    updateStatus(item.freelancerId);
                  }}
                >
                  Block
                </button>
              </center>

            </div>
          );
        })}
      </div>
      {/* </div> */}


    </>

  );
}

export default FreelancerListComp;
