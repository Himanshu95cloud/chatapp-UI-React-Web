import React, { useState } from "react";
import { userData, User } from "../../constants/constants";
import {
  Typography,
  TextField,
  IconButton,
  InputAdornment,
  Modal,
  Button,
} from "@mui/material";
import { Clear, Add } from "@mui/icons-material";
import ChatHome from "../chatHome";
import "./index.scss";

const UserList: React.FC = () => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [newUserName, setNewUserName] = useState<string>("");
  const [newUserProfile, setNewUserProfile] = useState<string>("");

  const handleUserClick = (user: User) => {
    setSelectedUser(user);
  };

  const clearSearch = () => {
    setSearchQuery("");
  };

  const handleAddUser = () => {
    // Create a new user object with the provided data
    const newUser: User = {
      userId: userData.length + 1,
      name: newUserName,
      profileIcon: newUserProfile,
    };

    // Update the userData array by adding the new user
    userData.push(newUser);

    // Close the modal and clear the input fields
    setOpenModal(false);
    setNewUserName("");
    setNewUserProfile("");
  };

  return (
    <div className="userListContainer">
      <div className="userList">
        <div className="searchContainer">
          <TextField
            size="small"
            label="Search Users"
            variant="outlined"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  {searchQuery && (
                    <IconButton onClick={clearSearch}>
                      <Clear color="primary" />
                    </IconButton>
                  )}
                </InputAdornment>
              ),
            }}
          />
          <IconButton className="icon-add" onClick={() => setOpenModal(true)}>
            <Add color="primary" />
          </IconButton>
        </div>
        {userData
          .filter((user) =>
            user.name.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .map((user) => (
            <div
              key={user.userId}
              className="userItem"
              onClick={() => handleUserClick(user)}
            >
              <div className="profileIconContainer">
                <span className="profileIcon">{user?.profileIcon}</span>
              </div>
              <Typography className="userName">
                {user?.name === userData[0].name
                  ? `${user?.name} (Me)`
                  : user?.name}
              </Typography>
            </div>
          ))}
      </div>
      <div className="border-left" />
      <div className="chatContainer">
        <ChatHome selectedUser={selectedUser} />
      </div>
      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <div className="modalContainer">
          <div className="modalContent">
            <Typography variant="h5">Add New User</Typography>
            <div className="inputContainer">
              <TextField
                label="Name"
                variant="outlined"
                value={newUserName}
                onChange={(e) => setNewUserName(e.target.value)}
                className="textInput"
              />
              <TextField
                label="Profile Icon"
                variant="outlined"
                value={newUserProfile}
                onChange={(e) => setNewUserProfile(e.target.value)}
                className="textInput"
              />
            </div>
            <div className="buttonContainer">
              <Button
                variant="contained"
                className="cancelButton"
                color="secondary"
                onClick={() => setOpenModal(false)}
              >
                Cancel
              </Button>

              <Button
                variant="contained"
                onClick={handleAddUser}
                className="addButton"
                color="primary"
              >
                Add
              </Button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default UserList;
