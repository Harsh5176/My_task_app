const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const my_note = require('./my_note.js');


mongoose.connect('mongodb+srv://HarshVekariya:HarshVekariya@cluster0.e3uqskg.mongodb.net/my_note', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("Database connected"))
.catch(err => console.error("Database connection error:", err));

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());  // Use this to handle JSON requests
app.use(cors());  // CORS middleware for connect backend and frontend


app.post('/notes', async (req, res) => {
    try {
        const { id, Note, date } = req.body;

        const newNotes = new my_note({
            id,
            Note,
            date
        });

        const savedNote = await newNotes.save();
        res.status(201).send(savedNote);
    } catch (error) {
        console.error("Error creating note:", error);
        res.status(500).send({ message: "Internal Server Error" });
    }
});

// Get all notes
app.get('/notes', async (req, res) => {
    try {
        const notes = await my_note.find();
        res.status(200).send(notes);
    } catch (error) {
        console.error("Error fetching notes:", error);
        res.status(500).send({ message: "Internal Server Error" });
    }
});

// Get note by ID
app.get('/notes/:id', async (req, res) => {
    try {
        const note = await my_note.findOne({ id: req.params.id });
        if (!note) {
            return res.status(404).send({ message: "Note not found" });
        }
        res.status(200).send(note);
    } catch (error) {
        console.error("Error fetching note:", error);
        res.status(500).send({ message: "Internal Server Error" });
    }
});

// Delete note by ID
app.delete('/notes/:id', async (req, res) => {
    try {
        const result = await my_note.deleteOne({ id: req.params.id });
        if (result.deletedCount === 0) {
            return res.status(404).send({ message: "Note not found to delete" });
        }
        res.status(200).send({ message: "Note deleted successfully" });
    } catch (error) {
        console.error("Error deleting note:", error);
        res.status(500).send({ message: "Internal Server Error" });
    }
});

// Update note by ID
app.patch('/notes/:id', async (req, res) => {
    try {
        const { Note, date } = req.body;

        const updatedNote = await my_note.findOneAndUpdate(
            { id: req.params.id },
            { Note, date },
            { new: true }  // This returns the updated document
        );

        if (!updatedNote) {
            return res.status(404).send({ message: "Note not found to update" });
        }

        res.status(200).send(updatedNote);
    } catch (error) {
        console.error("Error updating note:", error);
        res.status(500).send({ message: "Internal Server Error" });
    }
});


app.listen(5500, () => {
    console.log('Server started on port 5500');
});
