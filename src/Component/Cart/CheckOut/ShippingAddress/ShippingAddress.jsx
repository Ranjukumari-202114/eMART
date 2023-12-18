import React from "react";
import "./ShippingAddress.css";
import { useState ,useContext} from "react";
import ShippingDetail from "../ShippingDetail/ShippingDetail";
import axios from "axios";
import { useEffect } from "react";



function ShippingAddress(props) {

  const [shippingDetail,setshippingDetail] = useState([])


  


  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    phoneNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    console.log(formData);

    const Shippping_address = {
      user_id:props.user_id,
      user_firstName:formData.firstName,
      user_lastName:formData.lastName,
      user_address:formData.address,
      user_city:formData.city,
      user_state:formData.state,
      user_postalCode:formData.pincode,
      user_phoneNumber:formData.phoneNumber,

    }


    axios.post("http://localhost:5000/shipping/address", Shippping_address)
    .then((response) => {

      // setshippingDetail(response.data)
      props.openCart(false)
      // console.log("this is the response data of the ShippingAddress",response.data)
       
    })
    .catch(err => console.log(err));
  };


  useEffect(() =>{
        (async () => {
         const response  =  await axios.get(`http://localhost:5000/shipping/${props.user_id}`)
         setshippingDetail(response.data)
        // console.log("this is the shipping address data that is receive from the server",response.data)
       })()
     }, [])
 

  return (
    <>
      <div className="ShippingAddress_main">
          <h1>Add Shipping Address</h1>
        <div className="ShippingAddress">
          <div className="ShippingContainer">
          {
            shippingDetail.map((element)=>{
            
                return <ShippingDetail id={element._id} setAddressId={props.setAddressId}  cartOpen={props.openCart} firstName = {element.FirstName + "  "+element.LastName} address = {element.Address +" "+element.PostalCode+" "+ element.City+" "+element.State} phoneNumber={element.PhoneNumber}/>
            })   
          }
          </div>
          <div className="ShippingForm">
            <form onSubmit={handleSubmit}>
              <div className="ShippingForm1">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name*"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder=" Last Name*"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="ShippingForm2">
                <input
                  type="text"
                  name="address"
                  placeholder="Address*"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="ShippingForm1">
                <input
                  type="text"
                  name="city"
                  placeholder="City*"
                  value={formData.city}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="state"
                  placeholder="State/Region*"
                  value={formData.state}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="ShippingForm1">
                <input
                  type="text"
                  name="pincode"
                  placeholder="Zip/Postal Code*"
                  value={formData.pincode}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="phoneNumber"
                  placeholder="Phone Number*"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                />
              </div>

              <button className="shipping_submit" type="submit">
                Deliver Here
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShippingAddress;
