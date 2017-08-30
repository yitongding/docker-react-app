const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = mongoose.Schema({
  local: {
    username: { type: String, unique: true },
    password: String,
    email: String,
  },
  facebook: {
    id: String,
    username: String,
    token: String,
    email: String,
  },
});

const saltRounds = 10;

UserSchema.methods.genereateHash = password => new Promise((resolve, reject) => {
  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) {
      reject(err);
      return;
    }
    resolve(hash);
  });
});

UserSchema.methods.checkPassword = password => new Promise((resolve, reject) => {
  bcrypt.compare(password, this.local.hash, (err, result) => {
    if (err) {
      reject(err);
      return;
    }
    resolve(result);
  });
});

module.exports = mongoose.model('User', UserSchema);
