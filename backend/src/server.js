const express = require("express");
const cors = require("cors");
require("dotenv").config();

const db = require("./db/knex");

const interviewRoutes = require("./routes/interviewRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/interviews", interviewRoutes);
app.use("/api/users", userRoutes);

const PORT = 3000;

app.get("/", (req, res) => {
  res.json({
    message: "AI Interviews backend is running!",
  });
});

app.get("/api/test-db", async (req, res) => {
  try {
    const result = await db.raw("SELECT NOW()");

    res.json({
      message: "Database connection successful!",
      time: result.rows[0].now,
    });
  } catch (error) {
    console.error("Database connection error:", error);

    res.status(500).json({
      message: "Database connection failed.",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});