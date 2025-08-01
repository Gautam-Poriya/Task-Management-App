import React from 'react'
import CommonDialog from '@/components/common-dialog'
import { TaskManagerContext } from '@/context'
import { addNewTaskApi } from '@/services';
import { useContext } from 'react';
import {addNewTaskFormControls} from '@/config'
function AddNewTask({showDialog,setShowDialog,handleSubmit,taskFormData}) {
    
  return (
    <>
    <CommonDialog
    formControls={addNewTaskFormControls}
    showDialog={showDialog}
    setShowDialog={setShowDialog}
    title={'Post New Task'}
    btnText={'Add'}
    handleSubmit={handleSubmit}
    formData={taskFormData}
    />
    </>
  )
}

export default AddNewTask