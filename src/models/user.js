const {Schema, model}= require("mongoose");

const UserSchema = new Schema({
    firstName: String,
    lastName: String,
    avatar: String
});

const UserModel = model("User", UserSchema);


module.exports = UserModel;