import React from 'react';
import ChatComponent from '../chat/ChatComponent'; // Import ChatComponent

function Chat() {
  // Dữ liệu mẫu cho ChatComponent
  const messages = [
    { person: 'Person1', message: 'Hello from Person1' },
    { person: 'Person2', message: 'Hello from Person2' },
    { person: 'Person1', message: 'How are you?' },
    { person: 'Person2', message: 'I am good, thanks!' },
    { person: 'Person1', message: 'Glad to hear that!' }
  ];

  return (
    <div>
      <h1>Chat Page</h1>
      <ChatComponent messages={messages} />
    </div>
  );
}

export default Chat;
