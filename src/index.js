import express from "express";

const app = express();
const PORT = 8000;

app.get("/", (req, res) => {
  res.json({ message: "Backend running 🚀" });
});

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
