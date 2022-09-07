import React, { useState } from 'react';
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './adminprofile.component.css';
import axios from 'axios';
import Employeehomepagecomponent from './Employeehomepagecomponent';
function FreelancerProfile() {
    const ROOT_URL = "abhishekpotbhare.us-east-1.elasticbeanstalk.com";

    useEffect(() => {
        freelancerDetails();
        //     if(localStorage.getItem("role")==="null" || localStorage.getItem("role")!="freelancer" )
        // {
        //   window.location.href="/Adminlogincomponent";
        // }else{   
        // }
    }, {});

    const freelancerId = localStorage.getItem("userId");
    const [frlInfo, setFrlInfo] = useState({});

    const freelancerDetails = async () => {
        const freelancer = { freelancerId: freelancerId }
        const resp = await axios.post(ROOT_URL+":5000/FindByFreelancerId", freelancer);
        setFrlInfo(resp.data);

    }
    return (

        <>
            <Employeehomepagecomponent />
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

                                    <li>
                                        <a
                                            class="btn btn-outline-primary m-2 "
                                            href="/EditFreelancer"
                                        //style={{ color: "White" }}
                                        >
                                            {" "}
                                            Edit Freelancer
                                        </a>
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
                                        <td><input type="text" class="form-control" name="adminName" value={frlInfo.frlName}
                                            disabled /></td>
                                    </tr>
                                    <tr>
                                        <td>Email</td>
                                        <td><input type="text" class="form-control" name="adminEmail" value={frlInfo.frlEmail}
                                            disabled /></td>
                                    </tr>
                                    <tr>
                                        <td>contact</td>
                                        <td><input type="text" class="form-control" value={frlInfo.frlContact}
                                            name="adminContact" disabled /></td>
                                    </tr>
                                    <tr>
                                        <td>Address</td>
                                        <td><input type="text" class="form-control" name="adminName" value={frlInfo.frlAddress}
                                            disabled /></td>
                                    </tr>
                                    <tr>
                                        <td>Profession</td>
                                        <td><input type="text" class="form-control" name="adminName" value={frlInfo.frlProfession}
                                            disabled /></td>
                                    </tr>
                                    <tr>
                                        <td>Experience</td>
                                        <td><input type="text" class="form-control" name="adminName" value={frlInfo.frlExperience}
                                            disabled /></td>
                                    </tr>
                                    <tr>
                                        <td>Rate/Hr</td>
                                        <td><input type="text" class="form-control" name="adminName" value={frlInfo.frlRatePerHr}
                                            disabled /></td>
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
export default FreelancerProfile;
