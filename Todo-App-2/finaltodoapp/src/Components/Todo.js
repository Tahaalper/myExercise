import React,{useState} from "react";

const Todo =(props)=>{
    const {todo, setTodos, todos} = props;
    const tarih = new Date(todo.createdAt);
    const [isEdit,setIsEdit]=useState(false);
    const [updatedText,setUpdatedText]=useState(todo.text);
    const handleDelete =()=>{
        const tempArray = todos.filter(item=>item.id !== todo.id)
        setTodos([...tempArray])
    }
    const handleDone =()=>{
        const newTodo ={
            ...todo,
            isDone : !todo.isDone
        }
        const tempArray = todos.filter(item=>item.id !== todo.id)
        setTodos([...tempArray,newTodo])
    }
    const handleEdit=()=>{
        const newTodo ={
            ...todo,
            text : updatedText
        }
        const tempArray = todos.filter(item=>item.id !== todo.id)
        setTodos([...tempArray,newTodo])
        setIsEdit(false);
    }
    return(
        <div className={`alert d-flex justify-content-between align-items-center alert-${todo.isDone === false ?("secondary"):("success")}`}>
            <div className="mb-4">
                {
                    isEdit === false ? (<h1 className={`text-decoration-${todo.isDone === false? ("none"):("line-through")}`}>{todo.text}</h1>)
                    :
                    (<div className="d-flex">
                        <input value={updatedText}
                        onChange={(event=>setUpdatedText(event.target.value))}/>
                        <button onClick={handleEdit} className="btn btn-sm btn-primary">save</button>
                    </div>)
                }
                    <small>{tarih.toLocaleString()}</small>
            </div>
            <div style={{gap: "5px"}} className="btn-group">
                <button style={{color: "white"}} className={`btn btn-sm shadow-sm btn-${todo.isDone === false? ("success"):("warning")}`}
                onClick={handleDone}
                >
                {
                    todo.isDone === false ? (
                        "done"
                    ):(
                        "undone"
                    )
                }
                </button>
                <button onClick={()=>{setIsEdit(!isEdit)
                if(isEdit === true){
                    setUpdatedText(todo.text)
                }}} className="btn btn-sm shadow-sm btn-secondary">
                    {
                        isEdit === false? "edit" : "cancel"
                    }
                </button>
                <button onClick={handleDelete} className="btn btn-sm shadow-sm btn-danger">Delete</button>
            </div>
        </div>
    )
}
export default Todo;