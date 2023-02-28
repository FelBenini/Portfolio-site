import './style/App.scss';
import Homepage from './pages/homePage/Homepage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Aboutpage from './pages/aboutPage/Aboutpage';
import PortfolioPage from './pages/portfolioPage/PortfolioPage';
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="" element={<Homepage/>} />
        <Route path="/about" element={<Aboutpage/>} />
        <Route path="/projects" element={<PortfolioPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
