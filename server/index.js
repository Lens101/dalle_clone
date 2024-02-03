import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import { connectToDB } from "./mongodb/connect";

//Lets us import env vars from .env file
dotenv.config();

const app = express();

//Middleware
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.get("/", (req, res) => {
  res.send("Hello World");
});

const startServer = async () => {
  try {
    connectToDB(process.env.MONGO_URI); //N.B. URI not url.

    app.listen(8080, () => console.log("Server is running on port 8080"));
  } catch (error) {
    console.log(error);
  }
};

//npm start
startServer();
