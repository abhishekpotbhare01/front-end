import axios from 'axios';
const ROOT_URL = "https://abhishekpotbhare.us-east-1.elasticbeanstalk.com";

const USER_API_BASE_URL = ROOT_URL+':/users';
const USER_API_BASE_URL1=ROOT_URL+':'
class Apiservice {

    

    addUser(user) {
        return axios.post(""+USER_API_BASE_URL+"/addUser", user);
    }

    validateUser(user){
        return axios.post(""+USER_API_BASE_URL+"/userValidate",user);
    }
  getAllCities(){
       return  axios.get(""+USER_API_BASE_URL1+"/GetAllCity");
  }
    getByCity(emp){
       return  axios.post(""+USER_API_BASE_URL1+"/GetByCity", emp);
    }

    GetAllProfessio(){
        return axios.get(""+USER_API_BASE_URL1+"/GetAllProfession");
    }
    GetByProfession(emp){
        return axios.post(""+USER_API_BASE_URL1+"/GetByProfession", emp)
    }

    FreelancerList(){
        return axios.get(""+USER_API_BASE_URL1+"/FreelancerList");
    }
  
}

export default new Apiservice();