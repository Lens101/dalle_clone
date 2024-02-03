import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";

//Lets us import env vars from .env file
dotenv.config();

const app = express();

//Middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});
