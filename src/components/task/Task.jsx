import React, { useState } from 'react'
import Navbar from '../navbar/Navbar'
import styles from './Task.module.css'

function Task() {
    const [task, setTask] = useState('')
    const [taskList, setTaskList] = useState([])
    const [toggle, setToggle] = useState(true)
    const [update, setUpdate] = useState(null)

    const handleAdd = ()=>{
      if(!task){
        return
      }else if(task && !toggle){
        setTaskList(taskList.map((ele)=>{
          if(ele.id===update){
            return {...ele, task:task}
          }
          return ele
        }))
        setTask('')
        setToggle(true)
      }else{
        setTaskList([...taskList, {task:task, id: new Date().getTime().toString()}])
        setTask('')
      }
    }

    const handleDelete= (id)=>{
      const newTaskList = taskList.filter((ele)=>ele.id !== id)
      setTaskList(newTaskList)
    }

    const handleUpdate = (id)=>{
      let newTask = taskList.find((ele)=>ele.id === id)
      setTask(newTask.task);
      setToggle(false)
      setUpdate(id)
    }

  return (
    <>
    <Navbar/>
    <div className={styles.mainDiv}>
        <div className={styles.inputDiv}>
      <input type="text" value={task} onChange={(e)=>setTask(e.target.value)}/>
      {
        toggle?<button onClick={handleAdd}>Add</button>:
        <button onClick={handleAdd}>Save</button>
      }
        </div>
        <div className={styles.listDiv}>
        {taskList.map((ele)=>{
            return(
                <li  key={ele.id}>
                    <span>{ele.task}</span>
                    <button onClick={()=>handleDelete(ele.id)}>❌</button>
                    <button onClick={()=>handleUpdate(ele.id)}>Update</button>
                </li>
            )
        })}
        </div>
    </div>
    </>
  )
}

export default Task
