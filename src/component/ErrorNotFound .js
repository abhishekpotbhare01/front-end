import React, { Component } from 'react';
import errorPage from "./assets/pimage/404.png";

export default class ErrorNotFound extends Component {
    

    render() {
        const  ROOT_URL = "abhishekpotbhare.us-east-1.elasticbeanstalk.com";

        return (
            <div>
            <div id='error'>
                <img src={errorPage} />
        
               
            </div>
            <button className="btn btn btb-lg "   style={{fontSize:'30px',fontWeight:'bold'}}  >  <a href="/Homepagecomponent" >  Back to Home Page</a> </button>
            <br />
            <br />
            </div>
        );
    }
}