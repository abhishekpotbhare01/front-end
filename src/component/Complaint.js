import axios from "axios";
import { useState,useEffect } from "react";
import SweetAlert from "sweetalert";
import UserNav from "./UserNav";

function Complaint() {
  const [issue, setEssue] = useState("");
  const [description, setDescription] = useState("");

  useEffect(()=>{

    if(localStorage.getItem("role")==="null" || localStorage.getItem("role")!="user" )
    {
      window.location.href="/Adminlogincomponent";
    }
      });

  const addComplaint = async () => {
    const complaint = {
      complainer: "user",
      issue: issue,
      discription: description,
      user: { userId: localStorage.getItem("userId") },
      freelancer: { freelancerId: localStorage.getItem("freelancerId") },
    };

    await axios.post("http://localhost:8081/addComplaint", complaint);
    SweetAlert("", "Your complaint is posted", "success");
  };

  const validation = () => {
    if (issue === "") {
      SweetAlert("error", "please enter issue", "error");
    } else if (description === "") {
      SweetAlert("error", "please enter issue", "error");
    } else {
      addComplaint();
    }
  };


  return (
    < >
      <UserNav/>
     
      <div class="container justify-content-center align-items-center d-flex mt-5 mb-5" style={{border:"2px solid black",width:"700px"}}>
        
      <form style={{width:"90%"}}>
        <div class="form-group ">
          <label for="exampleFormControlInput1" style={{fontWeight:"bold",fontSize:'20px'}}>Enter your Issue</label>
          <input
            type="text"
            class="form-control justify-content-center"
            id="exampleFormControlInput1"
            placeholder="Enter issue here"
            onChange={(e) => {
              setEssue(e.target.value);
            }}
          />
         
        </div>

        <div class="form-group justify-content-center">
          <label for="exampleFormControlTextarea1" style={{fontWeight:"bold",fontSize:'20px'}}>Description</label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          ></textarea>
        </div>

        <button type="button" class="btn btn-primary" style={{fontWeight:"bold",fontSize:'20px'}} onClick={validation}>
          Post
        </button>
      </form>
      </div>
     
      </>
     
  );
}
export default Complaint;
