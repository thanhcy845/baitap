import React from 'react';

function Profile({ user }) {
  if (!user) {
    return <p>Vui lòng đăng nhập để xem thông tin cá nhân.</p>;
  }

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Thông Tin Cá Nhân</h1>
      <p><strong>Tên đăng nhập:</strong> {user.username}</p>
      <p><strong>Email:</strong> {user.email}</p>
    </div>
  );
}

export default Profile;
