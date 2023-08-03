// models/college.js
const mongoose = require("mongoose");

const collegeSchema = new mongoose.Schema({
  collegeName: { type: String, required: true },
  fieldOfEducation: { type: String, required: true },
  collegeAddress: { type: String, required: true },
  collegeEmail: { type: String, required: true },
  pocMobile: { type: String, required: true },
  altMobile: { type: String },
  clubName: { type: String, required: true },
});

const College = mongoose.model("College", collegeSchema);

module.exports = College;
