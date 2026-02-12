const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = mongoose.Schema({
    username: {type: String, unique: true},
    password: {type: String}
})

const todoSchema = mongoose.Schema({
    todoId: {type: Number, unique: true},
    title: String,
    completed: Boolean,
    username: {type: String, required: true},
    createdAt: {type: Date, default: Date.now}
})

const userModel = mongoose.model("user", userSchema);
const todoModel = mongoose.model("todos", todoSchema);

module.exports = {
    userModel,
    todoModel
}