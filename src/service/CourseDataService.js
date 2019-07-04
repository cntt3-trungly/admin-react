import axios from 'axios'

const INSTRUCTOR = 'api/v1/products'
const COURSE_API_URL = 'http://localhost:8080'
const INSTRUCTOR_API_URL = `${COURSE_API_URL}/${INSTRUCTOR}`

class CourseDataService {
    

    deleteCourse(id) {
 
        return axios.delete(`${INSTRUCTOR_API_URL}/${id}`);
    }
    retrieveAllCourses(name) {
        return axios.get(`${INSTRUCTOR_API_URL}`);
    }
}

export default new CourseDataService()
