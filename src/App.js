import {useEffect} from "react";
import { Route, Routes } from "react-router-dom"
import Navbar from './components/Navbar';
import './App.css';
import LandingPage from './components/LandingPage';
import Footer from './components/Footer';
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Signup from "./pages/Signup";



function App() {
  useEffect(() => {
    //for running the script to toggle the the navbar
    const script = document.createElement('script');
    script.src = "script.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, []);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
