import axios from 'axios'

const INSTRUCTOR = 'api/v1/suppliers'
const SUPPLIER_API_URL = 'http://localhost:8080'
const INSTRUCTOR_API_URL = `${SUPPLIER_API_URL}/${INSTRUCTOR}`

class SupplierDataService {

    createSupplier(name, supplier) {
        //console.log('executed service')
        return axios.post(`${INSTRUCTOR_API_URL}/`, supplier);
    }

    retrieveSupplier(id) {
        return axios.get(`${INSTRUCTOR_API_URL}/${id}`);
    }

    retrieveAllSuppliers() {    
        return axios.get(`${INSTRUCTOR_API_URL}`);      
    }

    updateSupplier(id, supplier) {
        //console.log('executed service')
        return axios.put(`${INSTRUCTOR_API_URL}/${id}`, supplier);
    }

    deleteSupplier(id) {
        return axios.delete(`${INSTRUCTOR_API_URL}/${id}`);
    }

}

export default new SupplierDataService()
