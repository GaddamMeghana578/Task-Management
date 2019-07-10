import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class ToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
      status: "",
      priority: "",
      duedate: "",
      assignee: "",
      notes: ""
    };
    this.handleDateChange = this.handleDateChange.bind(this);
  }

  handleInputChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleDateChange = date => {
    this.setState({ duedate: date });
  };

  onSubmit = e => {
    e.preventDefault();
    var dateString = this.state.duedate;
    this.props.handleSubmit(this.state, dateString);
    this.setState({
      task: "",
      status: "",
      priority: "",
      duedate: "",
      assignee: "",
      notes: ""
    });
  };

  onCancel = e => {
    e.preventDefault();
    this.setState({
      task: "",
      status: "",
      priority: "",
      duedate: "",
      assignee: "",
      notes: ""
    });
  };
  render() {
    const { task, status, priority, duedate, assignee, notes } = this.state;
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="form-group col-md-3">
              <label htmlFor="name">Task</label>
              <input
                type="text"
                className="form-control"
                name="task"
                value={task}
                id="task"
                onChange={e => this.handleInputChange(e)}
              />
            </div>
          </div>
          <div className="row">
            <div className=" form-group col-md-5">
              <label htmlFor="age">Status</label>
              <input
                type="text"
                className="form-control"
                name="status"
                value={status}
                onChange={e => this.handleInputChange(e)}
                id="status"
              />
            </div>
          </div>
          <div className="row">
            <div className=" form-group col-md-3">
              <label htmlFor="age">Priority</label>
              <input
                type="text"
                className="form-control"
                name="priority"
                value={priority}
                onChange={e => this.handleInputChange(e)}
                id="priority"
              />
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
            <div className=" form-group col-md-3">
              <label htmlFor="age">Assignee</label>
              <input
                type="text"
                className="form-control"
                name="assignee"
                value={assignee}
                onChange={e => this.handleInputChange(e)}
                id="assignee"
              />
            </div>
          </div>
          <div className="row">
            <div className=" form-group col-md-3">
              <label htmlFor="age">Notes</label>
              <input
                type="text"
                className="form-control"
                name="notes"
                value={notes}
                onChange={e => this.handleInputChange(e)}
                id="notes"
              />
            </div>
          </div>
          <div className="form-group col-md-10" style={{ marginLeft: "-1.2%" }}>
            <button className="btn btn-success" onClick={e => this.onSubmit(e)}>
              Submit
            </button>
            &nbsp; &nbsp;
            <button className="btn btn-warning" onClick={e => this.onCancel(e)}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }
}
