import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class ToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
      summary: "",
      status: "",
      priority: "",
      duedate: "",
      assignee: "",
      notes: "",
    };
    this.handleDateChange = this.handleDateChange.bind(this);
  }

  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleDateChange = (date) => {
    this.setState({ duedate: date });
  };

  onSubmit = (e) => {
    e.preventDefault();
    var dateString = this.state.duedate;
    this.props.handleSubmit(this.state, dateString);
    this.setState({
      task: "",
      summary: "",
      status: "",
      priority: "",
      duedate: "",
      assignee: "",
      notes: "",
    });
  };

  onCancel = (e) => {
    e.preventDefault();
    this.setState({
      task: "",
      summary: "",
      status: "",
      priority: "",
      duedate: "",
      assignee: "",
      notes: "",
    });
  };
  render() {
    const {
      task,
      summary,
      status,
      priority,
      duedate,
      assignee,
      notes,
    } = this.state;
    return (
      <div className="panel panel-warning">
        <div className="panel-heading">
          <h3>Task Management App</h3>
        </div>
        <div className="panel-body">
          <div className="row">
            <div className=" form-group col-md-5">
              <label htmlFor="task">Task Type</label>
              <br />
              <select
                name="task"
                id="task"
                value={task}
                onChange={(e) => this.handleChange(e)}
              >
                <option>Choose Task Type</option>
                <option value="Issue">Issue</option>
                <option value="Bug">Bug</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="form-group col-md-5">
              <label htmlFor="summary">Summary</label>
              <input
                type="text"
                className="form-control"
                name="summary"
                value={summary}
                id="summary"
                onChange={(e) => this.handleChange(e)}
              />
            </div>
          </div>
          <div className="row">
            <div className=" form-group col-md-5">
              <label htmlFor="age">Status</label>
              <br />
              <select
                name="status"
                id="status"
                value={status}
                onChange={(e) => this.handleChange(e)}
              >
                <option>Choose Status</option>
                <option value="ToDo">To Do</option>
                <option value="InProgress">In Progress</option>
                <option value="Done">Done</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className=" form-group col-md-5">
              <label htmlFor="age">Priority</label>
              <br />
              <select
                name="priority"
                id="priority"
                value={priority}
                onChange={(e) => this.handleChange(e)}
              >
                <option>Choose Priority</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className=" form-group col-md-3">
              <label htmlFor="age">DueDate</label>
              <br />
              <DatePicker selected={duedate} onChange={this.handleDateChange} />
            </div>
          </div>
          <div className="row">
            <div className=" form-group col-md-5">
              <label htmlFor="age">Assignee</label>
              <br />
              <select
                name="assignee"
                id="assignee"
                value={assignee}
                onChange={(e) => this.handleChange(e)}
              >
                <option>Choose Assignee</option>
                <option value="Maggi">Maggi</option>
                <option value="Rachel">Rachel</option>
                <option value="John">John</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className=" form-group col-md-5">
              <label htmlFor="age">Notes</label>
              <input
                type="text"
                className="form-control"
                name="notes"
                value={notes}
                onChange={(e) => this.handleChange(e)}
                id="notes"
              />
            </div>
          </div>
          <div className="form-group col-md-10" style={{ marginLeft: "-1.2%" }}>
            <button
              className="btn btn-success"
              onClick={(e) => this.onSubmit(e)}
            >
              Submit
            </button>
            &nbsp; &nbsp;
            <button
              className="btn btn-warning"
              onClick={(e) => this.onCancel(e)}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }
}
