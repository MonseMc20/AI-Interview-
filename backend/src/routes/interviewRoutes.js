const express = require("express");
const db = require("../db/knex");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const {
      user_id,
      job_position,
      career,
      difficulty,
      interview_type,
      job_description,
    } = req.body;

    if (!user_id || !job_position || !career || !difficulty || !interview_type) {
      return res.status(400).json({
        message: "Missing required interview information.",
      });
    }

    const [interview] = await db("interviews")
      .insert({
        user_id,
        job_position,
        career,
        difficulty,
        interview_type,
        job_description: job_description || null,
      })
      .returning("*");

    res.status(201).json({
      message: "Interview created successfully.",
      interview,
    });
  } catch (error) {
    console.error("Error creating interview:", error);

    res.status(500).json({
      message: "Failed to create interview.",
    });
  }
});

module.exports = router;