import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import LoginRegister from "./components/LoginRegister/LoginRegister";
import MainContent from "./components/Main/Main";

const App = () => {
    const [darkMode, setDarkMode] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isOpen, setIsOpen] = useState(true);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsAuthenticated(true);
        }
    }, []);

    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/login" element={<LoginRegister setIsAuthenticated={setIsAuthenticated} />} />
                    <Route path="/register" element={<LoginRegister setIsAuthenticated={setIsAuthenticated} />} />
                    <Route 
                        path="/main" 
                        element={
                            isAuthenticated ? (
                                <MainContent 
                                    isOpen={isOpen} 
                                    darkMode={darkMode} 
                                    toggleDarkMode={toggleDarkMode}
                                    toggleSidebar={toggleSidebar} //  
                                />
                            ) : (
                                <Navigate to="/login" />
                            )
                        } 
                    />
                    <Route path="*" element={<Navigate to="/login" />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
