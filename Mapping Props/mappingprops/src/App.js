import React from "react";
import Card from "./Components/card";
import Kurt1 from  "./Assets/Images/Kurt1.jpg";
import Kurt2 from  "./Assets/Images/Kurt2.jpg";
import Kurt3 from  "./Assets/Images/Kurt3.jpg";
import Kurt4 from  "./Assets/Images/Kurt4.jpg";
import Kurt5 from  "./Assets/Images/Kurt5.jpg";
import Kurt6 from  "./Assets/Images/Kurt6.jpg";
import Kurt7 from  "./Assets/Images/kurt7.jpg";
import Kurt8 from  "./Assets/Images/kurt8.jpg";
import Kurt9 from  "./Assets/Images/Kurt9.jpg";
import Kurt from  "./Assets/Images/Kurt.jpg";

const Cards = [
  {
    img: Kurt,
    cardTitle : "title",
    shortExplanation : "definetly pretty short"
  },
  {
    img: Kurt1,
    cardTitle : "title",
    shortExplanation : "definetly pretty short"
  },
  {
    img: Kurt2,
    cardTitle : "title",
    shortExplanation : "definetly pretty short"
  },
  {
    img: Kurt3,
    cardTitle : "title",
    shortExplanation : "definetly pretty short"
  },
  {
    img: Kurt4,
    cardTitle : "title",
    shortExplanation : "definetly pretty short"
  },
  {
    img: Kurt5,
    cardTitle : "title",
    shortExplanation : "definetly pretty short"
  },
  {
    img: Kurt6,
    cardTitle : "title",
    shortExplanation : "definetly pretty short"
  },
  {
    img: Kurt7,
    cardTitle : "title",
    shortExplanation : "definetly pretty short"
  },
  {
    img: Kurt8,
    cardTitle : "title",
    shortExplanation : "definetly pretty short"
  },
  {
    img: Kurt9,
    cardTitle : "title",
    shortExplanation : "definetly pretty short"
  }

]
function App() {
  return (
    <div style={{display:"flex", flexWrap:"wrap", gap:"10px"}} className="App">
      {Cards.map((item,index)=>{
        return(
          <Card
          key = {index}
          imgSrc = {item.img}
          cardTitle = {item.cardTitle}
          shortExplanation = {item.shortExplanation}
        />
        )
      })}
    </div>
  );
}

export default App;
