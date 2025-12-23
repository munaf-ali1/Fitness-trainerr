import express from "express";
import User from "../models/User.model.js";

const router = express.Router();

// POST API
router.post("/join-training", async (req, res) => {
  try {
    const { name, contact, email, message } = req.body;

    if (!name || !contact || !email) {
      return res.status(400).json({
        success: false,
        message: "All required fields are mandatory",
      });
    }

    await User.create({
      name,
      contact,
      email,
      message,
    });

    res.status(201).json({
      success: true,
      message: "Training data saved successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
});

export default router;

