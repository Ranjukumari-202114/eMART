import React from "react";
import "./SideBar.css";
import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import axios from "axios";
import SideBarCard from "./SideBarCard/SideBarCard";
import { useEffect } from "react";
import { useLocation, useParams, useSearchParams } from "react-router-dom";

function SideBar() {
  const [search, setSearch] = useState([]);
  const params = useParams();
  const location = useLocation();
  
  //   console.log(category)
  const [category, setCategory] = useState(params.category);

  

  const [searchParam, setSearchParam] = useSearchParams();

  const handleSearch = (event) => {
    event.preventDefault();
    const queryData = searchParam.get("q");
    // console.log("Check");
  };
  useEffect(() => {
    (async () => {
      if(location.pathname.split("/")[2] != category){
        setCategory(params.category)
        if (params.category === "products") {
          const response = await axios.get(
            `${process.env.REACT_APP_BASE_URL}/product/search`
          );
          // console.log("Response from /product ",response.data);
          setSearch(response.data);
        } else {
          if (searchParam.get("q")) {
            //  console.log(response.data[0].product_description)
            const response = await axios.get(
              `${process.env.REACT_APP_BASE_URL}/product/search?Category=${params.category}&title=${searchParam.get(
                "q"
              )}`
            );
            // console.log("Response from /product ",response.data);
            setSearch(response.data);
          } else {
            const response = await axios.get(
              `${process.env.REACT_APP_BASE_URL}/product/search?Category=${params.category}`
            );
            // console.log("Response from /product ",response.data);
            setSearch(response.data);
          }
        }
      }
    })();
  }, [location]);

  return (
    <>
      <Navbar />
      <div className="SideBar">
        <div className="sideBar_left">
          <div className="sideBar_left_search">
            <input
              onSubmit={handleSearch}
              type="text"
              placeholder="Search Products..."
              value={searchParam.get("q")}
              onChange={async (event) => {
                setSearchParam({ q: event.target.value });
              
                try {
                  if (params.category=="products"){
                  const response = await axios.get(
                    `${process.env.REACT_APP_BASE_URL}/product/search?title=${event.target.value}`
                  );
                  setSearch(response.data);

                  }else{
                  const response = await axios.get(
                    `${process.env.REACT_APP_BASE_URL}/product/search?Categroy=${params.category}&title=${event.target.value}`
                  );
                  // console.log("Response from /product ",response.data);
                  setSearch(response.data);

                  }
                } catch (err) {
                  console.log(err);
                }
              }}
            />
          </div>

          <div className="Filter">
            <p className="filter_search">Filter By Price</p>

            <div className="filter_input">
              <input
                // onChange={}
                type="range"
                id="cowbell"
                name="cowbell"
                min="0"
                max="90"
                value="90"
                step="10"
              />
              <button className="filter_button">Filter</button>
            </div>
          </div>
          <div className="category">
            <p className="category_heading">Categories</p>
            <div className="category_content">
              <ul>
                <li>Accessories</li>
                <li>Men</li>
                <li>Women</li>
              </ul>
              <ul>
                <li>(7)</li>
                <li>(14)</li>
                <li>(19)</li>
              </ul>
            </div>
          </div>
          <div className="category_content_list">
            <p className="best_sellers">Our Best Sellers</p>
            <div className="category_content1">
              <img src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2017/12/product-bag3.jpg" />
              <div className="category_content_content">
                <p>Bright Red Bag</p>
                <p>star</p>
                <p>$150.00 $130.00</p>
              </div>
            </div>
            <div className="category_content1">
              <img src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2017/12/product-w-jeans4-400x400.jpg" />
              <div className="category_content_content">
                <p>Bright Red Bag</p>
                <p>star</p>
                <p>$150.00 $130.00</p>
              </div>
            </div>
            <div className="category_content1">
              <img src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2017/12/product-w-jeans1-400x400.jpg" />
              <div className="category_content_content">
                <p>Bright Red Bag</p>
                <p>star</p>
                <p>$150.00 $130.00</p>
              </div>
            </div>
          </div>
        </div>
        <div className="sideBar_right">
          <div className="sideBar_right_list">
            <div className="SideBarCard_info">
              <div className="sidebar_Card_content">
                <p>{category}</p>
                <p className="side_info">{search[0]?.product_description}</p>
              </div>
              <div className="sidebar_Card">
                {search.map((element) => {
                  return (
                    <SideBarCard
                      imageUrl={element.imageUrl}
                      title={element.title}
                      Category={element.Category}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SideBar;
