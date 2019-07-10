import React, { Component } from "react";
import _ from "lodash";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Change.scss";

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
      status: "",
      priority: "",
      duedate: "",
      assignee: "",
      notes: "",
      uuid: "",
      taskChange: false,
      statusChange: false,
      priorityChange: false,
      duedateChange: false,
      assigneeChange: false,
      notesChange: false
    };
    this.onDateChange = this.onDateChange.bind(this);
  }

  onDelete = (e, uuid) => {
    e.preventDefault();
    this.props.handleDelete(uuid);
  };

  onInputChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    if (name === "task") {
      this.setState({ [name]: value, taskChange: true });
    } else if (name === "status") {
      this.setState({ [name]: value, statusChange: true });
    } else if (name === "priority") {
      this.setState({ [name]: value, priorityChange: true });
    } else if (name === "assignee") {
      this.setState({ [name]: value, assigneeChange: true });
    } else if (name === "notes") {
      this.setState({ [name]: value, notesChange: true });
    }
  };

  onEdit = (e, uuid) => {
    e.preventDefault();
    console.log("check:", uuid);
    this.props.handleEdit(uuid);
  };

  onDateChange = date => {
    this.setState({ duedate: date, duedateChange: true });
  };

  onAdd = (e, uuid) => {
    e.preventDefault();
    var task = this.state.taskChange
      ? this.state.task
      : this.props.taskData.task;
    var status = this.state.statusChange
      ? this.state.status
      : this.props.taskData.status;
    var priority = this.state.priorityChange
      ? this.state.priority
      : this.props.taskData.priority;
    var duedate = this.state.duedateChange
      ? this.state.duedate
      : this.props.taskData.duedate;
    var assignee = this.state.assigneeChange
      ? this.state.assignee
      : this.props.taskData.assignee;
    var notes = this.state.notesChange
      ? this.state.notes
      : this.props.taskData.notes;
    this.props.handleAdd(
      uuid,
      task,
      status,
      priority,
      duedate,
      assignee,
      notes
    );
    this.setState({
      task: "",
      status: "",
      priority: "",
      duedate: "",
      assignee: "",
      notes: "",
      uuid: "",
      taskChange: false,
      statusChange: false,
      priorityChange: false,
      duedateChange: false,
      assigneeChange: false,
      notesChange: false
    });
  };

  render() {
    var tasksinList = this.props.tasks;
    const {
      task,
      status,
      priority,
      duedate,
      assignee,
      notes,
      taskChange,
      statusChange,
      priorityChange,
      duedateChange,
      assigneeChange,
      notesChange
    } = this.state;
    return (
      <div>
        <ul className="breadcrumb">
          {tasksinList ? (
            <div>
              <h3 className="text-center text-danger">Users</h3>
              <div className="wrapper">
                <span>
                  Showing {tasksinList ? tasksinList.length : 0} Users
                </span>
              </div>
              <br />
              <table className="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>
                      <b>Task</b>
                    </th>
                    <th>
                      <b>Status</b>
                    </th>
                    <th>
                      <b>Priority</b>
                    </th>
                    <th>
                      <b>DueDate</b>
                    </th>
                    <th>
                      <b>Assignee</b>
                    </th>
                    <th>
                      <b>Notes</b>
                    </th>
                    <th>
                      <b>Add/Edit/Delete</b>
                    </th>
                  </tr>
                </thead>
                {Object.keys(tasksinList).length === 0 &&
                tasksinList.constructor === Object ? null : (
                  <tbody>
                    {_(tasksinList)
                      .orderBy("task", "asc")
                      .map((tasks, i) => (
                        <tr key={tasks.uuid}>
                          <td>{i}</td>
                          <td>
                            {!this.props.editable ? (
                              tasks.task
                            ) : this.props.uuid === tasks.uuid ? (
                              <input
                                className={
                                  taskChange ? "Change" : "form-control"
                                }
                                type="text"
                                name="task"
                                value={taskChange ? task : tasks.task}
                                onChange={e => this.onInputChange(e)}
                              />
                            ) : (
                              tasks.task
                            )}
                          </td>
                          <td>
                            {!this.props.editable ? (
                              tasks.status
                            ) : this.props.uuid === tasks.uuid ? (
                              <input
                                className={
                                  statusChange ? "Change" : "form-control"
                                }
                                type="text"
                                name="status"
                                value={statusChange ? status : tasks.status}
                                onChange={e => this.onInputChange(e)}
                              />
                            ) : (
                              tasks.status
                            )}
                          </td>
                          <td>
                            {!this.props.editable ? (
                              tasks.priority
                            ) : this.props.uuid === tasks.uuid ? (
                              <input
                                className={
                                  priorityChange ? "Change" : "form-control"
                                }
                                type="text"
                                name="priority"
                                value={
                                  priorityChange ? priority : tasks.priority
                                }
                                onChange={e => this.onInputChange(e)}
                              />
                            ) : (
                              tasks.priority
                            )}
                          </td>
                          <td>
                            {!this.props.editable ? (
                              tasks.duedate.substring(0, 10)
                            ) : this.props.uuid === tasks.uuid ? (
                              <DatePicker
                                className={
                                  duedateChange ? "Change" : "form-control"
                                }
                                selected={
                                  duedateChange
                                    ? duedate
                                    : this.props.taskData.duedate
                                }
                                onChange={this.onDateChange}
                              />
                            ) : (
                              tasks.duedate.substring(0, 10)
                            )}
                          </td>
                          <td>
                            {!this.props.editable ? (
                              tasks.assignee
                            ) : this.props.uuid === tasks.uuid ? (
                              <input
                                className={
                                  assigneeChange ? "Change" : "form-control"
                                }
                                type="text"
                                name="assignee"
                                value={
                                  assigneeChange ? assignee : tasks.assignee
                                }
                                onChange={e => this.onInputChange(e)}
                              />
                            ) : (
                              tasks.assignee
                            )}
                          </td>
                          <td>
                            {!this.props.editable ? (
                              tasks.notes
                            ) : this.props.uuid === tasks.uuid ? (
                              <input
                                className={
                                  notesChange ? "Change" : "form-control"
                                }
                                type="text"
                                name="notes"
                                value={notesChange ? notes : tasks.notes}
                                onChange={e => this.onInputChange(e)}
                              />
                            ) : (
                              tasks.notes
                            )}
                          </td>
                          <td>
                            {this.props.editable &&
                            this.props.uuid === tasks.uuid ? (
                              <button
                                className="btn btn-success"
                                type="add"
                                onClick={e => this.onAdd(e, tasks.uuid)}
                              >
                                Add
                              </button>
                            ) : (
                              <button
                                className="btn btn-primary"
                                type="edit"
                                onClick={e => this.onEdit(e, tasks.uuid)}
                              >
                                Edit
                              </button>
                            )}
                            &nbsp;&nbsp;
                            <button
                              className="btn btn-warning"
                              type="submit"
                              onClick={e => this.onDelete(e, tasks.uuid)}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))
                      .value()}
                  </tbody>
                )}
              </table>
            </div>
          ) : null}
        </ul>
      </div>
    );
  }
}
