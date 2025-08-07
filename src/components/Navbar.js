import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

function Navbar({ user, setUser }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null); // Xóa thông tin người dùng
    navigate('/'); // Chuyển về trang chủ
  };

  const linkStyle = {
    margin: '0 10px',
    textDecoration: 'none',
    color: 'white',
    fontWeight: 'bold'
  };

  const activeLinkStyle = {
    ...linkStyle,
    textDecoration: 'underline'
  };

  return (
    <nav style={{ padding: '1rem', backgroundColor: '#282c34', color: 'white', display: 'flex', justifyContent: 'space-between' }}>
      <div>
        <NavLink to="/" style={({ isActive }) => isActive ? activeLinkStyle : linkStyle}>Home</NavLink>
        <NavLink to="/about" style={({ isActive }) => isActive ? activeLinkStyle : linkStyle}>About</NavLink>
        {user && <NavLink to="/dashboard" style={({ isActive }) => isActive ? activeLinkStyle : linkStyle}>Dashboard</NavLink>}
      </div>
      <div>
        {user ? (
          <>
            <NavLink to="/profile" style={({ isActive }) => isActive ? activeLinkStyle : linkStyle}>
              Chào, {user.username}
            </NavLink>
            <button onClick={handleLogout} style={{ marginLeft: '10px', cursor: 'pointer' }}>Đăng xuất</button>
          </>
        ) : (
          <NavLink to="/auth" style={({ isActive }) => isActive ? activeLinkStyle : linkStyle}>Đăng Nhập / Đăng Ký</NavLink>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
