import mongoose from "mongoose"; // Helper for communicating with Mongodb.
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  task: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  priority: {
    type: String,
    required: true
  },
  assignee: {
    type: String,
    required: true
  },
  duedate: {
    type: String,
    required: true
  },
  notes: {
    type: String
  },
  uuid: {
    type: String,
    required: true
  }
});
export default mongoose.model("Task", TaskSchema);
