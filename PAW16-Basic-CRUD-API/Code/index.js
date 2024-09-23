const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const process = require("process");
const app = express();

// DOTENV CONFIG
dotenv.config();

// MIDDLEWARE
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(morgan("dev"));
app.use(express.json());

// CORS
app.use(cors());

// MONGODB CONNECTION
if (!process.env.MONGO_URI) {
  throw Error("Database connection string not found");
}
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Succesfully connected to Database!");
  }).catch((err) => {
    console.log("Failed to connect to Database!");
    console.log(err);
  });

// ROUTES
app.get("/", (req, res) => {
  res.send("Hello from PAW Backend Service!");
});
app.use("/api/user", require("./src/routes/UserRoutes"));
app.use("/api/books", require("./src/routes/BookRoutes"));
app.use("/api/branches", require("./src/routes/BranchRoutes"));

// APP START  
app.listen(5000, () => {
  console.log("Server is running on http://localhost:5000");
});