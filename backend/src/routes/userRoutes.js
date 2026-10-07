const express = require("express");
const db = require("../db/knex");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, email, password_hash } = req.body;

    if (!name || !email || !password_hash) {
      return res.status(400).json({
        message: "Name, email, and password are required.",
      });
    }

    const [user] = await db("users")
      .insert({
        name,
        email,
        password_hash,
      })
      .returning(["id", "name", "email", "created_at"]);

    res.status(201).json({
      message: "User created successfully.",
      user,
    });
  } catch (error) {
    console.error("Error creating user:", error);

    if (error.code === "23505") {
      return res.status(409).json({
        message: "A user with this email already exists.",
      });
    }

    res.status(500).json({
      message: "Failed to create user.",
    });
  }
});

module.exports = router;