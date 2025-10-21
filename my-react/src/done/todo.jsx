import react,{useState} from "react";


function Todo() {

    const [task,setTask]= useState("");
    const [todos,setTodos]= useState([]);

    function handleChange(e){
        setTask(e.target.value);


    }








    return (
        <div className="container mt-5">
            <h1>Todo List</h1>
            <input type="text" className="form-control" value={task} onChange={handleChange} />
            <button className="btn btn-primary mt-2" onClick={()=>{
                setTodos([...todos,task]);
                setTask("");
            }}>Add Task</button>
            <ul className="list-group mt-3">
                {todos.map((t,index)=>(
                    <li key={index} className="list-group-item">{t}
                    <button className="btn btn-danger mt-2 align-" onClick={()=>{setTodos(todos.filter((_,i) => i !== todos.indexOf(_)))}}>Remove Task</button>

                    </li>
                    
                ))}
                

           </ul>

        </div>
    );
}

export default Todo;


