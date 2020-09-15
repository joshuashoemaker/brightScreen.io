import * as mongoose from 'mongoose'

const CourseRequestSchema = new mongoose.Schema({
  contactName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  githubRepo: {
    type: String,
    required: true
  }
})

const CourseRequestDbModel = mongoose.model('RequestCourse', CourseRequestSchema)

export default CourseRequestDbModel
