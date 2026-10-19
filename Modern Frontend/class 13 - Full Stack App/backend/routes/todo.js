import express from "express"
import { login, signup } from "../controllers/auth.js"
import { createTodo, deleteTodo, getTodo, updateTodo } from "../controllers/todo.js"
import { authMiddleware } from "../middleware/authMiddleware.js"

const todoRoute = express.Router()


// /api/todo/
todoRoute.post("/", authMiddleware, createTodo)
todoRoute.get("/", authMiddleware, getTodo)
todoRoute.put("/:id", updateTodo)
todoRoute.delete("/:id", authMiddleware ,deleteTodo)


export default todoRoute