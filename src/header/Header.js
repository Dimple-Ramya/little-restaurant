import { useContext, useEffect, useState } from "react"
import "../../App.css"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"
import logo from "./logo.png"
import "../../index.css"
import { UserContext } from "../../App"
import { useSelector } from "react-redux"

const Header = () => {
    // const [total, setTotal] = useState(0)
    const [itemsfromStore, setItemsFromStore] = useState({})
    const userDetails = useContext(UserContext)
    const isOnline = useOnlineStatus()

    const items = useSelector((store) => store.cart.cartObj)
    console.log(items)
    // setItemsFromStore(items)
    // console.log(Object.keys(items).length)
    // console.log(userDetails.loggedUser)
    const getTotal = () => {
        if (Object.keys(items).length !== 0) {
            console.log(Object.keys(items).length)
            const total = Object.values(items).reduce((acc, each) => {
                return acc += each
            })
            console.log(total)
            return total
        }
    }
    return (
        <div className="flex h-16 w-full bg-orange-300 flex-row justify-between">
            <Link to={"/"}><img className="ml-5 mt-[2px] h-[58px] w-[90px]" src={logo} /></Link>
            <ul className="flex w-1/3 list-none flex-row justify-evenly cursor-pointer mt-4">
                <li className="mr-5">🛒 {getTotal()}</li>
                <li><Link to={"/about"}>About</Link></li>
                <li><Link to={"/services"}>Services</Link></li>
                <li><Link to={"/contactus"}>Contact Us</Link></li>
                <p>Hi! {userDetails.loggedUser}</p>
                <li>{isOnline ? "🟢" : "🔴"}</li>
            </ul>
        </div>
    )
}

export default Header