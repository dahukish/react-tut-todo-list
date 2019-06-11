const express = require("express");
const path = require("path");

const todoList = [
  {
    "id": 1,
    "title": "first todo",
    "description": "pick up milk",
    "complete": true,
    "canceled": true,
    "date": 1389878466730
  },
  {
    "id": 2,
    "title": "second todo",
    "description": "learn backbone",
    "complete": false,
    "canceled": false,
    "date": 1389988926901
  },
  {
    "id": 3,
    "title": "third todo",
    "description": "go for a run",
    "complete": false,
    "canceled": false,
    "date": 1389992494240
  }
];

let app = express();

app.get("/api/ping", (req, res) => res.send("OK"));
app.get("/api/todolist", (req, res) => res.end(JSON.stringify(todoList)));

app.listen("8888", () => console.log(`App started on 8888.`));
