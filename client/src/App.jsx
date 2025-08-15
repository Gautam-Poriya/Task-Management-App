import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AuthPage from './pages/auth'
import TasksPage from './pages/tasks'
import ScrumBoardPage from './pages/scrum-board'
import CommonLayout from './components/common-layout'
import {Router,Routes,Route} from 'react-router-dom'
function App() {
 

  return (
   <Routes>
    <Route path="/" element={<AuthPage/>}/>
    <Route path="/tasks" element={<CommonLayout/>}>
    <Route path="list" element={<TasksPage/>}/>
     <Route path="scrum-board" element={<ScrumBoardPage/>}/>
    </Route>
   </Routes>
  )
}

export default App
