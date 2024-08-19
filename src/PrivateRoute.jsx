import { useContext } from "react"
import { Context } from "./App"
import { Navigate, Outlet } from "react-router-dom"


function ProtecttedRoute() {
    const { login } = useContext(Context)
    return login ? <Outlet /> : <Navigate to={'/login'} />
}

export default ProtecttedRoute