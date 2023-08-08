const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  studentName: {
    type: String,
    required: true
  },
  degree: {
    type: String,
    required: true
  },
  yearofStudy: {
    type: String,
    required: true
  },
  collegeEmail: {
    type: String,
    required: true,
    unique: true
  },
  mobile: {
    type: String,
    required: true
  },
  altMobile: {
    type: String
  },
  clubName: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
