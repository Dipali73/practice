import React from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks';
import { useState } from "react"
import Task from './components/Task';
import AddTask from './components/AddTask';
import Table from './components/Table';

function App() {
  const [showAddTask, setShowAddTask] = useState
  (false)
  const [tasks,setTasks] = useState([
    {
        id:1,
        text :'Doctors Appointment',
        day:'Feb 5th at 2.30',
        reminder :true,
    },
    {
        id:2,
        text :'Bts Concert',
        day:'Feb 6th at 3.30',
        reminder :true,
    },
    {
        id:3,
        text :'Namjoon LIVE',
        day:'Feb 7th at 7.30',
        reminder :false,
    }
])
// Add Tasks
const addTask =(task) =>{
 const id = Math.floor(Math.random() * 
 1000) + 1
 const newTask ={ id,...task }
 setTasks([...tasks,newTask])
}

// Delete Tasks
const deleteTask = (id) => {
setTasks(tasks.filter((task) => task.id !==id
))
}
  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) => 
    task.id === id ? { ...task , reminder : 
      !task.reminder}: task
    )
    )
  }
  const onAdd= () =>{
    console.log("123")
    setShowAddTask(!showAddTask)
  }
  return (
    <div className="container">
      
      <Header  onAdd={() => setShowAddTask (!showAddTask)} 
      showAdd={showAddTask} />
      {showAddTask && <AddTask  onAdd={addTask}  / >}

      {tasks.length> 0 ? <Tasks showAddTask={showAddTask} tasks={tasks}  onDelete={deleteTask}  onToggle={toggleReminder}/>
       : 'No Tasks to show'}
      
       {/* <Table /> */}
    </div>
  );
}


export default App;
