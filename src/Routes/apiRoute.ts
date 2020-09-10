import * as express from 'express'
import CourseDbModel from '../DbModels/CourseDbModel'

const router: express.Router = express.Router()
 
router.get('/', (request, response) => {
  response.send({ message: 'Hello Api!' })
})

router.get('/courses', async (request, response) => {
  try {
    const courses = await CourseDbModel.find()
    response.send(courses)
  } catch (err) {
    console.log(err)
    response.send('Error finding')
  }
})

export default router
