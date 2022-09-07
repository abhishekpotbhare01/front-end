import axios from "axios";
import { useEffect, useState } from "react";
import UserNav from "./UserNav";

function ViewComplaints() {
  const ROOT_URL = "http://abhishekpotbhare.us-east-1.elasticbeanstalk.com";

  const [CompList, setCompList] = useState([]);
  useEffect(() => {
    getCompList();
  }, []);

  const getCompList = async () => {
    const comp = { user: { userId: localStorage.getItem("userId") } };
    const res = await axios.post(ROOT_URL+":/getCompByUser", comp);
    setCompList(res.data);
  };
  return (
    <>
      <UserNav />
      <div class="m-5">

        <div class="row">

          {CompList.map((item) => {
            return (
              <div class="card m-auto mb-2 card-text d-flex" style={{ color: 'black',width: "400px"}}>
                <br />
                {/* <div class=" card text-dark" style={{ color: 'black',width: "400px"}}> */}
                  <th style={{fontSize:'20px',fontWeight:'bold',color:'red'}}>Complaint Against : {item.freelancer.frlName}</th>
                  <hr />
                  <th style={{fontSize:'18px'}}>Issue : {item.issue}</th>
                  <th style={{fontSize:'18px'}}>description : {item.discription}</th>
                  <th style={{fontSize:'18px'}}>date : {item.date}</th>
                  <th style={{fontSize:'18px'}}>status : {item.status}</th>
                  <br />
                {/* </div> */}
              </div>
            );
          })}

        </div>
      </div>
    </>
  );
}

export default ViewComplaints;
