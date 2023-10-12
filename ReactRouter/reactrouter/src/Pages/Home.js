import React from "react";
import Header from "../Components/Header";
import { useNavigate } from "react-router-dom";
const products=[
    {
        id:"1",
        name:"Telefon",
        price:15000,
        brand:"Samsung"
    },
    {
        id:"2",
        name:"Telefon",
        price:40000,
        brand:"Apple"
    },
    {
        id:"3",
        name:"Bilgisayar",
        price:15000,
        brand:"DELL"
    }
]
const Home =()=>{
    const navigate  = useNavigate();
    return(
        <div>
            <Header page="home"/>
            <h1>Home Page</h1>
            {
                products.map(item=>(
                    <div key={item.id}>
                        <p>{item.brand}</p>
                        <button onClick={()=>navigate(`/product-detail/${item.id}`)}>Detaylar </button>
                        <hr/>
                    </div>
                ))
            }
        </div>
    )
}
export default Home;