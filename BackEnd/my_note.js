const mongoose = require('mongoose');

// Schema for notes
const noteSchema = new mongoose.Schema({
    id: { type: String, required: true },
    Note: { type: String, required: true },
    date: { type: Date, default: Date.now }
});

// Create the model
const my_note = mongoose.model('Note', noteSchema);

module.exports = my_note;
