import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Shimmer from "../Shimmer"
import { menu_url } from "../utils/ConstantLinks"
import RestaurantCategory from "./RestaurantCategory"
import useResMenu from "../utils/useResMenu"

const RestaurantMenu = () => {
    // const [menuData, setMenuData] = useState(null)
    const [showIndex, setShowIndex] = useState(null)


    const { id } = useParams()

    // useEffect(() => {
    //     const fetchMenu = async () => {
    //         const response = await fetch(menu_url + id)
    //         const data = await response.json()
    //         console.log(data)
    //         setMenuData(data)
    //     }

    //     fetchMenu();
    // }, [])

    const getResMenu = useResMenu(id)
    // console.log(getResMenu && getResMenu)
    // console.log(getResMenu && getResMenu.data.cards[2].card.card.info)

    if (getResMenu === null) {
        return <Shimmer />
    }
    else {

        const { name, costForTwoMessage } = getResMenu && getResMenu.data.cards[2].card.card.info
        const categories = getResMenu.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter((each) => each.card.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
        // console.log(menuData.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter((each) => each.card.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"))

        // console.log(name, costForTwoMessage)
        // console.log("categories:", categories)
        return (
            <div >
                <h3 className="text-center font-bold text-2xl">{name}</h3>
                <h2 className="text-center font-semibold text-xl">{costForTwoMessage}</h2>
                {categories.map((category, index) =>
                    <RestaurantCategory key={index} showItems={showIndex === index ? true : false} setShowIndex={() => setShowIndex(index)} category={category} />
                )}
            </div>

        )
    }
}

export default RestaurantMenu