const Tasks = require('../model/taskModel');

module.exports = {
    createTask: (req, res) => {
        Tasks.create(req.body)
            .then(newTask => res.json(newTask))
            .catch(err => res.json(err));
    },
    getAllTasks: (req, res) => {
        Tasks.find()
            .then(allTasks => res.json(allTasks))
            .catch(err => res.json(err));
    },
    getOneTask: (req, res) => {
        Tasks.findById(req.params.id)
            .then(oneTask => res.json(oneTask))
            .catch(err => res.json(err));
    },
    updateTask: (req, res) => {
        Tasks.findOneAndUpdate({_id:req.params.id}, req.body, { new: true, runValidators: true })
            .then(updatedTask => res.json(updatedTask))
            .catch(err => res.json(err));
    },
    deleteTask: (req, res) => {
        Tasks.findByIdAndDelete(req.params.id)
            .then(result => res.json(result))
            .catch(err => res.json(err));
    }
}
