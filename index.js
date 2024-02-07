const express = require("express");

const app = express();

app.use(express.json());

const midFuncOne = async (req, res, next) => {
  req.body.funcOne = "Hello from func one";
  next();
};

//Question?
// Can I create another function called "midFuncTwo" and put it between
// midFuncOne and controller?
// How would i make it work? (google next() in express.js)

const controller = async (req, res) => {
  console.log(req.body);
  res.status(201).json({ message: "all done!", stuff: req.body });
};

app.use("/mymiddlewareroute", midFuncOne, controller);

app.listen(5001, () => {
  console.log("Server is listening on port 5001");
});
