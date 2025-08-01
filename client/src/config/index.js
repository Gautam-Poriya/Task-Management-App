export const singUpFormControls = [
  {
    id: "name",
    label: "Name",
    placeholder: "Enter Your Name",
    componentType: "input",
    type: "text",
  },
  {
    id: "email",
    label: "Email",
    placeholder: "Enter Your Email",

    componentType: "input",
    type: "email",
  },
  {
    id: "password",
    label: "Password",
    placeholder: "Enter Your Password",
    componentType: "input",
    type: "password",
  },
];

export const signInFormCControls=[
     {
    id: "email",
    label: "Email",
    placeholder: "Enter Your Email",
    componentType: "input",
    type: "email",
  },
  {
    id: "password",
    label: "Password",
    placeholder: "Enter Your Password",
    componentType: "input",
    type: "password",
  },
]

export const scrumBoardOptions=[
  {
    id:'todo',
    label:"To Do",
  },
  {
    id:'In Progress',
    label:"In Progress",
  },
  {
    id:'Blocked',
    label:"Blocked",
  },
  {
    id:'review',
    label:"review",
  },
  {
    id:'Done',
    label:"Done",
  },
]

export const addNewTaskFormControls=[
  {
    id:"title",
    type:"text",
    placeholder:"Enter title",
    label:"Title",
    componentType:"input"
  },
   {
    id:"description",
    type:"text",
    placeholder:"Enter Descrtiption",
    label:"Description",
    componentType:"input"
  },
   {
    id:"status",
   
    placeholder:"Enter Status",
    label:"Status",
    componentType:"select",
    options:scrumBoardOptions
  },
  
   {
    id:"priority",
    placeholder:"Enter Priority",
    label:"Priority",
    componentType:"input",
    componentType:"select",
    options:[
      {
        id:'low',
        label:'Low'
      },
       {
        id:'medium',
        label:'Medium'
      },
       {
        id:'high',
        label:'High'
      },
    ]
  },
  
]