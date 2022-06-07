import React, {useState} from 'react'
import TodoChild from '../components/TodoChild';

function Todo() {
const [taskName, setTaskName]= useState ('');
const [taskList, setTaskList]= useState ([]);

 const addTask = () => {
    setTaskList([...taskList, {task:taskName}])
    setTaskName('')
 }
console.log (taskName)
  return (
    <div>
    
    <h1>Todo</h1>

    <input type='text'
      id='task'
     placeholder='' 
     onChange={(e)=> {setTaskName(e.target.value); }} />
    <button onClick={addTask}>Add task</button>

   {taskList.map((task) => {
   return <TodoChild taskName={task.task}/>
   })}
    <TodoChild/>
    </div>
  )
}

export default Todo;