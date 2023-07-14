import {BrowserRouter, Routes, Route} from 'react-router-dom'

import {Navigation} from './component/navigation';
import Experience from "./page/experience.js";
import Map from './page/map';
import Register from "./page/register";
import Login from "./page/login";
import Home from "./page/home";
import About from './page/about';
import { useSelector } from "react-redux";
import ProtectedRoutes from "./utils/ProtectedRoutes";

import Navbarfilter from "./utils/Navbarfilter";
function App() {
    const user = useSelector((state) => state.user);
    return( <BrowserRouter>
    <Navbarfilter>
      <Navigation />
    </Navbarfilter>
        
        <Routes>
          <Route path="/register" element={<Register/>}/>
          <Route path="/" element={<Login/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route element={<ProtectedRoutes user={user} />}>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/map" element={<Map />} />
          </Route>
        </Routes>
     
      </BrowserRouter>
      );
}
export default App;