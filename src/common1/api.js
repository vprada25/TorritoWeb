import Axios from 'axios';
import { configApi } from './config';

const axios = Axios.create(configApi);

class Api{
  async post(url, data, header) {
    return await axios.post(url, data, {
      headers: (header) || ''
    });
  }

  async put(url, data, header){ 
    return await axios.put(url, data, {
      headers: (header) || ''
    });
  }

  async get(url, params, header){
    return await axios.get(`${url}/${params || ''}`);
  }

  async delete(url, params, header){
    return await axios.delete(`${url}/${params || ''}`);
  }
}

const api = new Api()
export default api;