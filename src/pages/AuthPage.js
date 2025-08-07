import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AuthPage({ setUser }) {
  const [isLoginView, setIsLoginView] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (!username || !password) {
      alert('Vui lòng nhập tên đăng nhập và mật khẩu');
      return;
    }
    // Giả lập đăng nhập thành công
    const fakeUser = { username, email: `${username}@example.com` };
    setUser(fakeUser);
    // Chuyển hướng đến dashboard sau khi đăng nhập
    navigate('/dashboard');
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (!username || !password || !email) {
      alert('Vui lòng điền đầy đủ thông tin');
      return;
    }
    // Giả lập đăng ký thành công
    alert('Đăng ký thành công! Vui lòng chuyển qua trang đăng nhập.');
    setIsLoginView(true); // Chuyển sang view đăng nhập sau khi đăng ký
  };

  return (
    <div style={{ maxWidth: '400px', margin: '2rem auto', padding: '2rem', border: '1px solid #ccc', borderRadius: '8px' }}>
      {isLoginView ? (
        // Form Đăng nhập
        <form onSubmit={handleLogin}>
          <h2>Đăng Nhập</h2>
          <div style={{ marginBottom: '1rem' }}>
            <label>Tên đăng nhập:</label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} style={{ width: '100%', padding: '8px' }} />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label>Mật khẩu:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ width: '100%', padding: '8px' }} />
          </div>
          <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#61dafb', border: 'none', cursor: 'pointer' }}>Đăng Nhập</button>
          <p style={{ textAlign: 'center', marginTop: '1rem' }}>
            Chưa có tài khoản?{' '}
            <span onClick={() => setIsLoginView(false)} style={{ color: '#61dafb', cursor: 'pointer' }}>
              Đăng ký ngay
            </span>
          </p>
        </form>
      ) : (
        // Form Đăng ký
        <form onSubmit={handleRegister}>
          <h2>Đăng Ký</h2>
          <div style={{ marginBottom: '1rem' }}>
            <label>Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ width: '100%', padding: '8px' }} />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label>Tên đăng nhập:</label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} style={{ width: '100%', padding: '8px' }} />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label>Mật khẩu:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ width: '100%', padding: '8px' }} />
          </div>
          <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#61dafb', border: 'none', cursor: 'pointer' }}>Đăng Ký</button>
          <p style={{ textAlign: 'center', marginTop: '1rem' }}>
            Đã có tài khoản?{' '}
            <span onClick={() => setIsLoginView(true)} style={{ color: '#61dafb', cursor: 'pointer' }}>
              Đăng nhập
            </span>
          </p>
        </form>
      )}
    </div>
  );
}

export default AuthPage;
