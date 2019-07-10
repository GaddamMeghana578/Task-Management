// Initializing the node module variables...
import Task from "../models/tasks"; // Reference to Visitor.js
import uuid from "uuid"; // Creates unique id.
import path from "path"; // Provides utilities for working with file and directory paths.

// Find and get all the documents from the VisitorRegistration table.

module.exports = server => {
  server.get("/tasks", (req, res) => {
    // use mongoose to get all user data in the database
    Task.find(function(err, Task) {
      // if there is an error retrieving, send the error. Nothing after res.send(err) will execute.
      if (err) return res.status(500).send("Error occured");
      res.json(Task); // return all the data in JSON format
    });
  });

  // Inserts the data in to the TaskDetails table.
  server.post("/tasks", (req, res, next) => {
    var taskData = req.body;
    var task = new Task(taskData);
    task.save(function(err, result) {
      if (err) {
        res.send(err);
      }
      res.json(result);
    });
  });

  // Find and get a specific document from the TaskDetails table by property name(UUID).
  server.get("/tasks/:taskID", function(req, res) {
    Task.findOne({ uuid: req.params.taskID }, function(err, Task) {
      if (err) return res.status(500).send("Error occured");
      res.json(Task);
    });
  });

  // Find and Update the document from the TaskDetails table by property name passed(UUID).
  server.put("/tasks/:taskID", (req, res) => {
    Task.findOneAndUpdate({ uuid: req.params.taskID }, req.body, function(
      err,
      Task
    ) {
      if (err) return res.status(500).send("Error occured");
      res.json(Task);
    });
  });

  // Find and Remove the document from TaskDetails table by the property name passed(UUID).
  server.delete("/tasks/:taskID", function(req, res) {
    Task.findOneAndRemove({ uuid: req.params.taskID }, req.body, function(
      err,
      Task
    ) {
      if (err) return res.status(500).send("Error occured");
      res.json(Task);
    });
  });

  // Default route.
  server.get("/", function(req, res) {
    // Load the single view file(angular will handle the page changes on the front-end).
    res.sendFile(path.join(__dirname + "index.html"));
  });
};
