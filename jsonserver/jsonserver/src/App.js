import React,{useState,useEffect} from "react";
import axios from "axios";
import Todo from "./Components/Todo";
function App() {
  const [todos,setTodos]=useState([])
  const [text,setText]=useState("")
  useEffect(()=>{
    axios.get("http://localhost:3004/todos")
    .then(response=>{
      console.log(response.data)
      setTodos(response.data)
    })//cevap gelirse
    .catch(error=>{
      console.log(error)
    })//hata olursa
  },[])
  const handleSubmit=(event)=> {
    event.preventDefault();
    if(text===""){
      alert("todo text can't be empty")
      return
    }
    const newTodo={
      id: String(new Date().getTime()),
      text: text,
      isDone: false,
      date:new Date()
    }
    axios.post("http://localhost:3004/todos",newTodo)
    .then(response=>{
      console.log("post response",response)
      setTodos([...todos,newTodo])
      setText("")
    })
    .catch(err=>console.log(err))
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={text} onChange={(event=>setText(event.target.value))}/>
        <button type="submit">add</button>
      </form>
      {
        todos.map(todo=>(
          <Todo key={todo.id}
          todo={todo}
          todos={todos}
          setTodos={setTodos}/>
        ))
      }
    </div>
  );
}

export default App;
