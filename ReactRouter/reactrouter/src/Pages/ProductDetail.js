import React from "react";
import Header from "../Components/Header";
import {useParams} from "react-router-dom"
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
const ProductDetail=(props)=>{
    const params = useParams()
    const product=products.find(item=>item.id === params.productId)
    return(
        <div>
            <Header/>
            <h1>Product Detail</h1>
            <p>{product.name}</p>
            <p>{product.brand}</p>
            <p>{product.price}</p>
        </div>
    )
}
export default ProductDetail;