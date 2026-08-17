import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullName: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    isVerified: {
        type: Boolean,
        default: false
    }

}, { timestamps: true })

const UserModel = mongoose.model("user", userSchema)

export default UserModel
