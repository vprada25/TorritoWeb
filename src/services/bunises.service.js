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

  nameBunises() {
    return Api.get(`${controller}/getNameBunisess`).then((res) => res).catch(error => {
      console.log(error)
    })
  }

}

const bunisess = new RegisterBunises();
export default bunisess;