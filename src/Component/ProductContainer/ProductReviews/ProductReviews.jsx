import React from "react";
import './ProductReviews.css';
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";




function ProductReviews(props) {

  const data = [1,2,3,4,5]
  
  const [rating,setRating] = useState('');
  const [message,setMessage] = useState('');
  
  const [allMessage,setAllMessage] = useState([]);
  
  const handleSubmit =(event)=>{

    // event.preventDefault()

    const ReviewerData = {
      user_id:props.user_id,
      product_id:props.product_id,
      reviewer_rating:rating,
      reviewer_message:message,
      
    };

    axios.post(`${process.env.REACT_APP_BASE_URL}/review`, ReviewerData)
    .then((response) => {
      console.log(response.data)
      
      if(response.status == 200)
      {
        alert("review done")
        
      }  
       
    })
    .catch(err => console.log(err));
  };
  

  useEffect(() =>{
    (async () => {
     const response  =  await axios.get(`${process.env.REACT_APP_BASE_URL}/review/${props.product_id}`)
     // console.log("Response from /product ",response.data);
    //  (response.data);
    console.log("this is the response review data",response.data)
    setAllMessage(response.data)
   })()
 }, [])


    return ( 
        <>
        <div className="ProductReviews_main">
         {
          allMessage.length === 0?<p>There are no reviews yet.</p>:
         <div className="">
               {allMessage.map((message)=>(
                <div>
                 {/* <p>{props.imageUrl}</p> */}
                 <p>{message.Message}<br></br> Rating={message.Rating} </p>
                </div>
                
                    
               )
               )}
               
            </div>
         }
         <div className="ProductReviews">

            
            <div className="ProductReviews_content">
             <p className="ProductReviews_content1">Be the first to review “DNK Blue Shoes”</p>
             <p className="ProductReviews_content2">Your email address will not be published. Required fields are marked *</p>
             
            </div>

            <form onSubmit={handleSubmit} >
            
           
            <div className="form_name">
               <label htmlFor="name">Your Rating </label>
               <input list="data"
               name="rating"
               value={rating} 
               onChange={(event) => setRating(event.target.value)} 
               required 
                />
               <datalist id="data">
                   {data.map((option)=>
                   <option>{option}</option>)}
               </datalist>
             </div>


            <div className="text_area">
             <label htmlFor="message">Your Message </label>
             <textarea
              id="message"
              name="message"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              required
            />
            </div>
          
          <div className="form_btn">
             <button type="submit">SUBMIT</button>
          </div>
            
          </form>
        </div>

        </div>
        
        </>
        
     );
}

export default ProductReviews;