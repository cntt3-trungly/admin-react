import axios from 'axios'

const INSTRUCTOR = 'api/v1/suppliers'
const PRODUCT_API_URL = 'http://localhost:8080'
const INSTRUCTOR_API_URL = `${PRODUCT_API_URL}/${INSTRUCTOR}`

class ProductDataService {

    createSupplier(name, product) {
        //console.log('executed service')
        return axios.post(`${INSTRUCTOR_API_URL}/`, product);
    }

    retrieveProduct(id) {
        return axios.get(`${INSTRUCTOR_API_URL}/${id}`);
    }

    updateProduct(id, product) {
        //console.log('executed service')
        return axios.put(`${INSTRUCTOR_API_URL}/${id}`, product);
    }

    retrieveAllProducts() {
        return axios.get(`${INSTRUCTOR_API_URL}`);
    }

    deleteProduct(id) {
        return axios.delete(`${INSTRUCTOR_API_URL}/${id}`);
    }

}

export default new ProductDataService()