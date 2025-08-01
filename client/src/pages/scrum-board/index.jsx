import CommonCard from "@/components/common-card";
import { scrumBoardOptions } from "@/config";
import { TaskManagerContext } from "@/context";
import React, { useContext, useEffect } from "react";
import { getAllTaskApi, updateTaskApi } from "@/services";
export default function ScrumBoardPage() {
  const { user, setTaskList, taskList, setLoading } =
    useContext(TaskManagerContext);
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

  function onDragStart(event, getTaskId) {
    event.dataTransfer.setData("id", getTaskId);
  }
  async function updateTaskByStatus(findCurrentTask) {
    await updateTaskApi(findCurrentTask);
    await fetchListOfTasks();
  }
  function onDrop(event, getCurrentStatus) {
    const getDraggedTaskId = event.dataTransfer.getData("id");
    let findCurrentTask = taskList.find(
      (item) => item._id.toString() === getDraggedTaskId
    );
    findCurrentTask = {
      ...findCurrentTask,
      status: getCurrentStatus,
    };
    updateTaskByStatus(findCurrentTask);
  }
  function renderTaskByTaskStatus() {
    const taskStatuses = {
      todo: [],
      inProgress: [],
      blocked: [],
      review: [],
      done: [],
    };

    taskList.forEach((taskItem) => {
      if (!taskStatuses[taskItem.status]) {
        taskStatuses[taskItem.status] = [];
      }
      console.log(taskItem.status);
      taskStatuses[taskItem.status].push(
        <div
          key={taskItem?._id}
          onDragStart={
            taskItem.status !== "done"
              ? (event) => onDragStart(event, taskItem._id)
              : null
          }
          className="mb-2"
          draggable={taskItem?.status !== "done" ? true : false}
        >
          <CommonCard
            title={taskItem.title}
            description={scrumBoardOptions.find(boardOptions=>boardOptions.id===taskItem?.status).label}
            extraTextStyles={taskItem?.status === "done" ? "line-through" : ""}
          />
        </div>
      );
    });
    return taskStatuses;
  }

  useEffect(() => {
    if (user !== null) fetchListOfTasks();
  }, [user]);
  return (
    <>
      <div className="grid grid-cols-5 gap-2 h-full">
        {scrumBoardOptions.map((item) => (
          <div
            key={item.id}
            className="border border-[#333333] rounded overflow-auto"
            onDrop={(event) => onDrop(event, item.id)}
            onDragOver={(event) => event.preventDefault()}
          >
            <div className="px-1 py-3 text-center bg-black border-none mb-3">
              <h3 className="text-2xl font-extrabold text-white">
                {item.label}
              </h3>
            </div>
            <div className="p-3">{renderTaskByTaskStatus()[item.id]}</div>
          </div>
        ))}
      </div>
    </>
  );
}
