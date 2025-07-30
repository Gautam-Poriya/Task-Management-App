import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
// import { Toaster } from './components/ui/sonner.jsx'
import { Toaster } from "sonner";
import TaskManagerProvider from './context'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <TaskManagerProvider>
    <App />
    <Toaster/>
    </TaskManagerProvider>
  </BrowserRouter>,
)
