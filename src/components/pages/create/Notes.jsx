import "./Notes.scss"
import {End} from '../end/End.jsx'
import {useNavigate} from 'react-router-dom'
export function Notes(){
    const navigate = useNavigate()
    
    return(
        <div className="create__notes">
            <div className="goBack">
                <i class="fa fa-arrow-left"  onClick={()=>navigate(-1)}></i> <span>Back</span>
            </div> 
            <div className="create__notes__frame">

            </div>
            <End/>
        </div>
    )
}