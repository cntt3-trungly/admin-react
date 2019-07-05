import axios from 'axios'

const INSTRUCTOR = 'api/v1/users'
const USER_API_URL = 'http://localhost:8080'
const INSTRUCTOR_API_URL = `${USER_API_URL}/${INSTRUCTOR}`

class UserDataService {


    retrieveUser(id) {
        return axios.get(`${INSTRUCTOR_API_URL}/${id}`);
    }

    retrieveAllUsers() {    
        return axios.get(`${INSTRUCTOR_API_URL}`);      
    }

    deleteUser(id) {
        return axios.delete(`${INSTRUCTOR_API_URL}/${id}`);
    }

}

export default new UserDataService()
