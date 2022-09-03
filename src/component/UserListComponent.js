import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./customer-list.component.css";
import axios from "axios";
import Adminnavbar3 from "./Adminnavbar3";

function UserListComponent() {
  const [UserList, setUserList] = useState([]);
  useEffect(() => {
    if (localStorage.getItem("role") === "null" || localStorage.getItem("role") != "admin") {
      window.location.href = "/Adminlogincomponent";
    }
    getUserList();
  }, []);

  const getUserList = async () => {
    console.log("in list");
    const res = await axios.get("http://localhost:8081/UserList");
    setUserList(res.data);
  };

  const updateStatus = async (userId) => {
    const user = { userId: userId };
    const res = await axios.post(
      "http://localhost:8081/updateUserStatus",
      user
    );
    window.location.href = "/Userlistcomponent";
  };
  return (
    <>
      <Adminnavbar3 />

      <br />
      <br />
      <div class="m-5">

        <div class="row">


          {UserList.map((item) => {
            return (
              <div class="card m-auto mb-3 card-text d-flex" style={{ width: "400px", padding: "10px" }}>

                <th style={{ fontSize: '30px', color: "#000075" }}>{item.userName}</th><hr />
                <th style={{ fontSize: '18px', fontWeight: 'bold' }}>Email : {item.userEmail}</th>
                <th style={{ fontSize: '18px', fontWeight: 'bold' }}>Address : {item.userAddress}</th>
                <th style={{ fontSize: '18px', fontWeight: 'bold' }}>Contact :{item.userContact}</th>

                <th style={{ fontSize: '18px', fontWeight: 'bold' }}>Status : {item.userStatus}</th>

                <center class="card-footer">
                  <button
                    class="btn btn-primary"
                    onClick={() => {
                      updateStatus(item.userId);
                    }}
                  >
                    Block
                  </button>
                </center>

              </div>
            );
          })}

        </div>
      </div>
    </>
  );
}

export default UserListComponent;
