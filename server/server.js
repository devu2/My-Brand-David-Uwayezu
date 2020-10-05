import dotenv from "dotenv";
dotenv.config();
import jwtStrategy from "./config/passport";
import passport from "passport";
import express from "express";
import mongoose from "mongoose";
import routes from "./routes";
import swagger from "swagger-ui-express";
import docs from "../swagger.json";

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
