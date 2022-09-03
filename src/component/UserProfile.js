import React from 'react';
import {useEffect,useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './adminprofile.component.css';
import UserNav from './UserNav';
import axios from 'axios';
function UserProfile(){

    useEffect(()=>{
        userDetails();
        // if(localStorage.getItem("role")==="null" || localStorage.getItem("role")!="Customer" )
        // {
        //   window.location.href="/Adminlogincomponent";
        // }else{
        //     userDetails();
        // }
    },{});

    const userId = localStorage.getItem("userId");
    const [userInfo, setUserInfo] = useState({});
      
    const userDetails = async () => {
            const user = { userId: userId }
            const resp = await axios.post("http://localhost:8081/findByUserId", user);
            setUserInfo(resp.data);
      }

        return(

            <>
            <UserNav/>
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
                         <td><input type="text" class="form-control" name="adminName" value={userInfo.userName}
                                 disabled/></td>
                     </tr>
                     <tr>
                         <td>Email</td>
                         <td><input type="text" class="form-control"  name="adminEmail"  value={userInfo.userEmail}
                                 disabled /></td>
                     </tr>
                  
                     <tr>
                         <td>contact</td>
                         <td><input type="text" class="form-control"  value={userInfo.userContact}
                                 name="adminContact" disabled/></td>
                     </tr>
                     <tr>
                         <td>Address</td>
                         <td><input type="text" class="form-control"  value={userInfo.userAddress}
                                 name="adminContact" disabled/></td>
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
export default UserProfile;
