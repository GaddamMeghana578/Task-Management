// Initialize node modules.
import express from "express"; // Reference express.
import bodyParser from "body-parser"; // Required for POST requests.
import methodOverride from "method-override"; // Required for DELETE AND PUT requests.
import morgan from "morgan"; // Log requests to console.
import mongoose from "mongoose"; // Helper for communicating with Mongodb.
import cors from "cors";

const server = express(); // Create server with express.
const PORT = 5000;
// Serve the static files from the React app
server.use(express.static(__dirname + "/../client/build"));
server.use(cors());
server.use(morgan("dev")); // Logging requests to console.
server.use(bodyParser.json()); // Parse application/json.
server.use(bodyParser.urlencoded({ extended: true })); // Parse application
server.use(methodOverride("X-HTTP-Method-Override")); // Required to do an HTTP POST request.
mongoose.Promise = global.Promise;
mongoose
  .connect("mongodb://localhost:27017/dev", { useNewUrlParser: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

require("./routes/API")(server); // Configure our routes

server.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
});
