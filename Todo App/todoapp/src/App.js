import React,{useState,useEffect} from "react";
import Todo from "./Components/todo";
function App() {
  const [todoText,setTodoText]=useState("");
  const [todos,setTodos]=useState([]); //boş dizi verdik
  //localStorage.setItem("degisken ismi","merhaba localStorage")
  /*
  setItem değişken ismi + bellek
  getItem(key) verdiğimiz key'i localStorage'da arar
  removeItem(key) aldığı key'e sahip item'ı siler
  clear() parametre almaz localStorage'ı siler
  */

useEffect(()=>{
  const fromLocalStorage = localStorage.getItem("todos")
  console.log("fromLocalStorage",fromLocalStorage)
  if(fromLocalStorage === null){
    localStorage.setItem("todos",JSON.stringify([]))
}else{
  setTodos(JSON.parse(fromLocalStorage))// parse = ayrıştır : yazı formatından normal formatlara çevir
}
},[])
  const handleSubmit =(event)=>{
    event.preventDefault();
    if(todoText === ""){
      alert("todo text can't be empty!");
      return
    };
    const todo={
      id:new Date().getTime(),//to have a unique id we use time
      //getTime() gives us the time since passed away from 1970 january 1st
      //and we need an identity to determine where we assigning the functions
      text: todoText,// todos must have a text
      isDone: false,// todos must have an attribute to determine the situation of themselves
      createdAt:new Date(),
    };
    setTodos([...todos,todo]);
    localStorage.setItem("todos",JSON.stringify
    ([...todos,todo]));
    setTodoText("");
  };
  return (
    <div className="container p-5">
      <h1 className="text-center my-3">Todo App</h1>
     <form onSubmit={handleSubmit}> 
      <div className="input-group mb-3 ">
        <input 
            type="text" 
            className="form-control" 
            placeholder="Add ToDo"
            value={todoText}
            onChange={event=>setTodoText(event.target.value)}
          />
      <button 
        className="btn btn-primary" type="submit">
          add
      </button>
    </div>
     </form>
     <div>
      {
        todos.length !== 0 ? // if todos list is not empty (0)
        //(Do that): else (do that)
        (//if
          <div>
            {
              todos.map(todo=>( //arrow and brace = we use return() func
                <Todo 
                key={todo.id} 
                todo={todo} 
                todos={todos}
                setTodos={setTodos} //we send the info and the funcs to the component
                />
              ))
            }
          </div>
        ):(//else
          <p className="text-center my-5">you dont have any todos yet</p>
        )
      }
     </div>
    </div>
  );
}

export default App;
