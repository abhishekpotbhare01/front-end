import axios from "axios";
import { useEffect, useState } from "react";
import UserNav from "./UserNav";
import swal from "sweetalert";
import Apiservice from "../service/Apiservice";
function SearchByProfession() {
  const [prof, setProf] = useState([]);
  const [selectedProfession, setSelectedProfession] = useState("");
  const [freelancerList, setFreelancerList] = useState([]);

  useEffect(() => {
    allProf();
  }, []);

  const getFreelancerList = async () => {
    console.log("in list");
    const freelancer = { frlProfession: selectedProfession };
    const res = await axios.post("http://localhost:8081/GetByProfession", freelancer);
    setFreelancerList(res.data);
  };
  useEffect(() => {
    if(localStorage.getItem("role")==="null" || localStorage.getItem("role")!="user" )
{
  window.location.href="/Adminlogincomponent";
}
    getAllFreelancerList();
  }, []);

  const getAllFreelancerList = async () => {
    console.log("in Freelancer list");
    const res = await axios.get("http://localhost:8081/FreelancerList");

    setFreelancerList(res.data);
  };

  // const allProf = async () => {
  //   const profs = await axios.get("http://localhost:8081/GetAllProfession");
  //   console.log("in Get all profession list");
  //   setProf(profs.data);
  // };

  const allProf = async () => {
    Apiservice.GetAllProfessio().then((res)=>{
      setProf(res.data.map((res1)=>{
         return res1.frlProfession;
      }));
      console.log("in  setProf   ",res.data)
    })
    
  };

  var today = new Date();
  var date =
    today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear();

  const bookFreelancer = async (id) => {
    const bookingdetails = {
      user: { userId: localStorage.getItem("userId") },
      freelancer: { freelancerId: id },
      bookingDate: date,
      bookingStatus: "pending",
    };

    await axios.post("http://localhost:8081/AddBooking", bookingdetails);
    swal("","request sent","success");
  };


  return (
    <>
      <UserNav/>
      <br />
    <div class="col-12 ">
      <div class="col-6 mx-auto">
        <select
          class="form-select mx-auto col-7 w-100 mb-2"
          onChange={(e) => {
            setSelectedProfession(e.target.value);
          }}
          aria-label="Default select example"
        >
          <option selected>Select Profession</option>
          {prof.map((item) => {
            return <option value={item}>{item}</option>;
          })}
        </select>
        <input
          type="button"
          onClick={() => {
            getFreelancerList();
          }}
          class=" col-4 mb-3 btn mx-auto btn-sm btn-warning"
          value="search"
        ></input>
      </div>

<div class="m-3">
<div class="row">
            
          {freelancerList.map((item) => {
            return (
              <div class="card m-auto mb-3 card-text d-flex" style={{ width: "400px",padding: "10px"}}>
                  {/* <div class=" card text-dark " style={{ color: 'black' }}> */}
                    <th style={{ fontSize: '25px', color: '#000075' }}> {item.frlName}</th><hr />
                    <th style={{ fontSize: '22px' }}>Profession : {item.frlProfession}</th>
                    <th style={{ fontSize: '15px' }}>City : {item.frlCity}</th>
                    <th style={{ fontSize: '15px' }}>Contact : {item.frlContact}</th>

                    <th style={{ fontSize: '15px' }}>Exp(Yrs) : {item.frlExperience}</th>
                    <th style={{ fontSize: '15px' }}>Rate/hr : {item.frlRatePerHr}</th>
                    <th style={{ fontSize: '15px' }}>Email : {item.frlEmail}</th>
                    <th>&nbsp;</th>
                    <th style={{ fontSize: '15px', fontWeight: 'bold' }}>Status : {item.status}</th>
                    <div class="row card-footer m-1  ">
                      <button
                        class="btn btn-success"
                        onClick={() => {
                          bookFreelancer(item.freelancerId);
                        }}
                      >
                        Book
                      </button>
                    {/* </div> */}
                  </div>
                </div>
            );
          })}
        </div>
    </div>
    </div>
    </>
  );
}

export default SearchByProfession;
