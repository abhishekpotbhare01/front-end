import React from "react";
import { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import Adminnavbar3 from "./Adminnavbar3";
import axios from 'axios';
import four from "./assets/pimage/image123.jpg";

export default function AdminHome() {
  const ROOT_URL = "abhishekpotbhare.us-east-1.elasticbeanstalk.com";

  useEffect(()=>{
    if(localStorage.getItem("role")==="null" || localStorage.getItem("role")!="admin" )
    {
      window.location.href="/Adminlogincomponent";
    }else{
        adminDetails();
    }
},{});

  const adminId = localStorage.getItem("userId");
  const [adminInfo, setAdminInfo] = useState({});

  const adminDetails = async () => {
    const admin = { adminId: adminId }
    const resp = await axios.post(ROOT_URL+":5000/findAdmin", admin);
    setAdminInfo(resp.data);
  }


  return (
    <>
      <Adminnavbar3 />
      {/*<!-----------------------------------Slider---------------------------------->*/}

      <div
        id="carouselExampleSlidesOnly"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src={four}
              class="d-block w-100"
              style={{ height: "650px" }}
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img src="..." class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="..." class="d-block w-100" alt="..." />
          </div>
        </div>
        <br />
        <br />
        {/* <p align="center">
        <tr style={{ fontSize: '20px',align: 'centre',fontWeight:'bold' }}>
          <td>Total Amount Recieved &nbsp; &nbsp;</td>
          <td><input type="text" class="form-control" value={adminInfo.totalAmount}
            name="adminContact" disabled /></td>
        </tr>
        </p> */}
        <br />
      </div>

    </>
  );
}
