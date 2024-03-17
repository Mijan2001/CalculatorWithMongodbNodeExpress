const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.port;
const cors = require("cors");
const userRouter = require("./routes/userRouter");

app.use(express.json());
app.use(
  cors({
    origin: "*", // Allow requests from all origins
    credentials: true, // Allow sending cookies
  })
);

app.use(userRouter);

app.listen(port, (req, res) => {
  console.log(`server is connected localhost:http://127.0.0.1:${port}`);
});
