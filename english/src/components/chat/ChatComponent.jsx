import React from 'react';
import './ChatComponent.css'; // Import CSS cho ChatComponent

function ChatComponent({ messages }) {
  return (
    <div className="chat-container">
      {messages.map((msg, index) => (
        <div key={index} className={`message ${msg.person}`}>
          <div className="message-header">
            {msg.person}
          </div>
          <p>{msg.message}</p>
        </div>
      ))}
    </div>
  );
}

export default ChatComponent;
