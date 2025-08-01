import React from "react";
import CommonCard from "@/components/common-card";
import CommonButton from "@/components/common-button";
import { scrumBoardOptions } from "@/config";
function TaskItem({
  item,
  handleDelete,
  setShowDialog,
  setCurrentEditedId,
  taskFormData,
}) {
  return (
    <CommonCard
      title={item?.title}
      description={scrumBoardOptions.find(boardOptions=>boardOptions.id===item?.status).label}
      footerContent={
        <div className="flex w-full justify-between items-center">
          <CommonButton
            buttonText={"Edit"}
            onClick={() => {
              setShowDialog(true);
              setCurrentEditedId(item?._id);
              taskFormData.setValue("title", item?.title);
              taskFormData.setValue("description", item?.description);
              taskFormData.setValue("status", item?.status);
              taskFormData.setValue("priority", item?.priority);
            }}
          />
          <CommonButton
            buttonText={"Delete"}
            onClick={() => handleDelete(item?._id)}
          />
        </div>
      }
    />
  );
}

export default TaskItem;
