const mongoose = require("mongoose");

const branchSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  address: {
    street: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    postalCode: {
      type: String,
      required: true,
      minlength: 5,
    },
  },
  manager: {
    type: String,
    required: true,
  },
  openStatus: {
    type: Boolean,
    default: true,
  },
});

module.exports = mongoose.model("Branch", branchSchema);
