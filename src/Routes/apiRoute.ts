import * as express from 'express'
import CourseDbModel from '../DbModels/CourseDbModel'
import CourseRequestDbModel from '../DbModels/CourseRequestDbModel'

const router: express.Router = express.Router()
 
router.get('/courses', async (request, response) => {
  try {
    const courses = await CourseDbModel.find()
    response.send(courses)
    return
  } catch (err) {
    console.log(err)
    response.send('Error finding')
    return
  }
})

router.post('/requestCourse', async (request, response) => {
  const { contactName, email, githubRepo } = request.body

  let responseToClient = {
    status: 'ERR',
    messages: ['Could not save Add Course Request']
  }

  try {
    const createDocuimentResponse = await CourseRequestDbModel.create({ contactName, email, githubRepo })
    if (createDocuimentResponse._id) {
      responseToClient.status = 'OK'
      responseToClient.messages = ['Add Courese Requested']
    } 
  } catch (err) {
    console.log(err)
  }
  response.send(responseToClient)
})

export default router
