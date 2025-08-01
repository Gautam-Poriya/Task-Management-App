import React from 'react'
import CommonCard from '@/components/common-card'
import CommonButton from '@/components/common-button'
function TaskItem({item}) {
  return (
   <CommonCard 
   title={item?.title}
   description={item?.status}
   footerContent={
    <div className='flex w-full justify-between items-center'>
        <CommonButton buttonText={'Edit'} />
          <CommonButton buttonText={'Delete'} />
    </div>
   }
   />
  )
}

export default TaskItem