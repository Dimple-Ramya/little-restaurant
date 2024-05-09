import React, { lazy, Suspense, createContext } from "react";
import ReactDom from "react-dom/client";
import "./App.css";
import Header from "./src/header/Header";
import Body from "./src/body/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import ContactUs from "./src/ContactUs";
import Services from "./src/Services";
import About from "./src/About";
import RestaurantMenu from "./src/res_card/RestaurantMenu";

import { Provider } from "react-redux";
import Store from "./src/utils/store/Store";
// const headEl = React.createElement("h1", {}, "Welcome")
// const headEl = <h1>Welcome</h1>

const About = lazy(() => import("./src/About"))
const ContactUs = lazy(() => import("./src/ContactUs"))
const Services = lazy(() => import("./src/Services"))

export const UserContext = createContext({
    loggedUser: "Default User"
})

const App = () => {
    return (
        <Provider store={Store}>
            <UserContext.Provider value={{ loggedUser: "Dimple" }}>
                <Header />
            </UserContext.Provider>

            <Outlet />
        </Provider>
    )
}


const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                // element: <About />
                element: <Suspense><About /></Suspense>
            },
            {
                path: "/contactus",
                // element: <ContactUs />
                element: <Suspense><ContactUs /></Suspense>
            },
            {
                path: "/services",
                // element: <Services />
                element: <Suspense><Services /></Suspense>
            },
            {
                path: "/restaurant/:id",
                element: <RestaurantMenu />
            }

        ]
    }
])

const root = ReactDom.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter} />)