import ItemList from "./ItemList";

const RestaurantCategory = ({p, vegOnly,showItems,setShowIndex}) =>{

   // const [showItems , setShowItems] = useState(true);

    const handleClick = () =>{
        setShowIndex();
    }
    return (
        <div className = "m-2 p-3 bg-gray-100 shadow-lg">
            <div className = "">
                <div className="flex justify-between items-center cursor-pointer"
                onClick={handleClick}>
                <span className = "font-bold">{p.title}({p.itemCards.length})</span>
                <span><button className = "cursor-pointer my-2 px-2 shadow-md">▼</button></span>
                </div>
               {showItems && <ItemList items = {p.itemCards} vefgOnly={vegOnly}/>}
            </div>
        </div>
    )
}

export default RestaurantCategory;