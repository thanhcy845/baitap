// src/pages/Home.js
import React from 'react';

function Home() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '80vh',
      background: '#f5f6fa'
    }}>
      <h1 style={{ color: '#2d3436', fontSize: '2.5rem', marginBottom: '1rem' }}>
        Welcome to the Home Page
      </h1>
      <p style={{ color: '#636e72', fontSize: '1.2rem', marginBottom: '2rem', textAlign: 'center', maxWidth: '500px' }}>
        Đây là trang chủ của dự án. Hãy khám phá các chức năng bên dưới!
      </p>
      <button
        style={{
          padding: '0.7rem 2rem',
          fontSize: '1rem',
          background: '#0984e3',
          color: '#fff',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
        }}
        onClick={() => alert('Bạn đã nhấn nút!')}
      >
        Khám phá ngay
      </button>
    </div>
  );
}

export default Home;
