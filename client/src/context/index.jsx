import { createContext, useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { callUserAuthApi } from "@/services";
import { useForm } from 'react-hook-form';

export const TaskManagerContext = createContext(null);

function TaskManagerProvider({ children }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState(null);
  const [loading,setLoading]=useState(false);
  const [taskList,setTaskList]=useState([]);
  const taskFormData=useForm({
    defaultValues:{
      title:'',
      description:'',
      status:'',
      priority:''
    }
  })
  useEffect(() => {
    const verifyUserCookie = async () => {
      const data = await callUserAuthApi();
      if (data?.userInfo) {
        setUser(data.userInfo);
      }
      return data?.success
        ? navigate(
            location.pathname === "/auth" || location.pathname === "/"
              ? "/tasks/list"
              : `${location.pathname}`
          ): navigate("/auth")
    };

    verifyUserCookie();
  }, [navigate, location.pathname]);
  return <TaskManagerContext.Provider  value={{user,setUser,taskFormData,loading,setLoading,taskList,setTaskList}}>{children}</TaskManagerContext.Provider>;
}

export default TaskManagerProvider;
