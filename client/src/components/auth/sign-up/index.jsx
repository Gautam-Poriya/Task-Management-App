import { singUpFormControls } from '@/config/index.js'
import CommonForm from '../../common-form'
import React from 'react'
import { useForm } from 'react-hook-form'
import { callRegisterUserApi } from '@/services/index.js'
// import { useToast } from "@/components/ui/sonner.jsx";
import { toast } from "sonner";

import { useNavigate } from 'react-router-dom'
function SignUp() {
  const formData=useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
     
    }
  })

  // const {toast} =toast();
  const navigate=useNavigate();
  async function handleSubmit(getData){
    console.log(getData);

    const data=await callRegisterUserApi(getData);
    console.log(data);

    if(data?.success){
        toast({
          title:'User register successful',
          description:'Welcome to Task Management App',
        })
        navigate('/tasks/list');
    }else{
      toast({
        title:'error',
        description:data?.message || 'Something went wrong',
      })
    }
  }
  return (
    <div>SignUp
      <CommonForm form={formData} handleSubmit={handleSubmit} formControls={singUpFormControls} btnText={'Sign Up'}/>
    </div>
  )
}

export default SignUp