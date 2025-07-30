import { signInFormCControls } from '@/config'
import React from 'react'
import CommonForm from '@/components/common-form'
import { useForm } from 'react-hook-form'
import { callLoginUserApi } from '@/services'

import { useNavigate } from 'react-router-dom'
function SignIn() {
  const navigate=useNavigate();
  const formData=useForm({
    defaultValues:{
      email:'',
      password:''
    }
  })

async  function handleSubmit(getData){
    console.log(getData);
    const data=await callLoginUserApi(getData);
    console.log(data);
    if(data?.success){
      navigate('/tasks/list')
    }
  }
  return (
    <div>
      <CommonForm btnText={'sign In'} 
      formControls={signInFormCControls}
      handleSubmit={handleSubmit}
      form={formData}
      />

    </div>
  )
}

export default SignIn