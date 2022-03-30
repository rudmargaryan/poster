import { useState,useEffect } from 'react'

export function End(){
    const [storage,setStorage] = useState({
        visit:""
    })
    const changeStorage = () => {
        let obj = {
            visit:"dfgseufur888afdshj"
        }
        localStorage.setItem("end",JSON.stringify(obj))
       setStorage(JSON.parse(localStorage.getItem('end')))
    }

    useEffect(()=>{
        if(JSON.parse(localStorage.getItem('end'))){
            setStorage(JSON.parse(localStorage.getItem('end')))
        }
    },[])
   
    return(
        <div className="end" onClick={()=>changeStorage()}>
            {storage.visit !== "dfgseufur888afdshj" 
            ?
                "warning :  your notes saving on local item their do not see other peoples" 
            :
                ""
            }
        </div>
    )
}