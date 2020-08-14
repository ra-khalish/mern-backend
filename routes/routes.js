const express = require("express");
const router = express.Router();
const Todo = require("../models/todo");

//Ambil list Todo dari DB
router.get("/", function (req, res, next) {
  Todo.find()
    .then(function (todos) {
      res.send(todos);
    })
    .catch((err) => {
      res.status(500).send({
        error: err._message || "Some error occurred while retrieving notes.",
      });
    });
});

//Ambil satu data Todo dari DB
router.get("/:id", function (req, res, next) {
  Todo.findById({ _id: req.params.id }, req.body)
    .then(function (todo) {
      res.send(todo);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          error: "Todo not found",
        });
      }
    });
});

//Tambah Todo baru ke DB
router.post("/add", function (req, res) {
  Todo.create(req.body)
    .then(function (todo) {
      res.send(todo);
    })
    .catch((err) => {
      return res.status(400).send({
        error: err._message,
      });
    });
});

//Perbarui Todo ke DB
router.put("/update/:id", function (req, res) {
  Todo.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })
    .then(function (todo) {
      res.send(todo);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          error: "Todo not found",
        });
      }
      return res.status(500).send({
        error: "Error updating todo",
      });
    });
});

module.exports = router;
