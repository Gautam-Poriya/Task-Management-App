
import axios from 'axios';

export const callRegisterUserApi=async (formData)=>{
    const response=await axios.post('https://task-management-app-uwh9.onrender.com/api/user/register',formData,{
        withCredentials: true,
    })

    return response?.data;
}

export const callLoginUserApi=async (formData)=>{
    const response=await axios.post('https://task-management-app-uwh9.onrender.com/api/user/login',formData,{
        withCredentials: true,
    })

    return response?.data;
}

export const callUserAuthApi=async ()=>{
    const response=await axios.post('https://task-management-app-uwh9.onrender.com/api/user/auth',{},{
         withCredentials: true,
    })
    return response?.data;
}

export const callLogOutApi=async()=>{
    const response =await axios.post('https://task-management-app-uwh9.onrender.com/api/user/logout',{},{
        withCredentials: true,
    })
    return response?.data;
};

export const addNewTaskApi=async (formData) => {
    const response=await axios.post('https://task-management-app-uwh9.onrender.com/api/task/add-new-task',formData)
    return response?.data;
}
export const getAllTaskApi=async(getCurrentUserId)=>{
    console.log(getCurrentUserId,"user id from fronted")
     const response=await axios.get(`https://task-management-app-uwh9.onrender.com/api/task/get-all-tasks-by-userid/${getCurrentUserId}`)
     console.log("response of all Task",response)
    return response?.data;
}
export const updateTaskApi=async(formData)=>{
     const response=await axios.put(`https://task-management-app-uwh9.onrender.com/api/task/update-task`,formData)
     console.log("response of Update Task",response)
    return response?.data;
}
export const deleteTaskApi=async(getCurrentUserId)=>{
     const response=await axios.delete(`https://task-management-app-uwh9.onrender.com/api/task/delete-task/${getCurrentUserId}`)
     console.log("response of delete Task",response)
    return response?.data;
}