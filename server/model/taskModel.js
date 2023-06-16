const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        minlength: [2, "Title must be at least 2 characters long"]
    },
    start: {
        type: Date,
        // required: [true, "Start date is required"]
    },
    end: {
        type: Date,
        // required: [true, "End date is required"]
    },
}, { timestamps: true });

module.exports = mongoose.model("Task", TaskSchema);