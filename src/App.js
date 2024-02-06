import SideNav from "./components/SideNav";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Settings from "./pages/Settings";

function App() {
  return (
    
     <>
        <BrowserRouter>
          <Routes>
            <Route path='/' exact element={<Home/>}></Route>
            <Route path='/about' exact element={<About/>}></Route>
            <Route path='/settings' exact element={<Settings/>}></Route>
            
          </Routes>
        </BrowserRouter>
      
     </>
  );
}

export default App;
