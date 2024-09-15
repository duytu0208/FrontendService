import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css'; // Import CSS

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="sidebar">
      <h1>My App</h1>
      <ul>
        <li>
          <Link to="/nguyen-am-card" className={location.pathname === '/nguyen-am-card' ? 'active' : ''}>
            <span className="icon">🃏</span> Nguyen Am
          </Link>
        </li>
        <li>
          <Link to="/phu-am-card" className={location.pathname === '/phu-am-card' ? 'active' : ''}>
              <span className="icon">🃏</span> Phu Am
          </Link>
        </li>
        <li>
          <Link to="/chat" className={location.pathname === '/chat' ? 'active' : ''}>
              <span className="icon">🗨️</span> Chat
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
