import axios from "axios";
import { useEffect, useState } from "react";
import UserNav from "./UserNav";
import swal from "sweetalert";
import Apiservice from "../service/Apiservice";
function Searchbycities() {
  const [city, setCity] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [freelancerlist, setFreelancerList] = useState([]);
  const ROOT_URL = "http://backend-env.eba-m3qra65j.us-east-1.elasticbeanstalk.com";
  useEffect(() => {
    cities();
  }, []);
 
  const getFreelancerList = async () => {
    console.log("in freelancers list");
    const freelancer = { frlCity: selectedCity };
    const res = await axios.post(ROOT_URL+":/GetByCity", freelancer);
    setFreelancerList(res.data);
    console.log(freelancer)
    console.log(" in getEmpList ", res.data)
  };
  useEffect(() => {
    if (localStorage.getItem("role") === "null" || localStorage.getItem("role") != "user") {
      window.location.href = "/Adminlogincomponent";
    }
    getallFreelancerList();
  }, []);

  const getallFreelancerList = async () => {
    console.log("in list");
    const res = await axios.get(ROOT_URL+":/FreelancerList");

    setFreelancerList(res.data);
  };

  // const cities = async () => {
  //   const City1 = await axios.get("http://localhost:/GetAllCities");
  //   setCity(City1.data.map( (resp1) => {
  //     return resp1.frlCity;
  //   }));
  // };

  const cities = async () => {
    Apiservice.getAllCities().then((resp) => {
      setCity(resp.data.map((resp1) => {
        return resp1.frlCity;
      }))

      console.log(resp.data)
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

    await axios.post(ROOT_URL+":/AddBooking", bookingdetails);
    swal("", "request sent", "success");
  };

  return (
    <>
      <UserNav />
      <br />
      <div class="col-12 ">
        <div class="col-6 mx-auto">
          <select
            class="form-select mx-auto col-7 w-100 mb-2"
            onChange={(e) => {
              setSelectedCity(e.target.value);
            }}
            aria-label="Default select example"
          >
            <option selected>Select City</option>
            {city.map((item) => {
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


            {freelancerlist.map((item) => {
              return (
                <div class="card m-auto mb-3 card-text d-flex" style={{ width: "400px", padding: "10px" }}>
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

export default Searchbycities;
