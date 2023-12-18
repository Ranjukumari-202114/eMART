import React from 'react'
import './S4Card.css'


function S4Card(props) {
    return ( 
        <div className='S4Card'>
          <div className='S4Card_img'>
             <img src={props.imageUrl}/>
          </div>
           <div className='S4Card_content'>
             <h3>{props.title}</h3>
             <p>{props.Description}</p>
           </div>
        </div>
     );
}

export default S4Card;