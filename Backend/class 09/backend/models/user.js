import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullName: String,
    email: {
        type: String
    },
    password: {
        type: String,
        maxLength: [16 , "max password length 16"],
        minLength: [8 , "min password length 8"],
    }
})

const UserModel = mongoose.model("user", userSchema)
export default UserModel
