const mongoose = require("mongoose");

const companySchema = new mongoose.Schema({
  companyName: { type: String, required: true },
  industry: { type: String, required: true },
  post: { type: String, required: true },
  department: { type: String, required: true },
  pocMobile: { type: String, required: true },
  altMobile: { type: String, required: true },
  companyLinkedIn: { type: String, required: true },
});

const Company = mongoose.model("Company", companySchema);

module.exports = Company;