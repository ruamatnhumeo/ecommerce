const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  name: {
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
  },
  registerDate: {
    type: Date,
    default: Date.now
  },
  street: {
    type: String
  },
  city: {
    type: String
  },
  phone: {
    type: String
  },
  isAdmin: {
    type: Boolean,
    default: false
  }
});

const User = mongoose.model('user', UserSchema);

module.exports = User;