import React, { useState, useEffect } from 'react'
import { menu_url } from "../utils/ConstantLinks"

const useResMenu = (id) => {
    const [menuData, setMenuData] = useState(null)

    useEffect(() => {
        const fetchMenu = async () => {
            const response = await fetch(menu_url + id)
            const data = await response.json()
            // console.log(data)
            setMenuData(data)
        }

        fetchMenu();
    }, [])

    // console.log(menuData)

    return menuData
}

export default useResMenu