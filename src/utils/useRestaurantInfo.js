import { useEffect,useState } from "react"
import {MENU_API} from './constants';

const useRestaurantInfo = (resId) => 
{
const [resInfo , setResInfo] = useState(null);

useEffect(()=>{
    fetchResInfo();
},[]);

const fetchResInfo = async () =>{
    const data = await fetch(MENU_API+resId); 
    const json = await data.json();
    setResInfo(json);
};


return resInfo;


};


export default useRestaurantInfo; 