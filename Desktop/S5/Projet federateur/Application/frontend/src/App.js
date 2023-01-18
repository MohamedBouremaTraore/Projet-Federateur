import './App.css';
import {  Route, Routes} from 'react-router-dom';

import Home from './component/Home'
import Competition from './component/portfolio/Competition'
import Recharge from './component/portfolio/Recharge'
import Learning from './component/portfolio/Learning'
import ESG from './component/portfolio/ESG'
import Trading from './component/portfolio/Trading'
import Divers from './component/portfolio/Divers'
import Chatbox from './component/Chatbox'

function App() {
  return (
    <div className='App'>
      <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Competition" element={<Competition />}></Route>
          <Route path="/Recharge" element={<Recharge />}></Route>
          <Route path="/Learning" element={<Learning />}></Route>
          <Route path="/ESG" element={<ESG />}></Route>
          <Route path="/Trading" element={<Trading />}></Route>
          <Route path="/Divers" element={<Divers />}></Route>
          <Route path="/Chatbox" element={<Chatbox />}></Route>
      </Routes>
    </div>
  );
}

export default App;
