import axios from 'axios'

const INSTRUCTOR = 'api/v1/suppliers'
const SUPPLIER_API_URL = 'http://localhost:8080'
const INSTRUCTOR_API_URL = `${SUPPLIER_API_URL}/${INSTRUCTOR}`

class SupplierDataService {

    createSupplier(name, product) {
        //console.log('executed service')
        return axios.post(`${INSTRUCTOR_API_URL}/`, supplier);
    }

    retrieveSupplier(id) {
        return axios.get(`${INSTRUCTOR_API_URL}/${id}`);
    }

    updateSupplier(id, product) {
        //console.log('executed service')
        return axios.put(`${INSTRUCTOR_API_URL}/${id}`, supplier);
    }

    retrieveAllSuppliers() {
        return axios.get(`${INSTRUCTOR_API_URL}`);
    }

    deleteSupplier(id) {
        return axios.delete(`${INSTRUCTOR_API_URL}/${id}`);
    }

}

export default new SupplierDataService()
