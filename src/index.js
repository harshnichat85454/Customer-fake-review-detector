import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config();

connectDB();

const app = express();
const PORT = 8000;

app.get("/", (req, res) => {
  res.json({ message: "Backend running 🚀" });
});

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
