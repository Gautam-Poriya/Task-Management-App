// import Task from "../models/task-model.js";
const Task = require("../models/task");
//add new task
const addNewTask = async (req, res) => {
  const { title, description, status, userId, priority } = await req.body;

  //validate the shcema
  try {
    const newlyCreatedTask = await Task.create({
      title,
      description,
      status,
      userId,
      priority,
    });

    if (newlyCreatedTask) {
      return res.status(200).json({
        success: "true",
        message: "New task created successfully",
      });
    } else {
      return res.status(400).json({
        success: "false",
        message: "Error while creating New task created successfully",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: "false",
      message: "Some error occured while creating new task",
    });
  }
};

//get all task by user id

const getAllTasks = async (req, res) => {
  const { id } = req.params;
  const extractAllTaskByUserId = await Task.find({ userId: id });
  try {
    if (extractAllTaskByUserId) {
      return res.status(200).json({
        success: "true",
        message: "All tasks fetched successfully",
        tasksList: extractAllTaskByUserId,
      });
    } else {
      return res.status(400).json({
        success: "false",
        message: "Error while getting all tasks",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: "false",
      message: "Some error occured while creating new task",
    });
  }
};
//edit a task
const updateTask = async (req, res) => {
  const {title,description,status,priority,userId,_id}=await req.body;
  try{
    const updateTask=await Task.findByIdAndUpdate({
      _id,
    },{
      title,description,priority,status,userId
    },{new:true})

    if(updateTask){
       return res.status(200).json({
        success: "true",
        message: "task Updataed  successfully",
        // tasksList: extractAllTaskByUserId,
      });
    }else{
       return res.status(400).json({
      success: "false",
      message: "Some error occured while Upadate The  task",
    });
    }

  }catch(error){
     console.log(error);
    return res.status(500).json({
      success: "false",
      message: "Some error occured while Update The  task",
    });
  }
};
//delete a task
const deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    if (!id) {
      return res.status(400).json({
        success: "false",
        message: "Task Id Is Required",
      });
    }
    const deleteTask = await Task.findByIdAndDelete(id);
    if (deleteTask) {
      return res.status(200).json({
        success: "True",
        message: "Task Deleted Successfully",
      });
    }else{
       return res.status(400).json({
      success: "false",
      message: "Some error occured while  Delete The  task",
    });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: "false",
      message: "Some error occured while  Delete The  task",
    });
  }
};

module.exports = {
  addNewTask,
  getAllTasks,
  updateTask,
  deleteTask,
};
