const express = require("express");
const db = require("./db"); // Make sure this path is correct
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const globalConfig = require("./config");
const { v4: uuidv4 } = require("uuid");
const serverLink = globalConfig.port;
const domain = globalConfig.domain;
const app = express();
const port = 8450;
const authRouter = require("./router/auth")
const mealRouter = require("./router/meal")
const userRouter = require("./router/user")
const admittedStudentRouter = require("./router/admittedStudent")
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());


app.use((req, res, next) => {
  const allowedOrigins = [
    "http://localhost:3000",
    "https://apis.prabisha.com",
    "http://localhost:3002",
    "https://prabisha-itsm.vercel.app",
    "https://itsm.prabisha.com",
  ];
  const origin = req.headers.origin;

  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }

  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.get("/"),async (req, res) => {
    res.status(200).json({
      success: false,
      message: "Welocome for new keyboard Devdeep Patidar",
    });
  };

app.use('/api', authRouter);
app.use('/api', mealRouter);
app.use('/api', userRouter);
app.use('/api', admittedStudentRouter);
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
