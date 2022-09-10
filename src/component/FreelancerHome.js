import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import four from "./assets/pimage/image123.jpg";
import one from "./assets/pimage/Color.jpg";
import two from "./assets/pimage/Photographer.jpg";
import three from "./assets/pimage/Writer.jpg";
import Employeehomepagecomponent from "./Employeehomepagecomponent";
import { Carousel } from 'react-bootstrap';
import { useEffect } from "react";
export default function FreelancerHome() {
  const ROOT_URL = "http://backend-env.eba-m3qra65j.us-east-1.elasticbeanstalk.com";

  useEffect(() => {

    if (localStorage.getItem("role") === "null" || localStorage.getItem("role") !== "freelancer") {
      window.location.href = "/Adminlogincomponent";
    }
  });
  return (
    <>
      <Employeehomepagecomponent />
      {/*<!-----------------------------------Slider---------------------------------->*/}

      <div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={four} class="d-block" 
            alt="Responsive image" style={{ width: "1500px" , height: "600px" }} />
          </div>
          <div class="carousel-item">
            <img src={two} class="d-block w-100"  alt="Responsive image" style={{ width: "1500px" , height: "600px" }} />
          </div>
          <div class="carousel-item">
            <img src={three} class="d-block w-100"  alt="Responsive image" style={{ width: "1500px" , height: "600px" }} />
          </div>
          <div class="carousel-item">
            <img src={one} class="d-block w-100"  alt="Responsive image" style={{ width: "1500px" , height: "600px" }} />
          </div>
        </div>
        
        <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>

    </>
  );
}



