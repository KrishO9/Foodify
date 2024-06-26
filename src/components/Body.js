import RestaurantCard from "./RestaurantCard";
import {useState} from "react";
import {useEffect} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import constants, { HOMEPAGE_API } from "../utils/constants";

const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredListOfRestaurants, setFilteredListOfRestaurants] = useState([]);
    const [searchText,setSearchText] = useState("");

    console.log("Body Rendered");

    useEffect(()=>{
      fetchData();
    },[]);

    const fetchData= async ()=>{
      const data = await fetch(HOMEPAGE_API);
    
      const json = await data.json();

      //console.log(json.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

      setListOfRestaurants(json.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setFilteredListOfRestaurants(json.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };


    return listOfRestaurants.length === 0 ? (<Shimmer count={10} />) : (<div className = "body">
      <div className = "filter">
      <div className="search">
    <input type="text" className="search__input" value={searchText} onChange={(e)=>{
      setSearchText(e.target.value);
    }}/>
    <button className="search__button" onClick={()=>{
        //Filter the restraunt cards and update the UI
        //searchText
        //console.log(searchText);
        const filteredRestaurants = listOfRestaurants.filter((res) => 
            res.info.name.toLowerCase().includes(searchText.toLowerCase().trim())
        );
        setFilteredListOfRestaurants(filteredRestaurants);
    }}>
        <svg className="search__icon" aria-hidden="true" viewBox="0 0 24 24">
            <g>
                <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
            </g>
        </svg>
    </button>
</div>

      <button className="filter-btn" onClick={()=>{
       const filteredList = filteredListOfRestaurants.filter((res)=> res.info.avgRating > 4.4);
       setFilteredListOfRestaurants(filteredList);
      }}>Top rated Restaurants</button>
      </div>

      <div className="res-container">
       {
        filteredListOfRestaurants.map((restaurant)=>(
        <Link key ={restaurant.info.id} to = {"/restaurants/"+restaurant.info.id } className = "res-card-link"><RestaurantCard  resData = {restaurant}/></Link>))
    }
      </div>
    </div>);
  };

export default Body;