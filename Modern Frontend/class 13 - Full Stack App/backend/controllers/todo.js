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
// export const updateTodo = 
// export const deleteTodo = 