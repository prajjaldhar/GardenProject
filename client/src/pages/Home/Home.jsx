import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Home.css";
import CardSection from "../../components/CardSection/CardSection";
import NavBar from "../../components/NavBar/NavBar";

const Home = () => {
  const [plants, setPlants] = useState([]);
  const [sortByOptions] = useState({
    "Price:High to Low": "getplants/pricehigh",
    "Price: Low to High": "getplants/pricelow",
    "Average Rating": "averageRating",
    "All Products": "getplants",
  });

  useEffect(() => {
    fetchData("getplants");
  }, []);

  const fetchData = async (url) => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/plants/${url}`
      );
      setPlants(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSortBy = (option) => {
    fetchData(sortByOptions[option]);
  };

  return (
    <>
      <NavBar />
      <div className="navigation">
        <div className="navigation-item">home/allproducts</div>
        <div className="navigation-item-bold">All Products</div>
        <div className="d-flex justify-content-center">
          <span className="navigation-item-light">
            Showing all {plants.length} results
          </span>
          <div className="dropdown">
            <button className="dropbtn">Sort by</button>
            <div className="dropdown-content">
              {Object.keys(sortByOptions).map((option) => (
                <button key={option} onClick={() => handleSortBy(option)}>
                  {option}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="home-container container">
        {plants.map((plant) => (
          <CardSection key={plant.id} plant={plant} />
        ))}
      </div>
    </>
  );
};

export default Home;
