import "../../index.css"
import { img_url2 } from "../utils/ConstantLinks"
import { useDispatch } from "react-redux"
import { addItem } from "../utils/store/slices/Cart"


const ItemsList = ({ itemslist, showItems }) => {
    // console.log(itemslist)

    const dispatch = useDispatch()

    let itemsObj = {}

    const handleAddItem = (itemName) => {
        // console.log(itemName)
        dispatch(addItem(itemName))
        // itemName in itemsObj ?
        //     itemsObj[itemName] = itemsObj[itemName] + 1
        //     : itemsObj[itemName] = 1
        // console.log(itemsObj)

    }

    return (
        <div>
            {showItems && itemslist.map((item) =>
                <div key={item.card.info.imageId} className="h-[10%] w-[68%] flex flex-row justify-between bg-white shadow-md m-2 p-4 rounded-lg">
                    <div>
                        <h4 className="font-semibold">{item.card.info.name}</h4>
                        <p>{item.card.info.description}</p>
                        <h5>💲{item.card.info.price}</h5>
                        <h4>{item.card.info.ratings.aggregatedRating.rating}⭐</h4>
                        <button
                            className="border border-green-400 text-green-500 font-semibold p-1 mt-2 rounded-md"
                            onClick={() => handleAddItem(item.card.info.name)}
                        >
                            Add +
                        </button>
                    </div>
                    <img className="h-24 w-52" alt={item.card.info.name} src={img_url2 + item.card.info.imageId} />
                </div>

            )}

        </div>
    )
}

export default ItemsList