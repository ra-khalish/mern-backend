const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
// const todoRoutes = express.Router();
const PORT = 4000;

// let Todo = require("./todo.model");

//Middleware
app.use(cors());
app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_CONNECT, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.once("open", function () {
  console.log("MongoDB database connection established successfully");
});

/*todoRoutes.route("/").get(function (req, res) {
  Todo.find(function (err, todos) {
    if (err) {
      console.log(err);
    } else {
      res.json(todos);
    }
  });
});

todoRoutes.route("/:id").get(function (req, res) {
  let id = req.params.id;
  Todo.findById(id, function (todo) {
    res.json(todo);
  });
});

todoRoutes.route("/add").post(function (req, res) {
  let todo = new Todo(req.body);
  todo
    .save()
    .then((todo) => {
      res.status(200).json({ todo: "todo added successfully" });
    })
    .catch((err) => {
      res.status(400).send("Adding new todo failed");
    });
});

todoRoutes.route("/update/:id").post(function (req, res) {
  Todo.findById(req.param.id, function (err, todo) {
    if (!todo) {
      res.status(404).send("Data is not found");
    } else {
      todo.todo_description = req.body.todo_description;
      todo.todo_responsible = req.body.todo_responsible;
      todo.todo_priority = req.body.todo_priority;
      todo.todo_completed = req.body.todo_completed;

      todo
        .save()
        .then((todo) => {
          res.json("Todo Updated");
        })
        .catch((err) => {
          res.status(400).send("Update not possible");
        });
    }
  });
});
*/
app.use("/todos", require("./routes/routes"));

app.listen(PORT, () => {
  console.log("Server is running on PORT: " + PORT);
});
//End Middleware
