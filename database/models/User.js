const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
//validate Email function
const validateEmail = function(email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};
//Creating User Schema
const UserSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    unique: true,
    uniqueCaseInsensitive: true
  },
  password: { type: String, required: true },
  email: {
    type: String,
    unique: true,
    uniqueCaseInsensitive: true,
    validate: validateEmail
  }
});
/*Adding uniqueValidator plugin to make sure all feild with uniqe set to true stay uniqe .
but be carefull that mongo does not run validate on updates like create and you should add
your validation there or add runValidators to your update query 

Example:
User.findOneAndUpdate(
    { email: 'old-email@example.com' },
    { email: 'new-email@example.com' },
    { runValidators: true, context: 'query' },
    function(err) {
        // ...
    }
)
*/

UserSchema.plugin(uniqueValidator);

module.exports = User = mongoose.model("users", UserSchema);
