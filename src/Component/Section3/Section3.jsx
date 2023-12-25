import React, { useEffect, useState } from 'react'
import './Section3.css'
import S3Card from './S3Card/S3Card';

// import Product from './S3Card/Product';
import axios from 'axios';

function Section3() {

  
  const [product ,setproduct] = useState([])

  useEffect(() =>{
     (async () => {
      const response  =  await axios.get(`${process.env.REACT_APP_BASE_URL}/product`)
      // console.log("Response from /product ",response.data);
      setproduct(response.data);
      console.log("this is the data of the section 3",response.data)
    })()
  }, [])


    return (
      <>
      <div className='Section3_main'>
        <div className='Section3'>
          <p>Featured Products</p>
          <div className="un_line"></div>
        </div>
        <div className='S3Card_card'>
        {
          product?.map((el)=>{
          return <S3Card id={el._id} imageUrl={el.imageUrl} title={el.title} Category={el.Category} price={el.price} Rating={ el.Rating}/>
         })
        }
        
        </div>
      </div>
        
        


      </>  
        
    );
}

export default Section3;