import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import "./nav.scss"
export default function Nav(){
        const navigate = useNavigate()
        const goHome = () => {
            navigate('/')
        }
        const location = useLocation()

        if(location.pathname === '/notes/create'){
            return(
                <div></div>
            )
        }
        return(
            <div className="nav">
                <div className="nav__item">
                    <div className="nav__item__poster">
                        <div className="title" onClick={()=>goHome()}>
                            NOTESER
                        </div>
                        <div className="nav__item__poster__links">
                            <ul>
                                <li>
                                    <Link to="/about" className='link'>About</Link>
                                </li>
                                <li>
                                    <Link to="/news" className='link'>News</Link>
                                </li>
                                <li>
                                    <Link to="/contact" className='link'>Contact</Link>
                                </li>
                            </ul>
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
        )
}