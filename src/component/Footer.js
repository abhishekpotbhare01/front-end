import { Link } from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css';
import "./Footer.css";
export function Footer() {
  const ROOT_URL = "abhishekpotbhare.us-east-1.elasticbeanstalk.com";

  return (



    <footer class=" Footer stick-bottom  text-center text-white " style={{ background: "rgb(30, 30, 30)" }}>

      <div class="container-fluid p-1"  >



        <a class="btn btn-outline-light btn-floating m-2" href="https://www.facebook.com/login.php" type="button"
        ><i class="fa fa-facebook-f"></i
        ></a>

        <a class="btn btn-outline-light btn-floating m-2" href="https://twitter.com/login/" type="button"
        ><i class="fa fa-twitter"></i
        ></a>

        <a class="btn btn-outline-light btn-floating m-2" href="https://myaccount.google.com/" Type="button"
        ><i class="fa fa-google"></i
        ></a>

        <a class="btn btn-outline-light btn-floating m-2" href="https://www.instagram.com/_kussh" type="button"
        ><i class="fa fa-instagram"></i
        ></a>

        <a class="btn btn-outline-light btn-floating m-2" href="https://www.linkedin.com/uas/login" type="button"
        ><i class="fa fa-linkedin"></i
        ></a>


        <a class="btn btn-outline-light btn-floating m-2" href="https://github.com/login" type="button"
        ><i class="fa fa-github"></i
        ></a>


      </div>
      <div>
        <h2>Freelance Portal</h2>
        <p>Empowering millions of service professeionals in just few clicks in a way what has been experienced before !
        </p>
        <p>Contact No: +91 999999999    &ensp; &ensp; &ensp;    Gmail: freelanceportal@gmail.com</p>

      </div>


      <div class="text-center p-1" >
        © 2021 Copyright :
        <a class="text-white" href="localhost:3000"> freelanceportal.com</a>
      </div>
<br />
    </footer>






  );
}
