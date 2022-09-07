import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./homepage.component.css";
import main from "./assets/main.jpg";
import one from "./assets/Coder.jpg";
import two from "./assets/GD.jpg";
import three from "./assets/EC.jpg";
import four from "./assets/PG.jpg";
import five from "./assets/PT.jpg";
import six from "./assets/DM.jpg";

import { Navbar } from "./Navbar";

function Homepagecomponent() {
  const ROOT_URL = "https://abhishekpotbhare.us-east-1.elasticbeanstalk.com";

  return (
    <>

      <Navbar />
      <div class="main"  style={{bgcolor:"orange"}}>
        {/**  <!-----------------------------------Slider---------------------------------->*/}
        <div
          id="carouselExampleSlidesOnly"
          class="carousel slide mx-2 mt-0"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner m-0 p-0">
            <div class="carousel-item active">
              <img
                src={main}
                class="d-block w-100 rounded"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img src={main} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src="..." class="d-block w-100" alt="..." />
            </div>
          </div>
        </div>

        {/** <!------------------------------Cards--------------------------------> */}



        <section class="bannerbottom py-lg-5 py-md-4 py-md-3 py-2">
          <div class="bannerbottom py-lg-5 py-md-4 py-md-3 py-2">
            <div class="container">
              <div class="row">
                <div class="col-md-4 col-sm-12 w3_ban1">
                  <div class="card">
                    <img  src={four} class="card-img-top" alt="Card image cap" />
                    <div class ="card-body">
                    <h5 class ="card-title">PHOTORAPHER</h5>
                    <p class ="card-text">Some quick example text to build on the Fast Service and make up the bulk of the
                    card's content.</p>
                    <a href="#" class ="btn btn-primary">Explore</a>
                    </div>
                  </div>
                </div>
                <div class="col-md-4 col-sm-12 w3_ban1">
                  <div class="card">
                    <img class="card-img-top" src={five} alt="Card image cap" />
                    <div class ="card-body">
                    <h5 class ="card-title">PAINTER</h5>
                    <p class ="card-text">Some quick example text to build on the Fast Service and make up the bulk of the
                    card's content.</p>
                    <a href="#" class ="btn btn-primary">Explore</a>
                    </div>
                  </div>
                </div>
                <div class="col-md-4 col-sm-12 w3_ban1">
                  <div class="card">
                    <img class="card-img-top" src={three} alt="Card image cap" />
                    <div class ="card-body">
                    <h5 class ="card-title">ELECTRICIAN</h5>
                    <p class ="card-text">Some quick example text to build on the Fast Service and make up the bulk of the
                    card's content.</p>
                    <a href="#" class ="btn btn-primary">Explore</a>
                    </div>
                  </div>
                </div>
                <div class="col-md-4 col-sm-12 w3_ban">
                  <div class="card">
                    <img class="card-img-top" src={six} alt="Card image cap" />
                    <div class ="card-body">
                    <h5 class ="card-title">SEO EXPERT</h5>
                    <p class ="card-text">Some quick example text to build on the Fast Service and make up the bulk of the
                    card's content.</p>
                    <a href="#" class ="btn btn-primary">Explore</a>
                    </div>
                  </div>
                </div>
                <div class="col-md-4 col-sm-12 w3_ban">
                  <div class="card">
                    <img class="card-img-top" src={two} alt="Card image cap" />
                    <div class ="card-body">
                    <h5 class ="card-title">GRAPHICS DESIGNER</h5>
                    <p class ="card-text">Some quick example text to build on the Fast Service and make up the bulk of the
                    card's content.</p>
                    <a href="#" class ="btn btn-primary">Explore</a>
                    </div>
                  </div>
                </div>
                <div class="col-md-4 col-sm-12 w3_ban">
                  <div class="card">
                    <img class="card-img-top" src={one} alt="Card image cap" />
                    <div class ="card-body">
                    <h5 class ="card-title">CODER</h5>
                    <p class ="card-text">Some quick example text to build on the Fast Service and make up the bulk of the
                    card's content.</p>
                    <a href="#" class ="btn btn-primary">Explore</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


      </div>
    </>
  );
}
export default Homepagecomponent;
