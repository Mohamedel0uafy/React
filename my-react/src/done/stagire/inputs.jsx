import  react from 'react';
import {useState} from 'react';

function input(){

    const [task,setTask]= useState("");
    const [todos,setTodos]= useState([]);

    return(
    <div className="container mt-5">

        <div className="mb-3 d-flex">
            <input type="text" className="form-control" style={{ width: '200px' }} value={task} onChange={handleChange} /> Filter
        </div>
        <div className="mb-3 d-flex">
            <input type="text" className="form-control" style={{ width: '200px' }} value={task} onChange={handleChange} /> Search
        </div>
       
        
        
    </div>
)

function handleChange(e){
    setTask(e.target.value);
}



function handleDelete(index){
    const newTodos = todos.filter((todo, i) => i !== index);
    setTodos(newTodos);
}
}






export default input;