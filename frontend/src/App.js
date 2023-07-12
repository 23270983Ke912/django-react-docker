import {BrowserRouter, Routes, Route} from 'react-router-dom'


import Mainindex from "./component/mainindex";
function App() {
    return <BrowserRouter>
        
        <Routes>
          <Route path="/" element={<Mainindex/>}/>
        </Routes>
      </BrowserRouter>;
}
export default App;