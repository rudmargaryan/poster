import { BrowserRouter } from "react-router-dom";
import { router } from "./router/router";
import "./router/features/styles/style.scss"
import  Nav  from "./components/pages/nav/Nav";
import { End } from "./components/pages/end/End";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

function App() {
  const routes = router()
  const dispatch = useDispatch()
  useEffect(()=>{
    let note = JSON.parse(localStorage.getItem('notes'))
    let favorites = JSON.parse(localStorage.getItem('favorites'))
    if(note){
        dispatch({
          type:'loader',
          noters:note,
          favorites:favorites
        })
    }
  })
  return (
    <BrowserRouter>
      <div className="poster">
        <Nav/>
        <div className="content">
          {routes}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
