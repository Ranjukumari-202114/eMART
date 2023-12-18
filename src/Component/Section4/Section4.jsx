import React from 'react'
import './Section4.css'
import S4Card from './S4Card/S4Card';
import Product2 from './S4Card/Product2';

function Section4() {
    return ( 
        <>
        <div className='Section4_main'>
        <div className='Section4'> 
               <div className='Section4_top_content'>
                    <div className="Section4_top_content_container" >
                    <p className='Section4_top_content1'>Limited Time Offer</p>
                    <p className='Section4_top_content2'>Special Edition</p>
                    <p className='Section4_top_content3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec <br>
                    </br>ullamcorper mattis, pulvinar dapibus leo.</p>
                    <p className='Section4_top_content4'>Buy This T-shirt At 20% Discount, Use Code OFF20</p>
                    <button >SHOW NOW</button>
                   </div>
               </div>
         </div>

          <div className='Section4_down'>
                {
                    Product2.map((element)=>{
                    return <S4Card imageUrl={element.imageUrl} title={element.title} Description={element.Description}/>
                   }) 
                }   
          </div>

        </div>
        
       

        </>
        
     );
}

export default Section4;