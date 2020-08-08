import Api from '../common1/api';

const controller = 'bunisess';

class RegisterBunises {


  registerbunisess(data) {
    return Api.post(`${controller}/register`, data)
  }

  fkIdPersona() {
    console.log(this.fkipersona)
    return Api.get(`${controller}/getFkPerson`)
    
  }

  FkPersona() {
    return {
      fkipersona: []
    }
  }
}

const bunisess = new RegisterBunises();
export default bunisess;