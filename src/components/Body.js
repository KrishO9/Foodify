import RestaurantCard, { PromotedRestaurantCard } from "./RestaurantCard";
import { useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestaurantList from "../utils/useRestaurantList";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";

const Body = () => {
  const { loggedUser, setUserName } = useContext(UserContext);

  const PromotedResCard = PromotedRestaurantCard(RestaurantCard);
  const [searchText, setSearchText] = useState("");

  const [
    listOfRestaurants,
    filteredListOfRestaurants,
    setFilteredListOfRestaurants,
  ] = useRestaurantList();

  //console.log("Body Rendered");

  const onlineStatus = useOnlineStatus();

  if (!onlineStatus) {
    return (
      <div className="offline-container">
        <div className="main_wrapper">
          <div className="main">
            <div className="antenna">
              <div className="antenna_shadow"></div>
              <div className="a1"></div>
              <div className="a1d"></div>
              <div className="a2"></div>
              <div className="a2d"></div>
              <div className="a_base"></div>
            </div>
            <div className="tv">
              <div className="cruve">
                <svg
                  xmlSpace="preserve"
                  viewBox="0 0 189.929 189.929"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  className="curve_svg"
                >
                  <path
                    d="M70.343,70.343c-30.554,30.553-44.806,72.7-39.102,115.635l-29.738,3.951C-5.442,137.659,11.917,86.34,49.129,49.13
              C86.34,11.918,137.664-5.445,189.928,1.502l-3.95,29.738C143.041,25.54,100.895,39.789,70.343,70.343z"
                  ></path>
                </svg>
              </div>
              <div className="display_div">
                <div className="screen_out">
                  <div className="screen_out1">
                    <div className="screen">
                      <span className="notfound_text"> NOT FOUND</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lines">
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
              </div>
              <div className="buttons_div">
                <div className="b1">
                  <div></div>
                </div>
                <div className="b2"></div>
                <div className="speakers">
                  <div className="g1">
                    <div className="g11"></div>
                    <div className="g12"></div>
                    <div className="g13"></div>
                  </div>
                  <div className="g"></div>
                  <div className="g"></div>
                </div>
              </div>
            </div>
            <div className="bottom">
              <div className="base1"></div>
              <div className="base2"></div>
              <div className="base3"></div>
            </div>
          </div>
          <div className="text_404">
            <div className="text_4041">4</div>
            <div className="text_4042">0</div>
            <div className="text_4043">4</div>
          </div>
        </div>
        <div className="offline-page">
          <img
            src="https://imgs.search.brave.com/l26bjLt9Qm3UsdOCI3yZr4VamTSMOZpQ0WlCMgCWMak/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQ2/NTU3OTcwMS9waG90/by90b3ktZHVjay5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/alNZNVFjOUEzYTZW/bzE5OWhCQXduSGVB/Vy1fWnc3VGVvS0R3/RGdjdzZiQT0"
            className="offline-image"
          />
          <h1>You're Offline</h1>
          <p>
            It seems you're not connected to the internet. Please check your
            connection and try again.
          </p>
        </div>
      </div>
    );
  }

  return listOfRestaurants.length === 0 ? (
    <Shimmer count={10} />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search__input"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search__button"
            onClick={() => {
              //Filter the restraunt cards and update the UI
              //searchText
              //console.log(searchText);
              const filteredRestaurants = listOfRestaurants.filter((res) =>
                res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase().trim())
              );
              setFilteredListOfRestaurants(filteredRestaurants);
            }}
          >
            <svg
              className="search__icon h-1.3 w-1.3 fill-#b4b4b4 cursor-pointer"
              aria-hidden="true"
              viewBox="0 0 24 24"
            >
              <g>
                <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
              </g>
            </svg>
          </button>
        </div>

        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = filteredListOfRestaurants.filter(
              (res) => res.info.avgRating > 4.4
            );
            setFilteredListOfRestaurants(filteredList);
          }}
        >
          <div className="svg-wrapper-1">
            <div className="svg-wrapper">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path
                  fill="currentColor"
                  d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                ></path>
              </svg>
            </div>
          </div>
          <span>Top Restaurants</span>
        </button>
        <div>
          <label>Username:</label>
          <input className = "border border-black p-2 m-2" value={loggedUser} onChange={(e)=>setUserName(e.target.value)}></input>
        </div>
      </div>

      <div className="p-2 flex flex-wrap gap-0 rounded-md justify-normal">
        {filteredListOfRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
            className="res-card-link"
          >
            {restaurant.info.isOpen ? (
              <PromotedResCard resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
