import { useEffect, useState } from "react"
import Shimmer from "../Shimmer"
import RestaurantCard from "../res_card/RestaurantCard"
import axios from "axios"
import { Link } from "react-router-dom"
import { swiggy_url } from "../utils/ConstantLinks"
import useOnlineStatus from "../utils/useOnlineStatus"
import withVegLabel from "../utils/withVegLabel"

const Body = () => {
    const [resData, setResData] = useState(null)
    const [dummyData, setDummyData] = useState(null)
    const [searchText, setSearchText] = useState("")

    const resList = [
        {
            data: {
                id: "334475",
                name: "paradise",
                cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
                cuisines: ["Burgers", "Biryani", "American", "Snacks"],
                costForTwo: 40000,
                deliveryTime: 36,
                avgRating: "3.8"
            }
        },
        {
            data: {
                id: "334476",
                name: "Eat panchavat",
                cloudinaryImageId: "85ccae4e3576f9330af102c46ca85395",
                cuisines: ["Burgers", "Biryani", "American", "Snacks"],
                costForTwo: 40000,
                deliveryTime: 20,
                avgRating: "4.3"
            }
        },
        {
            data: {
                id: "334477",
                name: "Dominos",
                cloudinaryImageId: "uughlfbnykdtvefbmhdm",
                cuisines: ["Burgers", "Biryani", "American", "Snacks"],
                costForTwo: 40000,
                deliveryTime: 40,
                avgRating: "4.4"
            }
        },
        {
            data: {
                id: "334478",
                name: "kritunga",
                cloudinaryImageId: "uughlfbnykdtvefbmhdm",
                cuisines: ["Burgers", "Biryani", "American", "Snacks"],
                costForTwo: 40000,
                deliveryTime: 40,
                avgRating: "3.9"
            }
        },
        {
            data: {
                id: "334479",
                name: "Suprabhat",
                cloudinaryImageId: "uughlfbnykdtvefbmhdm",
                cuisines: ["Burgers", "Biryani", "American", "Snacks"],
                costForTwo: 40000,
                deliveryTime: 40,
                avgRating: "3.5"
            }
        }]

    const isOnline = useOnlineStatus()

    const RestaurantCardWithVegLabel = withVegLabel(RestaurantCard)

    // console.log(RestaurantCardWithVegLabel)

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(swiggy_url);
            const data = await response.json()
            console.log(data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
            setResData(data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
            setDummyData(data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
        }

        fetchData();

    }, [])

    // console.log(resData && resData.length)

    const handleSearch = (val) => {
        // console.log(val)
        setSearchText(val.toLowerCase())
    }

    const handleSearchFilter = () => {
        const filteredData = dummyData && dummyData.filter((each) => (each.info.name).toLowerCase().includes(searchText))
        console.log(filteredData)
        setResData(filteredData)
    }

    if (isOnline === false) return (
        <p>Seems like you are offline ☹️</p>
    )


    return (
        <>
            {
                resData === null ? <Shimmer /> :
                    <div>
                        <input type="search" style={{ marginTop: "10px", marginLeft: "5px", border: "0.5px solid black" }} placeholder="Search Name" onChange={(e) => handleSearch(e.target.value)} />
                        <button onClick={handleSearchFilter}>Search</button>
                        < div className="body-container" >
                            {resData &&
                                resData.map((each) => {
                                    return (
                                        <Link to={"/restaurant/" + each.info.id} index={each.info.id}>
                                            {/* {console.log(each.info.veg)} */}
                                            {each.info.veg ?
                                                <RestaurantCardWithVegLabel resCard={each.info} />
                                                :
                                                <RestaurantCard resCard={each.info} />
                                            }
                                        </Link>
                                    )
                                })
                            }
                        </div >
                    </div>
            }
        </>
    )
}

export default Body