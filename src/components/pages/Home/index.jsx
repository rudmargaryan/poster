import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getNotes } from "../../../redux/features/Notes";
import { End } from "../end/End";
import "./index.scss"

export function Home(){
    const noters = useSelector(state=>getNotes(state))
    return(
        <div class="home">
            {
                noters.noters.length 
                ?
                "noter"
                :
                <div className="notes">
                    <div className="notes__title">
                        Your notes
                    </div>
                    <p className="notes__warning">
                        you are not have any notes  <Link to='/notes/create' className="button">add</Link>
                    </p>
                </div>
            }
             {
                noters.favorites.length 
                ?
                "noter"
                :
                <div className="notes">
                    <div className="notes__title">
                        Your favorite notes
                    </div>
                    <p className="notes__warning">
                        you are not have any favorite notes 
                    </p>
                </div>
            }
            <End/>
        </div>
    )
}