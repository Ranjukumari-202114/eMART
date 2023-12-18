import React from 'react'
import Card from './Card/Card'
import './Section2.css'
import Slider from './Slider/Slider';
import Product1 from './Card/Product1'


function Section2() {
    return ( 
        <>
            <div className='Section2'>
            {/* <Slider/> */}
            
            <div className='Section2Card'>
            {
                Product1.map((element)=>{
                return <Card imageUrl={element.imageUrl} title={element.title} Description={element.Description}/>
            }) 
            
            }
            </div>
            
           
        </div>
        </>
        
     );
}

export default Section2;