import { img_url2 } from "../utils/ConstantLinks"
import "../../index.css"

const RestaurantCard = (props) => {
    const { avgRating, cloudinaryImageId, cuisines, name, costForTwo } = props.resCard
    // console.log(props.resCard)

//    export const withVegLabel = (RestaurantCard) => {
//         return (props) => {
//             return (
//                 <div>
//                     <label >Veg</label>
//                     <RestaurantCard {...props} />
//                 </div>
//             )
//         }
//     }

    return (
        <div className="res-card">
            <img src={img_url2 + cloudinaryImageId} className="res-img" />
            <h2 className="res-name">{name}</h2>
            {/* {cuisines.map((item) => <p style={{ margin: 0, fontSize: "11px" }}>{item}</p>)} */}
            <p className="rating">{avgRating}</p>
            <p style={{ margin: 0 }}>Cost for two:{costForTwo.slice(0, 4)}</p>
            {/* <p style={{ margin: 0 }}>{deliveryTime}</p> */}
        </div>
    )
}

export default RestaurantCard
