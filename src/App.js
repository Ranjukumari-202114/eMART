
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import LoginSignup from './Component/LoginSignUp/loginSignup';
import Navbar from './Component/Navbar/Navbar'
import NavHome from './Component/NavHome/NavHome';
import Cart from './Component/Cart/Cart';
// import Footer from './Component/Footer/Footer';
// import ProductDescription from './Component/ProductContainer/ProductDescription/ProductDescription';
// import ProductDetail from './Component/ProductContainer/ProductDetail/ProductDetail';
// import ProductReviews from './Component/ProductContainer/ProductReviews/ProductReviews';
import ProductContainer from './Component/ProductContainer/ProductContainer';
// import { useState } from 'react';
import SignUp from './Component/Navbar/SignUp/SignUp';
import Login from './Component/Navbar/Login/Login';
import {createContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import SideBar from './Component/SideBar/SideBar';
import Footer from './Component/Footer/Footer';
import About from './Component/About/About';
import ContactUs from './Component/ContactUs/ContactUs';
// import ShippingAddress from './Component/Cart/CheckOut/ShippingAddress/ShippingAddress';
import OrderStatus from './Component/Cart/OrderStatus/OrderStatus';
import Rating from './Component/Rating/Rating';


const user_context = createContext();



function App() {

  let location = useLocation();
  const[data,setData] = useState(null)

  

  // console.log(token)
  
  
  useEffect(() =>{
    const token = localStorage.getItem('token');
    // console.log("Inside the useeffect of app.js",token)
    if(token){
      (async () => {
         try {
        const response  =  await axios.post('http://localhost:5000/auth/verify',{token})
        setData(response.data)
        // console.log("the data that we got in app",response.data )
      } catch (error) {
        alert("token expired,please login again")
        // alert("internal server error ")
      }
      })()
    }
 }, [location])

  return (
     <>
       <user_context.Provider value={{data,setData}}>
    <div>
      {/* <Navbar/> */}
      {/* <NavHome/> */}
      {/* <ProductReviews/> */}
      {/* <ProductDescription/> */}
      {/* <ProductDetail/> */}
      <Navbar/>
      <Routes>
        <Route exact path="/" element={ <NavHome/>}/>
        <Route exact path="/product/:id" element={<ProductContainer/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<ContactUs/>} />
        <Route path="/search/:category" element={<SideBar/>} />
        {/* <Route path="*" element={<Navigate to="/" />} /> */}
        {/* <Route path="/shipping" element={<ShippingAddress/>} /> */}
        <Route path="/orderstatus" element={<OrderStatus/>} />
       
      </Routes>
      

      
    {/* <Home/> */}
       {/* <LoginSignup /> */}
       
       {/* <Login/> */}
       {/* <SignUp/> */}
    </div>
    
    </user_context.Provider>
    <Footer/>
     </>
  );
}

export default App;

export {user_context}
