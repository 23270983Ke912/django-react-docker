import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Login} from "./component/login";
import {Home} from "./component/home";
import {Navigation} from './component/navigation';

function App() {
    return <BrowserRouter>
        <Navigation></Navigation>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>

        </Routes>
      </BrowserRouter>;
}
export default App;