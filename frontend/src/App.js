import {BrowserRouter, Routes, Route} from 'react-router-dom'


import Mainindex from "./component/mainindex";
import Register from "./component/register";
function App() {
    return <BrowserRouter>
        
        <Routes>
          <Route path="/" element={<Mainindex/>}/>
          <Route path="/register" element={<Register/>}/>
        </Routes>
      </BrowserRouter>;
}
export default App;