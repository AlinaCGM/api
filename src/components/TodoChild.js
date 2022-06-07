import React from 'react'
import '../App.css'

function TodoChild({taskName}) {
  return (
    <div className='child'> 

   <h2>TaskName: {taskName}</h2> 
    </div>
  );
}

export default TodoChild;