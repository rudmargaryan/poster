import React from 'react'
import { Link } from 'react-router-dom'
import "./nav.scss"
export class Nav extends React.Component{
    render(){
        return(
            <div className="nav">
                <div className="nav__item">
                    <div className="nav__item__poster">
                        <div className="title">
                            POSTER
                        </div>
                        <div className="nav__item__poster__links">
                            <ul>
                                <li>
                                    <Link to="/about">About</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}