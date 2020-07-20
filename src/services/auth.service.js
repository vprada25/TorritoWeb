import Api from '../common/api';

const controller = 'auth';

class AuthService{
  signUp(data){
    return Api.post(`${controller+'/signup'}`, data)
  }

  signIn(data){
    return Api.post(`${controller+'/signin'}`, data)
  }
}

const auth = new AuthService();
export default auth;