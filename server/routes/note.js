import express from "express";
import Note from "../models/note.js";
import  protect  from "../middleware/authmiddleware.js";

const router = express.Router();

// Get all notes for logged in user
router.get("/", protect, async (req, res) => {
  const notes = await Note.find({ user: req.user._id }).sort({ createdAt: -1 });
  res.json(notes);
});

// Add new note
router.post("/", protect, async (req, res) => {
  const { title, content } = req.body;
  const note = new Note({ user: req.user._id, title, content });
  const createdNote = await note.save();
  res.status(201).json(createdNote);
});

// Delete note
router.delete("/:id", protect, async (req, res) => {
  await Note.findByIdAndDelete(req.params.id);
  res.json({ message: "Note deleted" });
});

export default router;