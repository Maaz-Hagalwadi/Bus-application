import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Register from "./Components/login/Register";
import { Login } from "./Components/login/Login";
import { Forgot } from "./Components/login/Forgot";
import { Reset } from "./Components/login/Reset";



import PrivateRoute from "./PrivatedRoute";
import Apps from "./Apps";
import App2 from "./App2";
// import Profile from "./Components/profile";
import Profile from "./Components/Profile";
// import PaymentModal from "./Components/PaymentModal";
// import PaymentModal from "./Components/PaymentModal";
// import Payment from "./Components/Payment";


function App() {
    const [role, setRole] = useState(localStorage.getItem('role'));
    const handleLoginSuccess = (userRole) => {
        localStorage.setItem('role', userRole); 
        setRole(userRole); 
    };
    useEffect(() => {
        const storedRole = localStorage.getItem('role');
        if (storedRole) {
            setRole(storedRole);
        }
    }, []);
    console.log('Role from localStorage:', role); 
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login onLoginSuccess={handleLoginSuccess} />} /> 
                <Route path="/register" element={<Register />} /> 
                <Route path="/forgot" element={<Forgot />} /> 
                <Route path="/reset" element={<Reset />} /> 
                {/* <Route path="/payment" element={<Payment />} /> */}
                {/* <Route path="/paymentmodal" element={<PaymentModal />} /> */}
                
                {role === 'admin' ? (
                    <Route path="/*" element={<PrivateRoute element={<Apps />} />} /> // Admin dashboard
                ) : (
                    <Route path="/*" element={<PrivateRoute element={<App2 />} />} /> // User dashboard
                )}
                
                <Route path="*" element={<Navigate to="/login" />} /> 
            </Routes>
        </BrowserRouter>
    );
}
export default App;
