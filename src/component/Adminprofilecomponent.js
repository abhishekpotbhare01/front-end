import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './adminprofile.component.css';
import axios from "axios";
import { useEffect } from 'react';
import Adminnavbar3 from './Adminnavbar3';

function Adminprofilecomponent(){
    const ROOT_URL= "http://freelancerbackend-env.eba-wzxumskd.us-east-1.elasticbeanstalk.com";


    const adminId = localStorage.getItem("userId");
    const [adminInfo, setAdminInfo] = useState({});

    const adminDetails = async () => {
        const admin = { adminId: adminId }
        const resp = await axios.post(ROOT_URL+":8081/findadmin", admin);
        setAdminInfo(resp.data);

    }

    useEffect(() => {
        if (localStorage.getItem("role") === "null" || localStorage.getItem("role") != "admin") {
            window.location.href = "/Adminlogincomponent";
        } else {

            adminDetails();
        }

    },{});

        return(

            <>
            <Adminnavbar3 />
            <div class="container emp-profile mt-4 mb-4">
                <form>
                    <div class="row">
                        <div class="col-md-2"></div>
                        <div class="col-md-2">
                            <div class="profile-img">
                                <img src="https://img.icons8.com/dusk/64/000000/change-user-male.png" />
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="profile-head">
                                <ul class="nav nav-tabs" id="myTab" role="tablist">
                                    <li class="nav-item">
                                        <a class="nav-link active" id="home-tab" data-toggle="tab" role="tab" aria-controls="home"
                                            aria-selected="true">About</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-md-2"></div>
                        </div>
                       
                    </div>
                    <div class="row">
                        <div class="col-md-2"></div>
                        <div class="col-md-8">
                            <table class="table table-light table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col">Details</th>
                                        <th scope="col"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    
                                    <tr>
                                        <td>Name</td>
                                        <td><input type="text" class="form-control" name="adminName" value={adminInfo.adminName}
                                            disabled /></td>
                                    </tr>
                                    <tr>
                                        <td>Email</td>
                                        <td><input type="text" class="form-control" name="adminEmail" value={adminInfo.adminEmail}
                                            disabled /></td>
                                    </tr>
                                  
                                    <tr>
                                        <td>contact</td>
                                        <td><input type="text" class="form-control"
                                            name="adminContact" disabled value={adminInfo.adminContact} /></td>
                                    </tr>
                                   
                                </tbody>
                            </table>
                        </div>
                    </div>
                </form>
            </div>
            <div class="col-md-2"></div>
        </>
    );
    
}
export default Adminprofilecomponent;
