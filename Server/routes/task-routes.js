const express=require('express');
const taskRouter=express.Router()
const { addNewTask,
    getAllTasks,
    updateTask,
    deleteTask} = require('../controllers/task-controller');

taskRouter.post('/add-new-task',addNewTask);

taskRouter.get('/get-all-tasks-by-userid/:id',getAllTasks);

taskRouter.put('/update-task',updateTask);

 taskRouter.delete('/delete-task/:id',deleteTask);

module.exports=taskRouter