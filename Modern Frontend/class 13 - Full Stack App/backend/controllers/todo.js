import TodoModel from "../models/todo.js"

export const createTodo = async (req, res) => {
    try {
        const body = req.body
        // add validation

        await TodoModel.create(body)
        res.status(201).json({
            message: "todo created!",
            status: true
        })
    } catch (error) {
        res.status(500).json({
            message: error.message,
            status: false
        })
    }

}



export const getTodo = async (req, res) => {

    try {
        const todoId = req.query.todoId
        if (todoId) {
            const data = await TodoModel.findById(todoId)

            res.json({
                message: "single todo fetch",
                data: data,
                status: true
            })

        } else {
            const data = await TodoModel.find({})

            res.json({
                message: "all todo fetch",
                data: data,
                status: true
            })

        }
    } catch (error) {
        res.status(500).json({
            message: error.message,
            status: false
        })
    }
}







export const updateTodo = async (req, res) => {
    try {


        const todoId = req.params.id
        const body = req.body
        if (!todoId) {
            return res.json({
                message: "id required",
                status: false
            })
        }
        const todo = TodoModel.findById(todoId)

        if (req.userId !== todo.userId) {
            return res.json({
                message: "ap delete nahi kr sakty BHAI!",
                status: false
            })
        }

        await TodoModel.findByIdAndUpdate(todoId, body)
        res.json({
            message: "edit successfully!",
            status: true
        })
    } catch (error) {
        return res.json({
            message: error.message,
            status: false
        })
    }
}

export const deleteTodo = async (req, res) => {
    try {
        const todoId = req.params.id
        if (!todoId) {
            return res.json({
                message: "id required",
                status: false
            })
        }

        await TodoModel.findByIdAndDelete(todoId)
        res.json({
            message: "Delete successfully!",
            status: true
        })
    } catch (error) {
        return res.json({
            message: error.message,
            status: false
        })
    }
}