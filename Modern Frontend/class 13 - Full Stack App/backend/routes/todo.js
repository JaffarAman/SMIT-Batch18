import express from "express"
import { login, signup } from "../controllers/auth.js"
import { createTodo, getTodo } from "../controllers/todo.js"
import { authMiddleware } from "../middleware/authMiddleware.js"

const todoRoute = express.Router()


// /api/todo/
todoRoute.post("/", authMiddleware ,createTodo)
todoRoute.get("/", getTodo)
// todoRoute.put("/", updateTodo)
// todoRoute.delete("/", deleteTodo)


export default todoRoute