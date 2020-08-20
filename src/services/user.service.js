import Api from '../common1/api';
import jwt_decode from 'jwt-decode';

const controller = 'user';

class UserService {

  getUserInStorage(){
    let token = localStorage.getItem("token");
    var user = jwt_decode(token);
    return user;
  }


  getUserByUsername(username) {
    return Api.get(`${controller}/Username/${username}`)
    
  }

}

const user = new UserService();
export default user;