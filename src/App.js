import { BrowserRouter } from "react-router-dom";
import { router } from "./router/router";
import "./router/features/styles/style.scss"
import { Nav } from "./components/pages/nav/Nav";

function App() {
  const routes = router()
  return (
    <BrowserRouter>
      <div className="poster">
        <Nav/>
        <div className="content">
          {routes}
          <div className="end">
            warning :  your posts saving on local item their do not see other peoples 
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
