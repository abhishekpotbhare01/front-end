import axios from "axios";
import { useEffect, useState } from "react";
import SweetAlert from "sweetalert";
import Employeehomepagecomponent from "./Employeehomepagecomponent";

function ViewOrders() {
  const ROOT_URL = "http://abhishekpotbhare.us-east-1.elasticbeanstalk.com";

  const [hirelist, setHirelist] = useState([]);
  const [userId, setUserId] = useState([])
  const [payment, setPayement] = useState([])
  useEffect(() => {
    // if (localStorage.getItem("role") === "null" || localStorage.getItem("role") != "employee") {
    //   window.location.href = "/Adminlogincomponent";
    // }

    setUserId(window.localStorage.getItem("userId"));
    console.log(" in useEffect userId  ", userId)
    getHireList();
  }, [userId]);

  const getHireList = async () => {
    // const bookings = { emp: { empId: localStorage.getItem("userId") } };
    const bookings = { freelancer: { freelancerId: userId } }
    console.log(" in getHireList " + bookings);
    const res = await axios.post(ROOT_URL+":/getBookingsByFreelancer", bookings);
    setHirelist(res.data);
  };

  const acceptBooking = async (bookingId) => {
    const bookings = { bookingId: bookingId, paymentAmount: payment };
    const res = await axios.post(ROOT_URL+":/acceptBooking", bookings);
    SweetAlert("success", res.data, "success");
    window.location.href = "";
  };

  const rejectBooking = async (bookingId) => {
    const bookings = { bookingId: bookingId };
    const res = await axios.post(ROOT_URL+":/rejectRooking", bookings);
    SweetAlert("", res.data, "");
    window.location.href = "";
  };

  const [balance, setBalance] = useState(0);
  const freelancerId = window.localStorage.getItem("userId");

  const freelancer = {
    freelancerId: freelancerId
  }
  useEffect(() => {

    axios.post(ROOT_URL+":/FindByFreelancerId", freelancer).then((res) => {
      setBalance(res.data.totalAmount);
      console.log(" balnce chebckloo ", res.data.totalAmount)
    })
  }, []);


  return (
    <>
      <Employeehomepagecomponent />
      <div class="m-5">

        <div class="row">
          {hirelist.map((item) => {
            if (
              item.bookingStatus === "pending" ||
              item.bookingStatus === "accepted"
            ) {
              return (
                <div class='row'>
                  <div class="card m-auto mb-3 card-text d-flex" style={{ width: "350px", padding: "10px" }}>

                    <th style={{ fontSize: '30px', color: "#000075" }}>{item.user.userName}</th><hr />
                    <th style={{ fontSize: '15px' }}>Address : {item.user.userAddress}</th>

                    <th style={{ fontSize: '15px' }}>Contact : {item.user.userContact}</th>

                    <th style={{ fontSize: '15px' }}>Hire Date : {item.bookingDate}</th>
                    <th style={{ fontSize: '15px' }}>Booking Status : {item.bookingStatus}</th>
                    <th style={{ fontSize: '15px' }}>Payment Status : {item.paymentStatus}</th>
                   
                    <th style={{ fontSize: '18px', color: '#000075' }} >Payment Amount: <div style={{background: '#FCF3CF'}}>  <input autoFocus='true' style={{ fontSize: '18px', fontWeight: 'bold'}} type="number" onChange={(e) => {
                      setPayement(e.target.value);
                    }} placeholder="Enter Amount" ></input> </div> </th>
                    
                    <div class="row card-footer m-1  ">
                      <button
                        type="button"
                        class="btn btn-success btn-sm mb-2" disabled={item.paymentStatus === 'done'}
                        onClick={() => {
                          acceptBooking(item.bookingId);
                        }}
                      >
                        Accept
                      </button>

                      <button
                        type="button"
                        class="btn btn-danger btn-sm" disabled={item.paymentStatus === 'done'}
                        onClick={() => {
                          rejectBooking(item.bookingId);
                        }}
                      >
                        Reject
                      </button>
                    </div>

                  </div>
                  {/* <div class="float-sm-start" style={{  responsive: true, fontWeight: 'bold',fontSize: '25px',color:"#633974" }}>Balance : {balance}</div> */}
                </div>

              );
            }
          })}
        </div>
      </div>
    </>
  );
}

export default ViewOrders;
