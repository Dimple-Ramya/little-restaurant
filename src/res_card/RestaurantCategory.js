import { useState } from "react"
import "../../index.css"
import ItemsList from "./ItemsList"

const RestaurantCategory = ({ category, setShowIndex, showItems }) => {
    // const [showItems, setShowItems] = useState(false)

    // console.log(category, setShowIndex)

    const handleShowItems = () => {
        // setShowItems(!showItems)
        setShowIndex()
    }

    return (
        <div className="ml-[25%]">
            <div onClick={handleShowItems} className="h-16 w-[70%] flex flex-row justify-between cursor-pointer bg-slate-100 shadow-md m-2 p-4 rounded-lg">
                <h4>{category.card.card.title}</h4>
                <div className="flex flex-row">
                    <h6>{category.card.card.itemCards.length}</h6>
                    ⬇️
                </div>
            </div>
            <ItemsList showItems={showItems} itemslist={category.card.card.itemCards} />
        </div>
    )
}

export default RestaurantCategory