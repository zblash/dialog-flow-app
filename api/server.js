require("rootpath")();
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const jwt = require("utils/jwt");
const errorHandler = require("utils/error-handler");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use(jwt());

app.use("/users", require("./users/users.controller"));

app.use(errorHandler);

const server = app.listen(8080, function () {
  console.log("Server listening on port 8080");
});
