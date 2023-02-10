const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    first_name: {
        type: String,
        allowNull: false,
      },
      last_name: {
        type: String,
        allowNull: false,
      },
      email: {
        type: String,
        allowNull: false,
        unique: true,
      },
      password: {
        type: String,
        allowNull: false
      },
},
    { collection: "users" })

const User = mongoose.model("User", UserSchema);
module.exports = User