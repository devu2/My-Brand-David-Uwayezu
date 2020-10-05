const dotenv = require("dotenv");
dotenv.config();
const jwtStrategy = require("./config/passport");
const passport = require("passport");
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const swagger = require("swagger-ui-express");
const docs = require("../swagger.json");

const app = express();

mongoose
  .connect(
    process.env.NODE_ENV === "test"
      ? process.env.MONGO_URL_TEST
      : process.env.MONGO_URL,
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }
  )
  .then(() => {
    console.log("database Connected successfully!");
  });
app.use(passport.initialize());
passport.use(jwtStrategy);
app.use(express.json());
app.use(routes);
app.use("/api-docs", swagger.serve, swagger.setup(docs));

app.listen(process.env.PORT || 5500);
module.exports = app;
