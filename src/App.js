import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Cập nhật các import
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import AuthPage from './pages/AuthPage'; // Import trang mới

function App() {
  // Lấy user từ localStorage khi ứng dụng khởi động 
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem('user')));

  // Lưu user vào localStorage mỗi khi state thay đổi 
  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);

  return (
    <Router>
      <Navbar user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        
        {/* Cập nhật các route được bảo vệ */}
        <Route 
            path="/dashboard" 
            element={user ? <Dashboard /> : <Navigate to="/auth" />} 
        />
        <Route 
            path="/profile" 
            element={user ? <Profile user={user} /> : <Navigate to="/auth" />} 
        />
        
        {/* Thay thế Login và Register bằng AuthPage */}
        <Route 
            path="/auth" 
            element={user ? <Navigate to="/dashboard" /> : <AuthPage setUser={setUser} />} 
        />
        
        {/* Route mặc định nếu không khớp */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
