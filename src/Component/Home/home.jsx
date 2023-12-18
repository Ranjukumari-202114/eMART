import React from "react";
import Data from '../Card/data1'
import Card from "../Card/Card";

import "./home.css"


function Home() {
    return (  
     <div className="home">
     {
      Data.map((el)=>{
        return <Card imageUrl={el.imageUrl} title={el.title} brand={el.brand} price={el.price} url={ el.url}/>
      })
     }

   </div>  
       
    );
  }
  
  export default Home;
