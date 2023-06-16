const Event = require('../model/eventModel');

module.exports = {
    createEvent: (req, res) => {
        Event.create(req.body)
            .then(newEvent => res.json(newEvent))
            .catch(err => res.json(err));
    },
    getAllEvents: (req, res) => {
        Event.find()
            .then(allEvents => res.json(allEvents))
            .catch(err => res.json(err));
    },
    getOneEvent: (req, res) => {
        Event.findById(req.params.id)
            .then(oneEvent => res.json(oneEvent))
            .catch(err => res.json(err));
    },
    updateEvent: (req, res) => {
        Event.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
            .then(updatedEvent => res.json(updatedEvent))
            .catch(err => res.json(err));
    },
    deleteEvent: (req, res) => {
        Event.findByIdAndDelete(req.params.id)
            .then(result => res.json(result))
            .catch(err => res.json(err));
    }
}