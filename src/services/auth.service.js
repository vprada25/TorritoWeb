import Api from '../common1/api';

const controller = 'auth';
const userController = 'user';
class AuthService {
  signUp(data) {
    return Api.post(`${controller + '/signup'}`, data)
  }

  signIn(data) {
    return Api.post(`${controller + '/signin'}`, data)
    
  }

  async getMenu() {
    return await Api.get(userController)
  }
 

}

const auth = new AuthService();
export default auth;