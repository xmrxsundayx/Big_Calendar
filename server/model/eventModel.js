const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
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

const Event = mongoose.model("Event", EventSchema);

module.exports = Event;