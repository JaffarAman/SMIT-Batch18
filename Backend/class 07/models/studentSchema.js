import mongoose from "mongoose";

const stdSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    age: Number,
    email: String
})


const StdModel = mongoose.model("students", stdSchema)
export default StdModel

