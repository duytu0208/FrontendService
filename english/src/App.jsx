import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/sidebar/Sidebar';
import Chat from './components/pages/Chat';
import NguyenAmCard from './components/pages/NguyenAmCard';
import PhuAmCard from './components/pages/PhuAmCard';

function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path="/chat" element={<Chat />} />
            <Route path="/nguyen-am-card" element={<NguyenAmCard />} />
            <Route path="/phu-am-card" element={<PhuAmCard />} />
            <Route path="*" element={<div>404 Not Found</div>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
