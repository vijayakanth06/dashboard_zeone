const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    constraints: { type: [String], required: true },
    sampleTestCase: { type: String, required: true },
    sampleOutput: { type: String, required: true },
    answer: { type: String, required: true },
    date: { type: String, required: true }, // Date in YYYY-MM-DD format
    time: { type: String, required: true }, // Time in HH:MM:SS format
});

module.exports = mongoose.model('Question', questionSchema);
