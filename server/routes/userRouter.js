const express = require("express");
const userRouter = express.Router();
const databaseSchema = require("../models/databaseSchema");
const databaseConnection = require("../config/db");

databaseConnection;

userRouter.get("/", (req, res) => {
  res.json("This is home page");
});

userRouter.get("/register", (req, res) => {
  res.json("This is register page");
});

userRouter.get("/login", (req, res) => {
  res.json("This is login page");
});

userRouter.post("/register", (req, res) => {
  const { email } = req.body;
  databaseSchema.findOne({ email: email }).then((user) => {
    if (user) {
      res.json("Already Registered");
    } else {
      databaseSchema.create(req.body).then((user) => {
        res.json(user);
      });
    }
  });
});

userRouter.post("/login", (req, res) => {
  const { email } = req.body;
  databaseSchema.findOne({ email: email }).then((user) => {
    if (user) {
      res.json("success");
    } else {
      res.json("not success");
      console.log("wrong password!");
    }
  });
});

module.exports = userRouter;
