import React, { useState } from "react";

interface Message {
  id: number;
  text: string;
}

interface Chat {
  id: number;
  messages: Message[];
}

interface User {
  id: number;
  name: string;
}

const WhatsAppClone: React.FC = () => {
  const [users, setUsers] = useState<User[]>([
    { id: 1, name: "User 1" },
    { id: 2, name: "User 2" },
    { id: 3, name: "User 3" },
  ]);

  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const [chats, setChats] = useState<Chat[]>([]);

  const handleUserSelection = (user: User) => {
    setSelectedUser(user);
    // Logic to fetch chat for selected user can be added here
  };

  return (
    <div className="whatsapp-container">
      <div className="sidebar">
        <h2>Chats</h2>
        <ul>
          {users.map((user) => (
            <li key={user.id} onClick={() => handleUserSelection(user)}>
              {user.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="chat-container">
        {selectedUser && (
          <div className="chat">
            <h2>{selectedUser.name}</h2>
            <div className="messages">
              {/* Render messages for selected user */}
              {/* You can use the same logic as in the previous example */}
            </div>
            <div className="input-area">
              {/* Input area for sending messages */}
              {/* You can use the same input and button logic as in the previous example */}
            </div>
          </div>
        )}
        {!selectedUser && (
          <div className="default-chat">Select a user to start chatting</div>
        )}
      </div>
    </div>
  );
};

export default WhatsAppClone;
