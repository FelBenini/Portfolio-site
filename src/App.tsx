import React from 'react';
import './style/App.scss';
import Homepage from './pages/homePage/Homepage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
