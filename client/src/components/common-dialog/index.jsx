import React from 'react'
import {Dialog,DialogContent,DialogTitle} from '../ui/dialog'
import CommonForm from '../common-form'
function CommonDialog({showDialog, onOpenChange,formControls,btnText,handleSubmit,formData,title}) {
  return (
    <>
    <Dialog open={showDialog} onOpenChange={onOpenChange}>
        {/* <DialogContent className='max-w-screen h-[450px] overflow-auto'> */}
        <DialogContent className="w-full max-w-lg mx-auto h-[450px] overflow-auto bg-gray-300 dark:bg-zinc-900/90 text-black dark:text-white shadow-lg">

            <DialogTitle>
                {title}
            </DialogTitle>
            <div>
                <CommonForm
                formControls={formControls}
                form={formData}
                handleSubmit={handleSubmit}
                btnText={btnText}
                />
            </div>


        </DialogContent>
    </Dialog>
    </>
  )
}

export default CommonDialog