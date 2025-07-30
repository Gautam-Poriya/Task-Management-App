import {createContext,useState,useEffect} from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { callUserAuthApi } from '@/services'


export const TaskManagerContext=createContext(null);

function TaskManagerProvider({children}){
    const navigate=useNavigate();
    const location=useLocation();
    const [user,setUser]=useState(null);
    useEffect(()=>{
        const verifyUserCookie=async()=>{
            const data=await callUserAuthApi();
            if(data?.userInfo){
                setUser(data.userInfo);

            }
            return data?.success ?navigate('/tasks/list') :navigate('/auth')
        }

        verifyUserCookie();
    },[navigate,location.pathname])
    return <TaskManagerContext.Provider>{children}</TaskManagerContext.Provider>
}


export default TaskManagerProvider;