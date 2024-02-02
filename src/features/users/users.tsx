import React, { useState } from "react";
import { userData, User } from "../../constants/constants";
import { Typography } from "@mui/material";
import ChatHome from "../chatHome";
import "./index.css";

const UserList: React.FC = () => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const handleUserClick = (user: User) => {
    setSelectedUser(user);
  };

  return (
    <div className="userListContainer">
      <div className="userList">
        {userData.map((user) => (
          <div
            key={user.userId}
            className="userItem"
            onClick={() => handleUserClick(user)}
          >
            <div className="profileIconContainer">
              <span className="profileIcon">{user?.profileIcon}</span>
            </div>
            <Typography className="userName">{user?.name}</Typography>
          </div>
        ))}
      </div>
      <div className="chatContainer">
        <ChatHome selectedUser={selectedUser} />
      </div>
    </div>
  );
};

export default UserList;
