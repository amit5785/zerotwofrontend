import { Navigate, Route, Routes } from "react-router-dom"
import Navbar from './components/Navbar';
import './App.css';
import LandingPage from './components/LandingPage';
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Signup from "./pages/Signup";
import OTPVerification from './pages/OTPVerifaction'
import PasswordReset from "./components/PasswordReset";
import {AuthProvider} from '../src/context/AuthProvider'
import PrivateRoute from "./components/PrivateRoute";
import WithFooter from "./components/WithFooter";
import WithoutFooter from "./components/WithoutFooter";


function App() {
  return (
    <>
      <AuthProvider>
      <Navbar />
      <Routes>
        <Route element={<WithoutFooter/>}>
          <Route path="/dashboard" element={ <PrivateRoute private={true} > <Dashboard /> </PrivateRoute>} />
        </Route>

        <Route element={<WithFooter />} >
          <Route exact path="/" element={ <PrivateRoute private={false}> <LandingPage /> </PrivateRoute>} />

          <Route path="/login" element={ <PrivateRoute private={false}> <Login /> </PrivateRoute>
          } />

          <Route path="/signup" element={ <PrivateRoute private={false}> <Signup /> </PrivateRoute>} />

          <Route path="/verify" element={ <PrivateRoute private={false}> <OTPVerification /> </PrivateRoute>} />

          <Route path="/reset" element={ <PrivateRoute private={false}> <PasswordReset /> </PrivateRoute>} />
        </Route>

        <Route path="*"  element={<Navigate to='' />} />
      </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
