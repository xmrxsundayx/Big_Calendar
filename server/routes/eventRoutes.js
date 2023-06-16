const EventController = require('../controller/eventController');
module.exports = (app) => {
    // Create
    app.post('/api/event', EventController.createEvent);
    // Read (all)
    app.get('/api/event', EventController.getAllEvents);
    // Read (one)
    app.get('/api/event/:id', EventController.getOneEvent);
    // Update
    app.patch('/api/event/:id', EventController.updateEvent);
    // Delete
    app.delete('/api/event/:id', EventController.deleteEvent);
}