const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({

  username: {
    type: String,
    required: true,
    unique: true
  },

  password: {
    type: String,
    required: true
  },

  studentID: {
    type: String,
    unique: true,
    default: ""
  },

  collegeName: {
    type: String,
    default: ""
  }

})

module.exports = mongoose.model('User', userSchema)