import axios from 'axios'

const INSTRUCTOR = 'api/v1/categories'
const CATEGORY_API_URL = 'http://localhost:8080'
const INSTRUCTOR_API_URL = `${CATEGORY_API_URL}/${INSTRUCTOR}`

class CategoryDataService {

    createCategory(name, category) {
        //console.log('executed service')
        return axios.post(`${INSTRUCTOR_API_URL}/`, category);
    }

    retrieveCategory(id) {
        return axios.get(`${INSTRUCTOR_API_URL}/${id}`);
    }


    retrieveAllCategorys() {
        return axios.get(`${INSTRUCTOR_API_URL}`);
    }

    updateCategory(id, product) {
        //console.log('executed service')
        return axios.put(`${INSTRUCTOR_API_URL}/${id}`, category);
    }

    deleteCategory(id) {
        return axios.delete(`${INSTRUCTOR_API_URL}/${id}`);
    }

}

export default new CategoryDataService()
