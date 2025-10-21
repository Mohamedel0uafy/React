import React, { useState } from 'react'

function TodoList(){
    
    const [taskes, setTasks] =useState(["eat" ,"sleep" ,"play"]);
    const[newTask, setNewTask] =useState("")

    return(
    <div className='todo'>
        <h1>TODOLIST</h1>
        <div>
            <input type="text" placeholder='enter a task' value={newTask} onChange={handlechange} />
            <button className='btn' onClick={AddTask}>
                Add
            </button>
        </div>
        <ol>
            {taskes.map((task, index) => (
                <li key={index} >
                     <span className='text'>{task}</span>
                     <button onClick={()=>hdelete(index)}>delete</button>
                </li>
            ))}
           
        </ol>
    </div>
)



function handlechange(event){
    setNewTask(event.target.value);
}

function AddTask(){

}

function hdelete(){
    
}

}




export default TodoList;