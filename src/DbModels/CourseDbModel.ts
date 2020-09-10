import * as mongoose from 'mongoose'

const CourseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  repo: {
    type: String,
    required: true
  }
})

const CourseDbModel = mongoose.model('Course', CourseSchema)

export default CourseDbModel
