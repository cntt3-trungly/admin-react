import axios from 'axios'

const INSTRUCTOR = 'api/v1/products'
const PRODUCT_API_URL = 'http://localhost:8080'
const INSTRUCTOR_API_URL = `${PRODUCT_API_URL}/${INSTRUCTOR}`

class ProductDataService {

    createProduct(name, product) {
        //console.log('executed service')
        return axios.post(`${INSTRUCTOR_API_URL}/`, product);
    }

    retrieveProduct(id) {
        return axios.get(`${INSTRUCTOR_API_URL}/${id}`);
    }


    retrieveAllProducts() {
        return axios.get(`${INSTRUCTOR_API_URL}`);
    }

    updateProduct(id, product) {
        //console.log('executed service')
        return axios.put(`${INSTRUCTOR_API_URL}/${id}`, product);
    }

    deleteProduct(id) {
        return axios.delete(`${INSTRUCTOR_API_URL}/${id}`);
    }

}

export default new ProductDataService()
