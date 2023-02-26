import './style/App.scss';
import Homepage from './pages/homePage/Homepage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Aboutpage from './pages/aboutPage/Aboutpage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="" element={<Homepage/>} />
        <Route path="/about" element={<Aboutpage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
