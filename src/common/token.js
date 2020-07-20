import jwtDecode from 'jwt-decode'

class Token{
  getToken(){
    let token = localStorage.getItem('token');
    if(token)
      return token;
    else
      return null;
  }

  decode(){
    let token = this.getToken();
    if(token)
      return  jwtDecode(token);
    else
      return null;
  }

  isTokenValid() {
    try{
      let token = this.getToken();
      if(token)
        return jwtDecode(token) !== undefined;
      else 
        return false;
    } catch(e){
        return false;
    }
  }

  setToken(token){
    return localStorage.setItem('token', token);
  }
}

const token = new Token();
export default token;