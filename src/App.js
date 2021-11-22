import './App.css';
import PortfolioApp from './apps/PortfolioApp';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<PortfolioApp />} />
      </Routes>
    </Router>
  );
}

export default App;
