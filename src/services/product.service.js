import Api from '../common1/api';

const controller = 'product';

class ProductService{

  getProducts(){
    return Api.get(controller)
  }

  createdProducts(data){
    return Api.post(`${controller}/register`, data)
  }

  createProduct(data){
    return Api.put(controller, data)
  }
}
const product = new ProductService();
export default product;

