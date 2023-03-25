// Description: Entry point for the application

// Requiring Environment Variables
const dotenv = require("dotenv").config();

// Requiring Express
const express = require("express");

// Requiring Database
const db = require("./config/database");

// Requiring Packages
const path = require("path");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

// Load env variables
const PORT = process.env.PORT || 3000;

const app = express();

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json({ type: "application/json" }));

// Setting up the static folder
app.use(express.static(path.join(__dirname, "public")));

// Requiring Routes
const userRouter = require("./routes/user");
const rishtaRouter = require("./routes/rishta");

// Routes
app.use("/users", userRouter);
app.use("/rishtas", rishtaRouter);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
