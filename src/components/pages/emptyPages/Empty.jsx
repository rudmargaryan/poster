import { Navigate, useNavigate } from "react-router-dom"
import "./empty.scss"

export function Empty(){
    const navigate = useNavigate()
    const goHome = () => {
        navigate('/')
    }

    return(
        <div className="empty">
            <div className="empty__text" onClick={goHome}>
                sorry (-_-) but this page was empty
            </div>
        </div>
    )
}