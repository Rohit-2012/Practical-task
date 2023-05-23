import './App.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from './components/home/Home'
import Contact from './components/contact/Contact';
import Task from './components/task/Task';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/task' element={<Task/>}/>
      </>
    )
  )
  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
