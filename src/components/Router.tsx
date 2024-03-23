import React from "react"
import { useRoutes } from "react-router-dom"
import Home from "../pages/Home"
import Login from "../pages/Login"
import Registration from "../pages/Login"
import PrivateRoute from "./PrivateRoute"

function Router() {
    const routes = useRoutes([
        {
            path: "/",
            element: <PrivateRoute />,
            children: [
                { path: "", element: <Login /> },
                { path: "profile", element: <Home /> },

            ]
        }
    ])
    return routes
}
export default React.memo(Router)