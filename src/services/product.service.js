import Api from '../common/api';

const controller = 'products';

class ProductService{

  getProducts(){
    return Api.get(controller)
  }

  createProduct(data){
    return Api.post(controller, data)
  }

  createProduct(data){
    return Api.put(controller, data)
  }
}
const product = new ProductService();
export default product;

