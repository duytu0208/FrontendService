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
          <Link to="/card" className={location.pathname === '/card' ? 'active' : ''}>
            <span className="icon">🃏</span> Card
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
