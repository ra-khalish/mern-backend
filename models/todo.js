const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create todo Schema & model
const TodoSchema = new Schema({
  todo_description: {
    type: String,
    required: true,
  },
  todo_responsible: {
    type: String,
    required: true,
  },
  todo_priority: {
    type: String,
    required: true,
  },
  todo_completed: {
    type: Boolean,
  },
});

const Todo = mongoose.model("Todo", TodoSchema);
module.exports = Todo;
