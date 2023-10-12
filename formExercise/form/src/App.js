import React,{useState} from "react";
function App() {
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');
  const handleSubmit =(event)=>{
    event.preventDefault();
    console.log("submit çalıştı");
    console.log("usernameValue", username);
    console.log("passwordValue",password);
    if(username === '' || password === ''){
      alert("username or password can't be empty");
      return
    }
    console.log("devam ediyor...");
  }
  return (
    <div>
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input onChange={(event)=>{setUsername(event.target.value)}} value={username} id="username"></input>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input onChange={(event)=>{setPassword(event.target.value)}} value={password} id="password"></input>
        </div>
        <button type="submit">login</button>
      </form>
    
    </div>
  );
}

export default App;
