const { Router } = require("express");
const todoRoute = Router();
const { userMiddleware } = require("../middlewares/userMiddleware");
const { todoModel } = require("../db/db");

// get all todos from user
todoRoute.get("/all", userMiddleware, async (req, res, next) => {
    const username = req.username;

    try {
        const todos = await todoModel.find({ username });
        if (!todos || todos.length === 0) {
            return res.json({
                todos: []
            })
        }
        if(todos) {
            return res.json({
                todos
            })
        }
    } catch(e) {
        console.log("Error while fetching todoos: " + e);
        return res.status(500).json({ error: "Internal server error while fetching todos" });
    }
})

//get specific todo
todoRoute.get("/:id", userMiddleware, async (req, res, next) => {
    const username = req.username;

    try {
        const todos = await todoModel.findOne({ 
            todoId: req.params.id,
            username:  username
        });
        if (!todos || todos.length === 0) {
            return res.json({
                todos: 0
            })
        }
        if(todos) {
            return res.json({
                todos
            })
        }
    } catch(e) {
        console.log("Error while fetching todoo: " + e);
        return res.status(500).json({ error: "Internal server error while fetching todos" });
    }
})


async function getTodoId() {
    const maxTodo = await todoModel.findOne().sort({ todoId: -1 }).limit(1);
    const maxTodoId = maxTodo ? maxTodo.todoId : 0;
    return maxTodoId + 1;
}

//create new todo
todoRoute.post("/", userMiddleware, async (req, res, next) => {
    const username = req.username;
    const { title } = req.body;
    if (!title) {
        return res.status(400).json({ error: "Title is required" });
    }
    try {
        const newTodo = await todoModel.create({
            todoId: await getTodoId(),
            title,
            completed: false,
            username
        })
        res.json({
            success: true,
            todo: newTodo,
            message: "Todo created successfully"
        })
    } catch(e) {
        console.log("Error while creating todo: " + e);
        return res.status(500).json({ error: "Internal server error while creating todo" });
    }
})

//update todo by id
todoRoute.put("/updatestatus/:id", userMiddleware, async (req, res, next) => {
    const username = req.username;
    const { status } = req.body;

    if (status === undefined) {
        return res.status(400).json({ error: "Completed status is required" });
    }

    try {
        const todo = await todoModel.findOneAndUpdate(
            { 
                todoId: Number(req.params.id),
                username:  username
            },
            { completed: status },
            { new: true }
        );
        if (!todo) {
            return res.status(404).json({ error: "Todo not found" });
        }
        res.json({
            message: "Todo updated successfully",
            todo
        })
    } catch(e) {
        console.log("Error while updating todo: " + e);
        return res.status(500).json({ error: "Internal server error while updating todo" });
    }
})

todoRoute.put("/updatetitle/:id", userMiddleware, async (req, res, next) => {
    const username = req.username;
    const { title } = req.body;

    if (!title) {
        return res.status(400).json({ error: "Title is required" });
    }

    try {
        const todo = await todoModel.findOneAndUpdate(
            { 
                todoId: req.params.id,
                username:  username
            },
            { title },
            { new: true }
        );
        if (!todo) {
            return res.status(404).json({ success: false, error: "Todo not found" });
        }
        res.json({
            success: true,
            message: "Todo updated successfully",
            todo
        })
    } catch(e) {
        console.log("Error while updating todo: " + e);
        return res.status(500).json({ error: "Internal server error while updating todo" });
    }
})

//delete a todo by id
todoRoute.delete("/:id", userMiddleware, async (req, res, next) => {
    const username = req.username;

    try {
        const todo = await todoModel.findOneAndDelete({ 
            todoId: Number(req.params.id),
            username:  username
        });
        if (!todo) {
            return res.status(404).json({ 
                success: false,
                error: "Todo not found" 
            });
        }
        return res.json({
            success: true,
            message: "Todo deleted successfully"
        })
    } catch(e) {
        console.log("Error while deleting todo: " + e);
        return res.status(500).json({ error: "Internal server error while deleting todo" });
    }
})

module.exports = todoRoute;