
import axios from 'axios';

export const callRegisterUserApi=async (formData)=>{
    const response=await axios.post('http://localhost:5001/api/user/register',formData,{
        withCredentials: true,
    })

    return response?.data;
}

export const callLoginUserApi=async (formData)=>{
    const response=await axios.post('http://localhost:5001/api/user/login',formData,{
        withCredentials: true,
    })

    return response?.data;
}

export const callUserAuthApi=async ()=>{
    const response=await axios.post('http://localhost:5001/api/user/auth',{},{
         withCredentials: true,
    })
    return response?.data;
}

export const callLogOutApi=async()=>{
    const response =await axios.post('http://localhost:5001/api/user/logout',{},{
        withCredentials: true,
    })
    return response?.data;
};

export const addNewTaskApi=async (formData) => {
    const response=await axios.post('http://localhost:5001/api/task/add-new-task',formData)
    return response?.data;
}
export const getAllTaskApi=async(getCurrentUserId)=>{
    console.log(getCurrentUserId,"user id from fronted")
     const response=await axios.get(`http://localhost:5001/api/task/get-all-tasks-by-userid/${getCurrentUserId}`)
     console.log("response of all Task",response)
    return response?.data;
}
export const updateTaskApi=async(formData)=>{
     const response=await axios.put(`http://localhost:5001/api/task/update-task`,formData)
     console.log("response of Update Task",response)
    return response?.data;
}
export const deleteTaskApi=async(getCurrentUserId)=>{
     const response=await axios.delete(`http://localhost:5001/api/task/delete-task/${getCurrentUserId}`)
     console.log("response of delete Task",response)
    return response?.data;
}