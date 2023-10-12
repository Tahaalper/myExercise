import React, {useState,useEffect} from "react";
import MyComponent from "./Components/MyComponent";
  function App() {;
  const[ShowMyComponent,setShowMyComponent]=useState(true);
  //const [sampleState,setSampleState]=useState(false);
  const [inputText, setInputText]=useState("");
//birinci parametre: effect(yapılacak iş)
//ikinci parametre: dependencies (bağımlılıklar)
    /*useEffect(()=>{
      console.log("useEffect without dependencies")
    }); //dependency yok
    //her state değiştiğinde yeniden çalışır

    useEffect(()=>{
      console.log("componentDidMount")
    },[]); //dependency boş dizi verirsem 
    // sadece bir kez çalışır, ekrana basılırken
    //componentDidMount'tur*/
    /*useEffect(()=>{
      console.log("useEffect with inputText dependency")
    }, [inputText]); */
    //dependency var yani bağımlılık
    //ekrana basılırken ve
     //buradaki dependency'ler her değiştiğinde tetiklenir
    //ilk ekrana basılması componentDidMount
    //sonraki seferler componentDidUpdate  
  useEffect(()=>{},[ShowMyComponent,inputText])
  return(
    <div>
      <h1>merhabalar</h1>
      <input value={inputText} onChange={(event)=>{setInputText(event.target.value)}}></input> 
      <button onClick={()=>{setShowMyComponent(!ShowMyComponent)}}>yenile</button>
      {
        ShowMyComponent === true && (<MyComponent/>)
      }
    </div>
  );
}
export default App;
