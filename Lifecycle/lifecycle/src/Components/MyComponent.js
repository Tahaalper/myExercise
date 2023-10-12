import React,{useEffect} from "react";
const MyComponent =() => {
    useEffect(()=>{
        console.log("MyComponent componentDidMount")
        return()=>{
            console.log("MyComponent componentWillUnmount")
        }
    },[])

    console.log("MyComponent constructor")
    return(
        <div>
            {console.log("MyComponent render")}
            <h2>I'm MyComponent</h2>
        </div>
    )
}
export default MyComponent;
