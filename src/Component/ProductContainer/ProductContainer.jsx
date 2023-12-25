import React, { useState } from "react";
import './ProductContainer.css';
import ProductDetailCard from './ProductDetail/ProductDetailCard';
import ProductDetail from './ProductDetail/ProductDetail';
import ProductReviews from './ProductReviews/ProductReviews'
import ProductInformation from "./ProductInformation/ProductInformation";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import ProductDescription from "./ProductDescription/ProductDescription";
import { useParams } from 'react-router-dom';
import axios from "axios";
import { useEffect ,useContext } from "react";
import { user_context } from "../../App";


function ProductContainer() {
  const {data} = useContext(user_context);
  // console.log("this is the data that is in in productContainer",data)


  const params = useParams();
  const {id} = params;
  // console.log(id)
   const [product ,setproduct] = useState([])


   useEffect(() =>{
      (async () => {
       const response  =  await axios.get(`${process.env.REACT_APP_BASE_URL}/product/${id}`)
      //  console.log("this is the responce data of the productContainer",response.data);
       setproduct(response.data[0]);
       console.log("this is the responce data of ",response.data[0]);

     })()
   }, [])

  
  const [content, setContent] = useState("ProductDescription")


    return ( 
     <>
      <Navbar/>
      <div className="ProductContainer_main">
        
        <ProductInformation user_id={data?._id} product_id={product?._id} imageUrl={product.imageUrl} title={product.title} Category={product.Category} price={product.price} product_description={product.product_description} />
         <div className="changeDesc">
            <p onClick={()=>{setContent("ProductDescription")}}>Description</p>
            {/* <p onClick={()=>{setContent("")}}>Additional information</p> */}
            <p onClick={()=>{setContent("ProductReviews")}}>Reviews</p>
         </div>
         {
          content == "ProductDescription" ? <ProductDescription Long_description={product.Long_description} Short_description={product.Short_description}/>:null
         }
         {
          content == "ProductReviews" ? <ProductReviews  user_id={data._id} product_id={product._id}  />:null
         }


        <div className="products">
        <h1>Related products</h1>
        <div className="ProductDetail_container">
        {
           
            ProductDetailCard.map((el) =>{
               return <ProductDetail imageUrl={el.imageUrl} title={el.title} Category={el.Category} price={el.price} Rating={ el.Rating}/>
            } )
        }
          
        </div>
        </div>

         

      </div>
      {/* <Footer/>  */}
     </>  
     );
}


export default ProductContainer;