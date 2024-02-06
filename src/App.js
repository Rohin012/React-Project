import SideNav from "./components/SideNav";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import AddJob from "./pages/AddJob";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

function App() {
  return (
    
     <>
        <BrowserRouter>
          <Routes>
            <Route path='/' exact element={<Home/>}></Route>
            <Route path='/AddJob' exact element={<AddJob/>}></Route>
            <Route path='/Profile' exact element={<Profile/>}></Route>
            
          </Routes>
        </BrowserRouter>
      
     </>
  );
}

export default App;
