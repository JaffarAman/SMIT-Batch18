import mongoose from "mongoose";
const todoSchema = new mongoose.Schema({
    title: {
        type: String
    },
    desc: {
        type: String,
        default : "HELLO DESC"
    },
    priority: {
        type: String
    },
    dueDate: {
        type: String,
        default : new Date()
    },
    // createdAt :{
    //     type : Date,
    //     default : new Date()
    // }
}, { timestamps: true })

const TodoModel = mongoose.model("todos", todoSchema)

export default TodoModel