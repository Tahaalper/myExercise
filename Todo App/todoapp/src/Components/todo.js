import React,{useState} from "react";

const Todo = (props)=>{
    const handleDoneBtn =()=>{
        const newTodo={
         ...todo, //...todo = inherits all values of todo
         isDone: !todo.isDone,// we can still change a value if we want or add others
        }
      const excludedArray = todos.filter(item=>item.id !== todo.id);
      const newArray=[...excludedArray,newTodo];
      setTodos(newArray);
    }
    const {todo, todos,setTodos} = props; //we welcomed the infos, funcs etc. here
    const [isEdit,setIsEdit]=useState(false);
    const [updatedText,setUpdatedText]=useState(todo.text);
    const tarih = new Date(todo.createdAt);
    const handleDelete =()=>{
        const temporaryArray = todos.filter(item=> item.id !== todo.id)
        //if item.id doesn't match with todo id if will pass the filter and
        //may be in the our new temporaryArray
        //aldığımız id dışındakileri filtreledik...
        setTodos(temporaryArray);
        localStorage.setItem("todos",JSON.stringify(
            temporaryArray
        ))
    };
 
    const handleEdit=()=>{
        const newTodo={
            ...todo,
            text:updatedText
        }
                /*const excludedArray=todos.filter(item=>item.id !== todo.id)
        setTodos([...excludedArray,newTodo])*/// bu şekilde sıraların değişmesine neden olduk
        // sıraların değişmediği bir farklı versiyonu şu şekilde yapabiliriz:
        const updatedArray=[]
        for(let i=0;i<todos.length;i++){
            if(newTodo.id===todos[i].id){
                updatedArray.push(newTodo)
            }else{
                updatedArray.push(todos[i])
            }
    }
    setTodos(updatedArray);
    setIsEdit(false) // with this way the queue didnt change
}
    return(
    <div className={`d-flex align-items-center justify-content-between alert alert-${todo.isDone === false ? "secondary" : "success"}`}>
        <div>
            {
                isEdit === false? ( <h1 className={`${todo.isDone === false ? "" : "text-decoration-line-through"}`}>{todo.text}</h1>)
                :(
                <div className="d-flex">
                    <input value={updatedText} onChange={(event)=>setUpdatedText(event.target.value)}/>
                    <button onClick={handleEdit} className="btn btn-sm btn-outline-primary">Save</button>
                </div>)}
            <small>{tarih.toLocaleDateString()}</small>
        </div>
        <div>
            <div className="btn-group">
                <button onClick={handleDoneBtn} type="button" className="btn btn-sm btn-success">
                    {
                        todo.isDone === false ? "Done" :"Undone" 
                    }
                </button>
                <button 
                    type="button" 
                    className="btn btn-sm btn-secondary"
                    onClick={()=>{setIsEdit(!isEdit)
                    if(isEdit===true){
                        setUpdatedText(todo.text);
                    }
                    }}
                    >{isEdit === false? "Edit":"Cancel"}
                    </button>
                <button onClick={handleDelete} type="button" className="btn btn-sm btn-danger">Delete</button>
            </div>
           
        </div>
    </div>)
}
export default Todo;