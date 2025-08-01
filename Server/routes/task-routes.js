const express=require('express');
const taskRouter=express.Router()
const { addNewTask,
    getAllTasks,
    updateTask,
    deleteTask} = require('../controllers/task-controller');

taskRouter.post('/add-new-task',addNewTask);

taskRouter.get('/get-all-tasks-by-userid/:id',getAllTasks);

// taskRouter.post('/add',addNewTask);

// taskRouter.post('/add',addNewTask);

module.exports=taskRouter