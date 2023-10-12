import React,{useState} from "react";
import axios from "axios";
const Todo =(props)=>{ 
    const handleDelete=()=>{
        axios.delete(`http://localhost:3004/todos/${todo.id}`)
        .then(response=>{
            console.log(response)
            const excludedArray=todos.filter(item=>item.id !== todo.id)
            setTodos(excludedArray)
        }
        )
    }
    const {todo,todos,setTodos}=props;
    const [editText,setEditText]=useState(todo.text);
    const handleEdit =()=>{
        const updatedTodo ={
            ...todo,
            text:editText
        }
        axios.put(`http://localhost:3004/todos/${todo.id}`,updatedTodo)
        .then(response=>{
            console.log(response)
            const excludedArray = todos.filter((item)=>item.id !== todo.id)
            setTodos([...excludedArray,updatedTodo])
        })
        .catch(err=>console.log("error",err))
    }
    return(
        <div>
            <h1>{todo.text}</h1>
            <div>
                <input value={editText} onChange={event=>setEditText(event.target.value)}/>
                <button onClick={handleEdit}>edit</button>
            </div>
            <button onClick={handleDelete}>delete</button>
        <hr/>
      </div>
        )
}
export default Todo;