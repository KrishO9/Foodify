import { useState, useEffect } from "react";
import { HOMEPAGE_API } from "./constants";

const useRestaurantList = () =>
    {
        const [listOfRestaurants, setListOfRestaurants] = useState([]);
        const [filteredListOfRestaurants, setFilteredListOfRestaurants] = useState([]);
    
        useEffect(() => {
            fetchData();
          }, []);
        
          const fetchData = async () => {
            const data = await fetch(HOMEPAGE_API);
        
            const json = await data.json();

            setListOfRestaurants(
                json.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
              );
              setFilteredListOfRestaurants(
                json.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
              );
          };

          return [listOfRestaurants, filteredListOfRestaurants , setFilteredListOfRestaurants];
    };



export default useRestaurantList;