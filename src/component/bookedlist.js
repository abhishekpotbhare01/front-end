import axios from "axios";
import { useEffect, useState } from "react";
import SweetAlert from "sweetalert";
import UserNav from "./UserNav";
import swal from "sweetalert";

function BookedList() {
  const ROOT_URL = "http//abhishekpotbhare.us-east-1.elasticbeanstalk.com";

  const [bookinglist, setBookinglist] = useState([]);

  useEffect(() => {

    if (localStorage.getItem("role") === "null" || localStorage.getItem("role") != "user") {
      window.location.href = "/Adminlogincomponent";
    }
    getBookingList();
  }, []);

  const getBookingList = async () => {
    const booking = { user { userId localStorage.getItem("userId") } };
    const res = await axios.post(ROOT_URL+"/GetBookingByUser", booking);
    setBookinglist(res.data);
  };

  const postComp = (freelancerId) => {
    localStorage.setItem("freelancerId", freelancerId);
    window.location.href = "/Complaint"
  }

  const payment = (bookingId) => {
    window.localStorage.setItem("bookingId", bookingId);
    window.location.href = "/PaymentPage"
  }

  const CancelBooking = async (bookingId) => {
    const booking = { bookingId bookingId };
    console.log(bookingId);
    const res = await axios.post(ROOT_URL+"/CancelBooking", booking);
    //SweetAlert("", res.data, "");
    swal({
      title "Are you sure?",
      text "You want to cancel this booking!",
      icon "warning",
      buttons true,
      dangerMode true,
    })
      .then((willDelete) => {
        if (willDelete) {
          swal("Booking Cancelled", {
            icon "success",
          });
        } else {
          swal("Your Booking is not cancelled!");
        }
      });
    //window.location.href = "";
  };

  return (
    <>
      <UserNav />
      <div class="row">
        <div class="m-4">&nbsp;</div>
        {bookinglist.map((item) => {
          return (
            <div class="card m-auto mb-3 card-text d-flex" style={{ width "400px", padding "10px" }}>
              <th style={{ fontSize '25px', color '#000075' }}>{item.freelancer.frlName}</th><hr />
              <th style={{ fontSize '20px' }}>Profession  {item.freelancer.frlProfession}</th>
              <th style={{ fontSize '15px' }}>Address  {item.freelancer.frlAddress}</th>
              <th style={{ fontSize '15px' }}>City  {item.freelancer.frlCity}</th>
              <th style={{ fontSize '15px' }}>Contact  {item.freelancer.frlContact}</th>

              <th style={{ fontSize '15px' }}>Rate/hr  {item.freelancer.frlRatePerHr}</th>
              <th style={{ fontSize '15px' }}>Date  {item.bookingDate}</th>
              <br />
              <th style={{ fontSize '15px' }}>Status  {item.bookingStatus}</th>

              <div class="row card-footer m-1 ">
                <button
                disabled={item.bookingStatus === 'accepted' || item.bookingStatus === 'Cancelled'}
                  type="button"
                  class="btn btn-danger btn-sm m-1"
                  onClick={() => {
                    CancelBooking(item.bookingId);
                  }}
                >
                  Cancel
                </button>

                <button disabled={item.bookingStatus === 'pending'} type="button" class="btn btn-danger btn-sm m-1" onClick={() => { postComp(item.freelancer.freelancerId) }}>
                  Post Complaint
                </button>

                <button disabled={item.bookingStatus === 'pending' || item.paymentStatus === 'done' || item.bookingStatus === 'Cancelled'}
                type="button" class="btn btn-primary btn-sm m-1" onClick={() => { payment(item.bookingId) }}>
                  Payment
                </button>
              </div>
            </div>

          );

        })}
      </div>
    </>

  );
}

export default BookedList;
