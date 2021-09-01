import React, { Component } from "react";
import ToDo from "./ToDo";
import List from "./List";
import axios from "axios";
import _ from "lodash";

class App extends Component {
  state = {
    taskDetails: {},
    added: false,
    deleted: false,
    editable: false,
    taskData: {},
    uuid: ""
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/tasks")
      .then(response => {
        this.setState({ taskDetails: response.data });
      })
      .catch(error => console.log(error));
  }

  componentDidUpdate() {
    if (this.state.submitted || this.state.added || this.state.deleted) {
      axios
        .get("http://localhost:5000/tasks")
        .then(response => {
          this.setState({
            taskDetails: response.data,
            submitted: false,
            added: false,
            deleted: false
          });
        })
        .catch(error => console.log(error));
    }
  }

  handleEdit = uuid => {
    axios
      .get("http://localhost:5000/tasks/" + uuid)
      .then(response => {
        var date = new Date(response.data.duedate);
        _.omit(response.data, "duedate");
        var data = _.merge(response.data, { duedate: date });
        console.log("data check:", data);
        this.setState({
          taskData: data,
          editable: true,
          uuid : uuid
        });
      })
      .catch(error => console.log(error));
  };

  handleAdd = (uuid, task, status, priority, duedate, assignee, notes) => {
    axios
      .put("http://localhost:5000/tasks/" + uuid, {
        task: task,
        status: status,
        priority: priority,
        duedate: duedate,
        assignee: assignee,
        notes: notes,
        uuid: uuid
      })
      .then(response => {
        console.log("check data added:", response.data);
        this.setState({
          taskData: response.data,
          added: true,
          editable: false
        });
      })
      .catch(error => console.log(error));
  };

  handleSubmit = (task, date) => {
    var d = new Date().getTime();
    var uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(
      c
    ) {
      var r = (d + Math.random() * 16) % 16 | 0;
      d = Math.floor(d / 16);
      return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
    });

    axios
      .post("http://localhost:5000/tasks", {
        task: task.task,
        status: task.status,
        priority: task.priority,
        duedate: date,
        assignee: task.assignee,
        notes: task.notes,
        uuid: task.uuid ? task.uuid : uuid
      })
      .then(response => {
        this.setState({
          taskDetails: [...this.state.taskDetails, response.data],
          submitted: true
        });
      })
      .catch(error => console.log(error));
  };

  handleDelete = uuid => {
    axios
      .delete("http://localhost:5000/tasks/" + uuid)
      .then(response => {
        this.setState({ deleted: true });
      })
      .catch(error => console.log(error));
  };

  render() {
    return (
      <div className="App">
        <ToDo handleSubmit={this.handleSubmit} />
        <List
          tasks={this.state.taskDetails}
          handleDelete={this.handleDelete}
          handleAdd={this.handleAdd}
          handleEdit={this.handleEdit}
          taskData={this.state.taskData}
          editable={this.state.editable}
          uuid = {this.state.uuid}
        />
      </div>
    );
  }
}

export default App;
