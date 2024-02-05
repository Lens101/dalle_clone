import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import connectDB from "./mongodb/connect.js"; //need file extension in import as node doesn't understand es6
import dalleRoutes from "./routes/dalleRoutes.js";
import postRoutes from "./routes/postRoutes.js";

//Lets us import env vars from .env file
dotenv.config();

const app = express();

//Middleware
app.use(cors());
app.use(express.json({ limit: "50mb" }));

//Routes
app.use("/api/v1/dalle", dalleRoutes);
app.use("/api/v1/post", postRoutes);

app.get("/", (req, res) => {
  res.send("Hello World");
});

const startServer = async () => {
  try {
    connectDB(process.env.MONGO_URI); //N.B. URI not url.
    app.listen(8080, () => console.log("Server is running on port 8080"));
  } catch (error) {
    console.log(error);
  }
};

//npm start
startServer();
