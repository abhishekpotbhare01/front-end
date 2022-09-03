import axios from "axios";
import { useEffect, useState } from "react";
import swal from "sweetalert";
import Adminnavbar3 from "./Adminnavbar3";

function AdminComplain() {
  const [CompList, setCompList] = useState([]);
  useEffect(() => {
    if (localStorage.getItem("role") === "null" || localStorage.getItem("role") != "admin") {
      window.location.href = "/Adminlogincomponent";
    }
    getCompList();
  }, []);

  const getCompList = async () => {
    const res = await axios.get("http://localhost:8081/getAllComplaint");
    setCompList(res.data);
  };

  const resolveComplaint = async (id) => {
    const complaint = { compId: id };
    await axios.post("http://localhost:8081/resolveCompStatus", complaint);
    swal("Complaint Resolved", "success");
    window.location.href = "";
  };

  const rejectComplaint = async (id) => {
    const complaint = { compId: id };
    await axios.post("http://localhost:8081/rejectCompStatus", complaint);
    swal("Complaint Rejected", "success");
    window.location.href = "";
  };

  return (
    <>
      <Adminnavbar3 />


      <div class="m-5">

        <div class="row">

          {CompList.map((item) => {
            if (item.status === "pending") {
              return (
                
                  <div class="card m-auto mb-3 card-text d-flex" style={{ width: "450px", color: 'black' }}>
                    <br />
                    <th style={{fontSize:'18px',fontWeight:'bold'}}>Complainer : {item.user.userName}</th>
                    <th style={{fontSize:'18px',fontWeight:'bold'}}>Against : {item.freelancer.frlName}</th>
                    <th style={{fontSize:'18px'}}>Issue : {item.issue}</th>
                    <th style={{fontSize:'18px'}}>description : {item.discription}</th>
                    <th style={{fontSize:'18px'}}>date : {item.date}</th>
                    <th style={{fontSize:'18px'}}>status : {item.status}</th>


                    <div class="row card-footer m-1  ">
                      <button
                        type="button"
                        class="btn btn-danger mb-2"
                        onClick={() => {
                          resolveComplaint(item.compId);
                        }}
                      >
                        Resolve
                      </button>

                      <button
                        type="button"
                        class="btn btn-danger"
                        onClick={() => {
                          rejectComplaint(item.compId);
                        }}
                      >
                        Reject
                      </button>
                    
                  </div>
                </div>

              );
            }
          })}

        </div>
      </div>
    </>
  );
}

export default AdminComplain;
