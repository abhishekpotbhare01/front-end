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

    return (
        <>
            <Navbar />
            <div class="d-flex justify-content-center">
                {<div>

                   
                    <div class="d-flex justify-content-center">

                        <div className="" style={{ fontFamily "Block" }}>
                            <br></br>

                            <br />

                            <h2>Who we are?</h2>
                            <p>
                                Freelance Portal is India's new online home servies platform.<br />
                                Our platform helps Users book reliable and high quality service -handymen,<br />
                                Freelancers, contractors and more-delivered by trained professionals<br /> conveniently within few clicks.<br /><br /><br />
                            </p>

                            <h2>Our Mission</h2>
                            <p>
                                Our mission provides a platform that allows skilled and experienced professionals to<br />
                                connect with users looking for specific services. All the professionals, though <br />experienced and skilled,
                                undergo intensive training modules before being allowed to list their services on<br /> the platform. Once on the platform,
                                our match-making algorithm identifies professionals <br />who are closest to the users requirements and available at the
                                requested time and date.
                            </p>
                            <br />
                            <br />

                        </div>


                        <br />
                    </div>
                </div>}
                <br>
                </br>
                <br>
                </br>

            </div>
        </>
    );
}

export default AboutUs;