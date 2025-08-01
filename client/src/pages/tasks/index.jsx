import React from "react";
import { Fragment } from "react";
import { useState, useEffect } from "react";
import CommonButton from "@/components/common-button";
import AddNewTask from "@/components/tasks/add-new-tasks";
import { TaskManagerContext } from "@/context";
import { useContext } from "react";
import { deleteTaskApi, getAllTaskApi } from "@/services";
import { addNewTaskApi,updateTaskApi } from "@/services";
import { Skeleton } from "@/components/ui/skeleton";
import TaskItem from "@/components/tasks/task-item";
export default function TasksPage() {
  const [showDialog, setShowDialog] = useState(false);
  const {
    loading,
    setLoading,
    taskList,
    setTaskList,
    user,
    taskFormData,
    setCurrentEditedId,
    currentEditedId,
  } = useContext(TaskManagerContext);

  async function fetchListOfTasks() {
    setLoading(true);
    const response = await getAllTaskApi(user?._id);
    console.log(response);
    console.log("response of gett all task from db", response);

    if (response?.success) {
      setTaskList(response?.tasksList);
      setLoading(false);
    }
  }

  async function handleSubmit(getData) {
    console.log(getData, user);
    const response =currentEditedId!==null?await updateTaskApi({
      ...getData,
      _id:currentEditedId,
      userId:user?._id
    }) : await addNewTaskApi({
      ...getData,
      userId: user?._id,
    });

    if (response) {
      fetchListOfTasks();
      setShowDialog(false);
      taskFormData.reset();
      setCurrentEditedId(null)
    }
  }

  console.log(taskList);
  async function handleDelete(getTaskId) {
    console.log(getTaskId);
    const response = await deleteTaskApi(getTaskId);
    if (response?.success) {
      fetchListOfTasks();
    }
  }
  useEffect(() => {
    if (user !== null) fetchListOfTasks();
  }, [user]);
  if (loading) {
    return (
      <Skeleton
        className={"w-full h-[550px] rounded-[6px] bg-black opacity-50"}
      />
    );
  }
  return (
    <>
      <Fragment>
        <div className="mb-5">
          <CommonButton
            onClick={() => setShowDialog(true)}
            buttonText={"Add New Task"}
          />
        </div>
        <div className="mt-5 flex flex-col">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {taskList?.length > 0 ? (
              taskList.map((taskItem) => (
                <TaskItem
                  setShowDialog={setShowDialog}
                  item={taskItem}
                  handleDelete={handleDelete}
                  setCurrentEditedId={setCurrentEditedId}
                  taskFormData={taskFormData}
                   currentEditedId={currentEditedId}
                />
              ))
            ) : (
              <h1>No Task Added! Please Add One</h1>
            )}
          </div>
        </div>
        <AddNewTask
          showDialog={showDialog}
          handleSubmit={handleSubmit}
          setShowDialog={setShowDialog}
          taskFormData={taskFormData}
           currentEditedId={currentEditedId}
          setCurrentEditedId={setCurrentEditedId}
        />
      </Fragment>
    </>
  );
}
