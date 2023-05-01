import React from 'react';

const Header = () => {
  return (
    <header>
      <div className="logo">App Logo</div>
      <div className="search-container">
        <input type="search" placeholder="Search data or metrics..." />
      </div>
      <div className="user-settings">
        <span className="profile-icon">👤</span>
        <span className="settings-icon">⚙️</span>
      </div>
    </header>
  );
};

export default Header;
