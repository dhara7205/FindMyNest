import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

import Navbar from './components/Navbar';
import AboutUs from './pages/AboutUs';
import Buy from './pages/Buy';
import Rent from './pages/Rent';
import Sell from './pages/Sell';
import PrivateRoute from './components/PrivateRoute';
import Footer from './components/Footer';
import './App.css'; // Import your global CSS file

function App() {
  return (
    <Router>
      <Navbar />

      {/* Main content area */}
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/buy" element={<Buy />} />
          <Route path="/rent" element={<Rent />} />
          <Route
            path="/sell"
            element={
              <PrivateRoute>
                <Sell />
              </PrivateRoute>
            }
          />
        </Routes>
      </div>

      <Footer />
    </Router>
  );
}

export default App;
