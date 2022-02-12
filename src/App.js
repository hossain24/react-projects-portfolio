import './App.css';
import PortfolioApp from './apps/PortfolioApp';
import { Routes, Route } from "react-router-dom";
import WeatherAPI from './components/Projects/WeatherAPI/WeatherAPI';
import MountainAPI from './components/Projects/MountainAPI/MountainAPI';
import Private from './components/Projects/BookAPI/Private';
import SignIn from './components/Projects/BookAPI/SignIn';
import SignUp from './components/Projects/BookAPI/SignUp';
import OrderList from './components/Projects/BookAPI/OrderList';
import Dashboard from './components/Projects/Profile/Dashboard/Dashboard';
import BookAPI from './components/Projects/BookAPI/BookAPI';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<PortfolioApp />} exact />
        <Route path='/mountain-api' element={<MountainAPI />} exact />
        <Route path='/weather-api' element={<WeatherAPI />} exact />
        <Route path='/book-api' element={<BookAPI />} exact />
        <Route path='/order-list' element={<OrderList />} exact />
        <Route path="/private" element={<Private />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
