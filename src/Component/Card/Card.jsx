import React from 'react';
import './Card.css'




function Card(props) {
  const openURL = (url)=>{
    window.open(url)
  }
    return (    
      <div className="card">
        {/* <div className='card_container'> */}
            <div className="card_img">
              <img src={props.imageUrl}/>
            </div>
            <div className="card_content">
              <h4>{props.title}</h4>
              <p>{props.brand}</p>
              <p>{props.price}</p>
              <button onClick={()=>{openURL(props.url)}} >Explore</button> 
           </div>
        {/* </div> */}
        
      </div>  
    );
  }
  
  export default Card;