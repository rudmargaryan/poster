import { Route, Routes } from "react-router-dom"
import { Home } from "../components/pages/Home"
import "./features/styles/remote.scss"
import "./features/styles/fonts.scss"


export function router () {
    return(
        <Routes>
            <Route path="/"  element={<Home/>}/>
        </Routes>
    )
}