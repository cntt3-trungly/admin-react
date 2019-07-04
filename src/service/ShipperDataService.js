import axios from 'axios'

const INSTRUCTOR = 'api/v1/shippers'
const SHIPPER_API_URL = 'http://localhost:8080'
const INSTRUCTOR_API_URL = `${SHIPPER_API_URL}/${INSTRUCTOR}`

class ShipperDataService {

    createShipper(name, shipper) {
        //console.log('executed service')
        return axios.post(`${INSTRUCTOR_API_URL}/`, shipper);
    }

    retrieveShipper(id) {
        return axios.get(`${INSTRUCTOR_API_URL}/${id}`);
    }


    retrieveAllShippers() {
        return axios.get(`${INSTRUCTOR_API_URL}`);
    }

    updateShipper(id, product) {
        //console.log('executed service')
        return axios.put(`${INSTRUCTOR_API_URL}/${id}`, shipper);
    }

    deleteShipper(id) {
        return axios.delete(`${INSTRUCTOR_API_URL}/${id}`);
    }

}

export default new ShipperDataService()
