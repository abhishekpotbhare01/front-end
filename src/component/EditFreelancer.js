import React, { Component } from 'react'
import axios from 'axios';
import Employeehomepagecomponent from './Employeehomepagecomponent';
export class EditFreelancer extends Component {
    

    constructor(props) {
        super(props);
        this.state = {
            frlName: "",
            frlProfession: "",
            frlAddress: "",
            frlContact: "",
            frlEmail: "",
            frlPassword: "",
            frlCity: "",
            frlExperience: 0,
            frlRatePerHr: 0,
            status: ""

        }
        this.saveUser = this.saveUser.bind(this);
        this.loadUser = this.loadUser.bind(this);
    }
    

    componentDidMount() {
        this.loadUser();
        console.log("Edit form  ", localStorage.getItem("userId"))
    }

    loadUser() {
        const  ROOT_URL = "abhishekpotbhare.us-east-1.elasticbeanstalk.com";

        const freelancerId = localStorage.getItem("userId");


        const freelancer = { freelancerId: freelancerId }
       // alert("freelancerId id ", localStorage.getItem("userId"));
        axios.post(ROOT_URL+":5000/FindByFreelancerId", freelancer)
            .then((res) => {
                let freelancer = res.data;
                console.log(freelancer);
                this.setState({
                    freelancerId: freelancer.freelancerId,
                    frlName: freelancer.frlName,
                    frlProfession: freelancer.frlProfession,
                    frlAddress: freelancer.frlAddress,
                    frlContact: freelancer.frlContact,
                    frlEmail: freelancer.frlEmail,
                    frlPassword: freelancer.frlPassword,
                    frlCity: freelancer.frlCity,
                    frlExperience: freelancer.frlExperience,
                    frlRatePerHr: freelancer.frlRatePerHr,
                    status: freelancer.status


                })
            });
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    saveUser = (e) => {
        e.preventDefault();
        let freelancer = {
            freelancerId: this.state.freelancerId,
            frlName: this.state.frlName,
            frlProfession: this.state.frlProfession,
            frlAddress: this.state.frlAddress,
            frlContact: this.state.frlContact,
            frlEmail: this.state.frlEmail,
            frlPassword: this.state.frlPassword,
            frlCity: this.state.frlCity,
            frlExperience: this.state.frlExperience,
            frlRatePerHr: this.state.frlRatePerHr,
            status: this.state.status





        };
     const   ROOT_URL = "abhishekpotbhare.us-east-1.elasticbeanstalk.com";


        axios.put(ROOT_URL+":5000/editFreelancer/" + this.state.freelancerId, freelancer).then((res) => {

           // alert(res.data);
            window.location.href = "/FreelancerProfile";

        })



    }

    render() {
        return (
            <>
            <Employeehomepagecomponent />
            <div>
                <form>
                    
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
                                        <td><input type="text" class="form-control" name="frlName" value={this.state.frlName}
                                            onChange={this.onChange} /></td>
                                    </tr>

                                    <tr>
                                        <td>Profession</td>
                                        <td><input type="text" class="form-control" name="frlProfession" value={this.state.frlProfession}
                                            onChange={this.onChange} /></td>
                                    </tr>

                                    <tr>
                                        <td>Address</td>
                                        <td><input type="text" class="form-control" name="frlAddress" value={this.state.frlAddress}
                                            onChange={this.onChange} /></td>
                                    </tr>

                                    <tr>
                                        <td>Contact</td>
                                        <td><input type="text" class="form-control" name="frlContact" value={this.state.frlContact}
                                            onChange={this.onChange} /></td>
                                    </tr>

                                    <tr>
                                        <td>Email</td>
                                        <td><input type="text" class="form-control" name="frlEmail" value={this.state.frlEmail}
                                           readOnly="true"  onChange={this.onChange} /></td>
                                    </tr>

                                    <tr>
                                        <td>Password</td>
                                        <td><input type="text" class="form-control" name="frlPassword" value={this.state.frlPassword}
                                            onChange={this.onChange} /></td>
                                    </tr>

                                    <tr>
                                        <td>City</td>
                                        <td><input type="text" class="form-control" name="frlCity" value={this.state.frlCity}
                                            onChange={this.onChange} /></td>
                                    </tr>

                                    <tr>
                                        <td>Experience</td>
                                        <td><input type="text" class="form-control" name="frlExperience" value={this.state.frlExperience}
                                            onChange={this.onChange} /></td>
                                    </tr>

                                    <tr>
                                        <td>RatePerHr</td>
                                        <td><input type="text" class="form-control" name="frlRatePerHr" value={this.state.frlRatePerHr}
                                            onChange={this.onChange} /></td>
                                    </tr>

                                    <tr>
                                        <td>Status</td>
                                        <td><input type="text" class="form-control" name="status" value={this.state.status} readOnly="true"
                                            onChange={this.onChange} /></td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                        
                    </div>
                    <button className="btn btn-primary btn-lg" onClick={this.saveUser}    >Update</button>
                    
                </form>
                <br />
            </div>
            </>
        );
    }
}

export default EditFreelancer
