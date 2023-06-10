import React from 'react'
import './App.css'
import ListEmployee from './components/LIstEmployee'
import HeaderComponents from './components/HeaderComponents';
import FooterComponents from './components/FooterComponents';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <HeaderComponents />
        <div className="container">
          <Routes>
            <Route path='/' element={<ListEmployee />} />
            <Route path='/Users' element={<ListEmployee />} />
          </Routes>
        </div>
        <FooterComponents />
      </div>
    </Router>
  );
}

export default App;
  