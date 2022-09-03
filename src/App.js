import './App.css';
import Homepagecomponent from './component/Homepagecomponent';
import Adminlogincomponent from './component/Adminlogincomponent';
import UserReg from './component/UserReg';
import FreelancerRegistration from './component/FreelancerRegistration';
import UserHome from './component/UserHome';
import UserProfile from './component/UserProfile';
import Searchbycities from './component/Searchbycities';
import SearchByProfession from './component/SearchbyProfession';
import FreelancerHome from './component/FreelancerHome';
import FreelancerProfile from './component/FreelancerProfile';
import ViewOrders from './component/ViewOrders';
import BookedList from './component/bookedlist';
import AdminHome from './component/AdminHome';
import FreelancerListComp from './component/FreelancerListComp';
import Adminprofilecomponent from './component/Adminprofilecomponent';
import UserListComponent from './component/UserListComponent';
import ContactUs from './component/ContactUs';
import ViewComplaints from './component/ViewComplaints';
import Complaint from './component/Complaint';
import PaymentPage from './component/PaymentPage';
import { Footer } from "./component/Footer";
import AdminComplain from './component/adminComplain';
import ErrorNotFound from './component/ErrorNotFound ';
import EditFreelancer from './component/EditFreelancer';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AboutUs from './component/AboutUs';


function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Switch>
            <Route exact={true} path="/">
              <Homepagecomponent />
            </Route>
            <Route exact={true} path="/Homepagecomponent">
              <Homepagecomponent />
            </Route>
            <Route exact={true} path="/Adminlogincomponent">
              <Adminlogincomponent />
            </Route>
            <Route exact={true} path="/AdminHome">
              <AdminHome />
            </Route>
            <Route exact={true} path="/UserReg">
              <UserReg />
            </Route>
            <Route exact={true} path="/FreelancerRegistration">
              <FreelancerRegistration />
            </Route>
            <Route exact={true} path="/UserHome">
              <UserHome />
            </Route>
            <Route exact={true} path="/UserProfile">
              <UserProfile />
            </Route>
            <Route exact={true} path="/Searchbycities">
              <Searchbycities />
            </Route>
            <Route exact={true} path="/SearchByProfession">
              <SearchByProfession />
            </Route>
            <Route exact={true} path="/BookedList">
              <BookedList />
            </Route>
            <Route exact={true} path="/FreelancerHome">
              <FreelancerHome />
            </Route>
            <Route exact={true} path="/FreelancerProfile">
              <FreelancerProfile />
            </Route>
            <Route exact={true} path="/ViewOrders">
              <ViewOrders />
            </Route>
            <Route exact={true} path="/AboutUs">
              <AboutUs />
            </Route>
            <Route exact={true} path="/ContactUs">
              <ContactUs />
            </Route>
            <Route exact={true} path="/FreelancerListComp">
              <FreelancerListComp />
            </Route>
            <Route exact={true} path="/Adminprofilecomponent">
              <Adminprofilecomponent />
            </Route>
            <Route exact={true} path="/UserListComponent">
              <UserListComponent />
            </Route>
            <Route exact={true} path="/ViewComplaints">
              <ViewComplaints />
            </Route>
            <Route exact={true} path="/Complaint">
              <Complaint />
            </Route>
            <Route exact={true} path="/AdminComplain">
              <AdminComplain />
            </Route>
            <Route exact={true} path="/PaymentPage">
              <PaymentPage />
            </Route>
            <Route exact={true} path="/EditFreelancer">
              <EditFreelancer />
            </Route>
            <Route path="*">
              <ErrorNotFound />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
