const TaskController = require('../controller/taskController');
module.exports = (app) => {
    // Create
    app.post('/api/task', TaskController.createTask);
    // Read (all)
    app.get('/api/task', TaskController.getAllTasks);
    // Read (one)
    app.get('/api/task/:id', TaskController.getOneTask);
    // Update
    app.patch('/api/task/:id', TaskController.updateTask);
    // Delete
    app.delete('/api/task/:id', TaskController.deleteTask);
}