const mongoose = require('mongoose');


const studentSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true
  },
  college: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
