import './App.css';
import Container from './components/container/Container';
import NavBar from './components/navbar/NavBar';
import MealDetails from './components/mealdetails/MealDetails';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DevPage from './pages/DevPage';
import Cart from './pages/Cart';


function App() {

  return <div className="primaryConfig">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Container />} />
          <Route path="/meal/:mealID" element={<MealDetails />} />
          <Route path="/developer" element={<DevPage />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </div>;
}

export default App;
