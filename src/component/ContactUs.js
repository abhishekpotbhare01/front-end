import 'bootstrap/dist/css/bootstrap.min.css';

import { Carousel } from "react-bootstrap";
import { Navbar } from "./Navbar";
import three from "./assets/images/chef.jpg";
import one from "./assets/images/driver.jpg";
import two from "./assets/images/event.jpg";
import four from "./assets/images/plumber.jpg";
import five from "./assets/images/painting.jpg";
import six from "./assets/images/customer.jpg";
function AboutUs() {
  const ROOT_URL = "https://abhishekpotbhare.us-east-1.elasticbeanstalk.com";


  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      
      
      <div style={{ fontFamily: "Block" }}><h2 >Our Offices<hr /><br /></h2>

<h3>Mississippi<br /><br />
711-2880 Nulla St.
Mankato Mississippi 96522
(257) 563-7401<br /><br />

Mexico<br /><br />
191-103 Integer Rd.
Corona New Mexico 08219
(404) 960-3807</h3></div>
<br />
      <br />
      <br />
      <br />
      <div >
        <br />
        {<div class="container-md">

        
        </div>}
      </div>
    </>
  );
}

export default AboutUs;