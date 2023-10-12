import React,{useState} from "react";
import Todo from "./Components/Todo.js";
function App() {
  const [todoText,setTodoText]=useState("");
  const [todos, setTodos]=useState([]);
  const handleSubmit =(event)=>{
     event.preventDefault();
     if(todoText === ""){
      alert("todo text cant be empty");
      return
     }
     const todo ={
      id: new Date().getTime(),
      createdAt : new Date(),
      isDone: false,
      text: todoText
    }
    setTodos([...todos,todo])
    setTodoText("")
  }
  return (
    <div className="container p-5">
      <h1 className="text-center my-3">todoApp</h1>
      <form onSubmit={handleSubmit}> 
        <div className="input-group mb-3">
          <input 
          type="text" 
          className="form-control" 
          placeholder="Type your todo" 
          value={todoText}
          onChange={(event)=>{setTodoText(event.target.value)
          }}
          />
          <button className="btn btn-primary">
            Add
            </button>
        </div>
        </form>
        <div>
            {
              todos.length === 0 ? 
              (
                <p>you don't have any todo's yet</p>
              ):(
                todos.map(todo=>(
                  <Todo
                  key={todo.id}
                  todo={todo}
                  todos={todos}
                  setTodos={setTodos}
                  />

                ))
              )
            }
          </div>
    </div>
  );
}

export default App;
