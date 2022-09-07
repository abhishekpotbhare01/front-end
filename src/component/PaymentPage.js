import React, { useState, useEffect } from 'react'
import UserNav from './UserNav';
import axios from 'axios';
function PaymentPage() {
    const ROOT_URL = "https://abhishekpotbhare.us-east-1.elasticbeanstalk.com";


    const [payment, SetPayment] = useState(0)
    const [bookingList, setBookinglist] = useState([])

    useEffect(() => {
        <UserNav />

        const bookingId = window.localStorage.getItem("bookingId");
        console.log(" bookingId  ", bookingId)

        paymentHandler();
    }, [])


    const paymentHandler = async () => {
        const booking = { bookingId: window.localStorage.getItem("bookingId") };
        console.log('bookingId',window.localStorage.getItem("bookingId") )
        const res = await axios.post(ROOT_URL+":/GetBookingDetails", booking);
        setBookinglist(res.data);
    };

    const payementDoneHandle = async () => {

        const comm = (0.1 * bookingList.paymentAmount);

        const paymentDetails = {
            user: { userId: bookingList.user.userId },
            freelancer: {
                freelancerId: bookingList.freelancer.freelancerId

            },
            bookings: {
                bookingId: bookingList.bookingId
            }
            ,

            freelancerAmount: bookingList.paymentAmount - comm,
            adminAmount: comm
        }


        axios.post(ROOT_URL+":/savePaymentDetails", paymentDetails).then((res) => {

        })

        window.location.href = "/UserHome";

    }


    return (

        <div>
            <UserNav />
            <br />
            <br />
            <br />
            <h1>Welcome to Payment Page</h1>  <br></br>  <br></br>
            <h3>
                Payemnt Amount : {bookingList.paymentAmount}  <br></br>  <br>
                </br>

                <button onClick={payementDoneHandle} className="btn btn-lg btn-danger"  >Confirm Payment</button>

            </h3>
            <br />
            <br />
            <br />

        </div>
    )
}

export default PaymentPage
