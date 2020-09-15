import AddCourseRequestInterface from '../Interfaces/AddCourseRequestInterface'
import axios from 'axios'

class RequestCourseController {
  async handleAddCourseRequest (props: AddCourseRequestInterface) {
      const addCourseRequestResponse = await axios.post('/api/requestCourse', props)

      if (!props.contactName || !props.email || !props.githubRepo) return { status: 'ERR', messages: ['Not all required data was provided.'] }
      
      return addCourseRequestResponse.data 
    }
  }

  export default RequestCourseController