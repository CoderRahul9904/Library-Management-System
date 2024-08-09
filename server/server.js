import express from "express";
import cors from "cors";
import { config } from "./src/config/index.js";
import mongoose from "mongoose";

const app = express();
const PORT = config.server.port || 3000;

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors());

//IIFE
(async function connectDB() {
  try {
    //Connect DB
    await mongoose.connect(config.mongo.url);
    console.log("Connected DB");

    // Sample route
    app.get("/", (req, res) => {
      res.send("Welcome to My Library Management System");
    });

    // 404 handler
    app.use((req, res, next) => {
      res.status(404).send("Sorry, we could not find that!");
    });

    // Start the server
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });

  } catch (error) {
    console.log("Connection In DB Failed");
  }
})();
