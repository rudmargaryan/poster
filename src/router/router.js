import { Route, Routes } from "react-router-dom"
import { Home } from "../components/pages/Home"
import "./features/styles/remote.scss"
import "./features/styles/fonts.scss"
import { About } from "../components/pages/about/About"
import { Empty } from "../components/pages/emptyPages/Empty"
import { Notes } from "../components/pages/create/Notes"


export function router () {
    return(
        <Routes>
            <Route path="/"  element={<Home/>}/>
            <Route path="/about"  element={<About/>}/>
            <Route path="/notes/create"  element={<Notes/>}/>
            <Route path="*"   element={<Empty/>}/>
        </Routes>
    )
}